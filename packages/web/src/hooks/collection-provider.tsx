import { ReactNode, useMemo } from "react";
import {
  Collection,
  CollectionContext,
  DataFormat,
  FileFormat,
  RefFormat,
} from "./collection";
import {
  Page,
  PageCollection,
  PageCollectionType,
  Presentation,
  Response,
  Section,
  Song,
} from "../pages/private/dashboard/types.d";
import axios from "axios";
import yaml from "js-yaml";
import { useQuery } from "@tanstack/react-query";

interface CollectionProviderProps {
  children?: ReactNode;
}

export default function CollectionProvider({
  children,
}: CollectionProviderProps) {
  const { isLoading: loading, data: presentation } = useQuery({
    queryKey: ["presentation"],
    queryFn: () => {
      return axios
        .get("/data/presentations/service.yml")
        .then((resp): FileFormat => yaml.load(resp.data) as FileFormat)
        .then(async ({ id, sections }) => {
          const toLines = (s: string): Page[] => {
            return (
              s
                ?.split?.("\n\n")
                .filter(Boolean)
                .map((c) => ({
                  lines: c.split("\n").filter(Boolean),
                })) ?? []
            );
          };

          const collection: Presentation = {
            id,
            items: (
              await Promise.all<PageCollection>(
                sections.map<Promise<PageCollection>>(
                  async (section: DataFormat) => {
                    if (section?.ref) {
                      const [type, key] = section.ref.split("/");
                      let resp: RefFormat;
                      let sequence: string;
                      let map: Map<string, string>;
                      switch (type) {
                        case "hymn":
                        case "paw":
                          resp = yaml.load(
                            (await axios.get(`/data/songs/${type}/${key}.yml`))
                              .data
                          ) as RefFormat;
                          if (!resp) {
                            return {
                              title: `error/${type}/${key}`,
                            } as Response;
                          }
                          sequence = section?.sequence ?? resp?.sequence ?? "";
                          map = new Map(Object.entries(resp.sections ?? {}));

                          return {
                            type: PageCollectionType.Song,
                            title: resp?.title ?? "",
                            author: resp?.artist,
                            pages: sequence.split(" ").map<Section>((sec) => {
                              return {
                                name: sec,
                                pages: toLines(map.get(sec) ?? ""),
                              };
                            }),
                          } as Song;
                        case "resp":
                          resp = yaml.load(
                            (await axios.get(`/data/responses/${key}.yml`)).data
                          ) as RefFormat;
                          return {
                            type: PageCollectionType.Response,
                            title: resp?.title ?? "",
                            pages: toLines(resp?.content ?? ""),
                          } as Response;
                      }
                      return {} as Response;
                    }
                    const response: Response = {
                      type: PageCollectionType.Response,
                      title: section?.name ?? "",
                      pages: toLines(section.content ?? ""),
                    };
                    return response;
                  }
                )
              )
            ).filter(Boolean),
          };
          return collection;
        });
    },
  });

  const value = useMemo<Collection>(() => {
    const pageMap = new Map<string, Page>();
    const pages: Page[] = [];
    let collection: PageCollection[] = [];
    if (!loading && presentation) {
      collection = presentation.items.map<PageCollection>((col, colIdx) => {
        const colKey = `${presentation.id}-c${colIdx}`;
        const colPages = [...col.pages];
        const newCol = { ...col, id: colKey };
        if (col.type === PageCollectionType.Song) {
          const song = col as Song;
          const lines = [song.title];
          if (song.author) lines.push(`{xs}${song.author}`);

          colPages.unshift({
            name: "Title",
            pages: [
              {
                lines,
              },
            ],
          });
        }
        newCol.pages = colPages.map((sop, sopIdx) => {
          const section = sop as Section;
          if (section.pages) {
            const secKey = `${colKey}-s${sopIdx}`;
            const newSec = { ...section, id: secKey };
            newSec.pages = newSec.pages.map((page, pageIdx) => {
              const pageKey = `${secKey}-p${pageIdx}`;
              const newPage = { ...page, id: pageKey };
              pages.push(newPage);
              pageMap.set(pageKey, newPage);
              return newPage;
            });
            return newSec;
          } else {
            const pageKey = `${colKey}-p${sopIdx}`;
            const newPage = { ...(sop as Page), id: pageKey };
            pages.push(newPage);
            pageMap.set(pageKey, newPage);
            return newPage;
          }
        });

        pages.forEach((page, i, self) => {
          page.nav = {
            prev: i > 0 ? self[i - 1].id : undefined,
            next: i < self.length - 1 ? self[i + 1].id : undefined,
          };
        });

        return newCol;
      });
    }

    return {
      loading,
      collection,
      pages,
      get: (id) => (id ? pageMap.get(id) : undefined),
      presentation,
    };
  }, [presentation, loading]);

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}
