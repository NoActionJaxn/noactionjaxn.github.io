export interface CaisyEdge<T> {
  node: T;
};

export interface SocialNetworkNode {
  connectionUrl: string;
  fontAwesomeIcon: string;
  id: string;
  label: string;
};

export interface SocialNetworkResponse {
  allSocialNetworks: {
    edges: CaisyEdge<SocialNetworkNode>[];
  };
};

export interface LandingPageIntroResponse {
  LandingPageIntro: {
    avatar: {
      height: number;
      id: string;
      originType: string;
      originalName: string;
      src: string;
      title: string;
      width: number;
    };
    description: string;
    id: string;
    title: string;
  }
};
