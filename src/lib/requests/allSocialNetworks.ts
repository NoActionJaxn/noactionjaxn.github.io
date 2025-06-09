import type { CaisyEdges } from "../../types/caisy";
import graphql from "./graphql";

export interface SocialNetwork {
  connectionUrl: string;
  fontAwesomeIcon: string;
  id: string;
  label: string;
}

export interface AllSocialNetworksResponse {
  allSocialNetworks: CaisyEdges<SocialNetwork>;
}

const allSocialNetworksQuery = graphql.request<AllSocialNetworksResponse>(`
query FetchAllSocialNetworks {
  allSocialNetworks {
    edges {
      node {
        connectionUrl
        fontAwesomeIcon
        id
        label
        _meta {
          createdAt
          firstPublishedAt
          id
          locale
          locales
          publishedAt
          updatedAt
        }
      }
    }
  }
}
`);

export default allSocialNetworksQuery;
