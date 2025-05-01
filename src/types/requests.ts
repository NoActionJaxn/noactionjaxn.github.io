export interface CaisyEdge<T> {
  node: T;
};

export interface CaisyAsset {
  height: number;
  id: string;
  originType: string;
  originalName: string;
  src: string;
  title: string;
  width: number;
};

export interface CaisyMeta {
  createdAt: string;
  firstPublishedAt: string;
  id: string;
  locale: string;
  locales: string[];
  publishedAt: string;
  updatedAt: string;
};

export interface BlogPostsNode {
  _meta: CaisyMeta;
  id: string;
  title: string;
  tagline: string;
  tags: {
    id: string;
    name: string;
  }[];
  slug: string;
  thumbnail: {
    id: string;
    title: string;
    originalName: string;
    src: string;
    originType: string;
    width: number;
    height: number;
  };
  content: {
    json: JSON;
  };
}

export interface ProjectNode {
  _meta: CaisyMeta;
  id: string;
  title: string;
  tags: {
    id: string;
    name: string;
  }[];
  slug: string;
  thumbnail: {
    id: string;
    title: string;
    originalName: string;
    src: string;
    originType: string;
    width: number;
    height: number;
  };
  content: {
    json: JSON;
  };
}

export interface SocialNetworkNode {
  connectionUrl: string;
  fontAwesomeIcon: string;
  id: string;
  label: string;
};


export interface TechStackNode {
  id: string;
  title: string;
  icon: CaisyAsset;
  url: string;
};

export interface LandingPageIntroResponse {
  LandingPageIntro: {
    avatar: CaisyAsset;
    description: string;
    id: string;
    title: string;
  }
};

export interface SocialNetworkResponse {
  allSocialNetworks: {
    edges: CaisyEdge<SocialNetworkNode>[];
  };
};

export interface TechStackResponse {
  allTechStackItem: {
    edges: CaisyEdge<TechStackNode>[];
  };
};

export interface BlogPostsResponse {
  allBlogPost: {
    edges: CaisyEdge<BlogPostsNode>[];
  };
};

export interface ProjectResponse {
  allProjects: {
    edges: CaisyEdge<ProjectNode>[];
  };
};
