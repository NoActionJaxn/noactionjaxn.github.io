export interface Route {
  path: string;
  label: string;
}

export const ROUTES: Record<string, Route> = {
  index: {
    path: "/",
    label: "Index",
  },
  about: {
    path: "/about",
    label: "About",
  },
  projects: {
    path: "/projects",
    label: "Projects",
  },
  blog: {
    path: "/blog",
    label: "Blog",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
};
