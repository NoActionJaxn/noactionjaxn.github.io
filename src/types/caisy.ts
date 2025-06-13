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

export interface CaisyAsset {
  _meta: CaisyMeta;
  author: string;
  blurHash: string;
  copyright: string;
  description: string;
  dominantColor: string;
  height: number;
  id: string;
  keywords: string[];
  originType: string;
  originalName: string;
  src: string;
  title: string;
  width: number;
}
