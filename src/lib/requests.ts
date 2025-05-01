import { gql } from "graphql-request";
import type { BlogPostsResponse, ProjectResponse, SocialNetworkResponse, TechStackResponse } from "../types/requests";
import { client } from "./graphql";

export const fetchBlogPosts: BlogPostsResponse = await client.request(gql`
  query fetchBlogPosts {
    allBlogPost(sort: {publishedAt: DESC}) {
      edges {
        node {
          _meta {
            createdAt
            firstPublishedAt
            id
            locale
            locales
            publishedAt
            updatedAt
          }
          id
          tagline
          slug
          tags
          thumbnail {
            src
            title
            width
            originType
            originalName
            id
            height
          }
          title
          content {
            json
          }
        }
      }
    }
  }
`);

export const fetchTechStack: TechStackResponse = await client.request(gql`
  query fetchTechStack {
    allTechStackItem {
      edges {
        node {
          id
          title
          url
          icon {
            id
            height
            width
            title
            src
            originalName
            originType
          }
        }
      }
    }
  }
`);

export const fetchNetworks: SocialNetworkResponse = await client.request(gql`
  query fetchNetworks {
    allSocialNetworks {
      edges {
        node {
          id
          label
          fontAwesomeIcon
          connectionUrl
        }
      }
    }
  }
`);

export const fetchProjects: ProjectResponse = await client.request(gql`
  query fetchProjects {
    allProjects {
      edges {
        node {
          _meta {
            createdAt
            firstPublishedAt
            id
            locale
            locales
            publishedAt
            updatedAt
          }
          content {
            json
          }
          id
          tags
          title
          slug
          thumbnail {
            height
            id
            originType
            originalName
            src
            title
            width
          }
        }
      }
    }
  }
`);
