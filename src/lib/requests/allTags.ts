import graphql from "./graphql";
import type { AllTagsResponse } from "../../types/requests";

const allTagsQuery = graphql.request<AllTagsResponse>(`
query FetchAllTags {
  allTags {
    edges {
      node {
        color
        name
        id
      }
    }
  }
}
`);

export default allTagsQuery;
