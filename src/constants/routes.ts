import type { Route } from "../types/route";

export const TEMP_ROUTES: Record<string, Route> = {
  index: {
    path: "/coming-soon",
    label: "Index"
  },
  about: {
    path: "/about",
    label: "About",
  },
};

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
