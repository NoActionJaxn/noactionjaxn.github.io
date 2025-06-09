export interface CaisyMeta {
  createdAt: string;
  firstPublishedAt: string;
  id: string;
  locale: string[];
  locales: string[];
  publishedAt: string;
  updatedAt: string;
}

export interface CaisyEdges<T> {
  edges: {
    node: T;
    cursor: string;
  }[];
}
