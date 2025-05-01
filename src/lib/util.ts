import type { BlogPostsNode, ProjectNode } from "../types/requests";

export function isPostUpdated(post: BlogPostsNode | ProjectNode): boolean {
  const createdAt = new Date(post._meta.firstPublishedAt);
  const updatedAt = new Date(post._meta.publishedAt);
  return createdAt.getTime() !== updatedAt.getTime();
}
