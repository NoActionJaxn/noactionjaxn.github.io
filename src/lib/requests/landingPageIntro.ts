import graphql from "./graphql";
import type { LandingPageResponse } from "../../types/requests";

const landingPageIntroQuery = graphql.request<LandingPageResponse>(`
query FetchLandingPageIntro {
  LandingPageIntro {
    description
    id
    title
    avatar {
      _meta {
        createdAt
        firstPublishedAt
        id
        locale
        locales
        publishedAt
        updatedAt
      }
      author
      blurHash
      copyright
      description
      dominantColor
      height
      id
      keywords
      originType
      originalName
      src
      title
      width
    }
  }
}
`);

export default landingPageIntroQuery;
