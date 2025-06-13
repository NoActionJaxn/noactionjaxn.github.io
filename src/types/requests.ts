import type { CaisyAsset, CaisyEdges, CaisyMeta } from "./caisy";

export interface SocialNetwork {
  connectionUrl: string;
  fontAwesomeIcon: string;
  id: string;
  label: string;
}

export interface AllSocialNetworksResponse {
  allSocialNetworks: CaisyEdges<SocialNetwork>;
}

export interface Tag {
  color: string;
  name: string;
  id: string;
}

export interface AllTagsResponse {
  allSocialNetworks: CaisyEdges<Tag>;
}

export interface LandingPage {
  _meta: CaisyMeta;
  avatar: CaisyAsset;
  description: string;
  id: string;
  title: string;
}

export interface LandingPageResponse {
  LandingPageIntro: LandingPage;
}
