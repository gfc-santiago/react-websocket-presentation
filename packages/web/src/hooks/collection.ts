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

export const CollectionContext = createContext<Collection>({
  collection: [],
  pages: [],
  get: () => undefined,
});

export default function useCollection() {
  return useContext(CollectionContext);
}
