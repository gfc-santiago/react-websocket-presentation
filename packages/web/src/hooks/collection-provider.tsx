import { ReactNode, useMemo } from "react";
import { Collection, CollectionContext } from "./collection";
import {
  Page,
  PageCollection,
  PageCollectionType,
  Presentation,
  Section,
  Song,
} from "../pages/private/dashboard/types.d";

interface CollectionProviderProps {
  presentation: Presentation;
  children?: ReactNode;
}

export default function CollectionProvider({
  presentation,
  children,
}: CollectionProviderProps) {
  const value = useMemo<Collection>(() => {
    const pageMap = new Map<string, Page>();
    const pages: Page[] = [];
    const collection = presentation.items.map<PageCollection>((col, colIdx) => {
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

    return {
      collection,
      pages,
      get: (id) => (id ? pageMap.get(id) : undefined),
      presentation,
    };
  }, [presentation]);

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}
