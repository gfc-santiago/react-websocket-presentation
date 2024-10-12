import { createContext, useContext } from "react";
import {
  Page,
  PageCollection,
  Presentation,
} from "../pages/private/dashboard/types.d";

export interface Collection {
  collection: PageCollection[];
  pages: Page[];
  get: (id?: string) => Page | undefined;
  presentation?: Presentation;
}

export interface FileFormat {
  id: string;
  sections: DataFormat[];
}

export interface DataFormat {
  name?: string;
  content?: string;
  ref?: string;
  sequence?: string;
}

export interface RefFormat {
  title?: string;
  artist?: string;
  sections?: object;
  content?: string;
  sequence?: string;
}

export const CollectionContext = createContext<Collection>({
  collection: [],
  pages: [],
  get: () => undefined,
});

export default function useCollection() {
  return useContext(CollectionContext);
}
