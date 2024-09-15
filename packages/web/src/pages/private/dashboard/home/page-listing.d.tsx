import { ListProps } from "@mui/material";
import { Page, PageCollection, Section } from "../types.d";

export type ShowPageListener = (
  id: string,
  page: Page
) => void;

export interface NavigationProps {
  next?: string;
  prev?: string;
}

export interface PageListingProps extends ListProps {
  collection?: PageCollection;
  onShow?: ShowPageListener;
  current?: string;
  nav: NavigationProps;
}

export interface SectionLayoutProps {
  section: Section;
  onShow?: ShowPageListener;
  current?: string;
}

export interface PageLayoutProps {
  page: Page;
  onShow?: ShowPageListener;
  current?: string;
}

export interface LineLayoutProps {
  id: string;
  line: string[];
  current?: string;
}
