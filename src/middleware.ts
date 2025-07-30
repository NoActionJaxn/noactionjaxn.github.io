import { defineMiddleware } from "astro/middleware";
import { ENV } from "./constants/env";
import { TEMP_ROUTES } from "./constants/routes";

export const onRequest = defineMiddleware((context, next) => {
  const allowedRoutes = [TEMP_ROUTES.index.path, TEMP_ROUTES.about.path];
  
  if (import.meta.env.ENVIRONMENT === ENV.production && !allowedRoutes.includes(context.url.pathname)) {
    return context.redirect(TEMP_ROUTES.index.path);
  }
  return next();
});

