export enum PageCollectionType {
  Song = "Song",
  Verse = "Verse",
  Response = "Response",
}

export enum LayoutType {
  Subtitle = "Subtitle",
  Preview = "Preview",
}

export interface Navigation {
  prev?: string;
  next?: string;
}

export interface Collection {
  id?: string;
  type: PageCollectionType;
  title: string;
  pages: (Section | Page)[];
  alias?: string;
  nav?: Navigation;
}

export interface Response extends Collection {
  type: PageCollectionType.Response;
}

export interface Song extends Collection {
  type: PageCollectionType.Song;
  author?: string;
}

export interface BibleVerse extends Collection {
  type: PageCollectionType.Verse;
  version?: string;
}

export type PageCollection = Song | BibleVerse | Response;

export interface Presentation {
  id: string;
  items: PageCollection[];
}

export interface Section {
  id?: string;
  name: string;
  pages: Page[];
  nav?: Navigation;
}

export interface Page {
  id?: string;
  lines: (string | undefined)[];
  nav?: Navigation;
  layout?: LayoutType;
}
