export type SocialNetworkNode = {
  connectionUrl: string;
  fontAwesomeIcon: string;
  id: string;
  label: string;
};

export type SocialNetworkEdge = {
  node: SocialNetworkNode;
};

export type SocialNetworkResponse = {
  allSocialNetworks: {
    edges: SocialNetworkEdge[];
  };
};
