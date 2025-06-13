import graphql from "./graphql";
import type { AllSocialNetworksResponse } from "../../types/requests";

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
