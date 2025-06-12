interface Route {
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

export const NAV_ROUTES = [ROUTES.index, ROUTES.about, ROUTES.contact];

export const SITE_MAP_ROUTES = [
  ROUTES.index,
  ROUTES.projects,
  ROUTES.blog,
  ROUTES.about,
  ROUTES.contact,
];
