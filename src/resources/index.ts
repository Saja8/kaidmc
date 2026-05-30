// import a pre-defined template for config and content options
export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  events,
  work,
  gallery,
  education,
  business,
  personal,
} from "./content";

export { getLocalizedResources } from "./localized";
export {
  defaultLocale,
  getClientLocale,
  getServerLocale,
  normalizeLocale,
  setClientLocale,
  type Locale,
} from "./locale";

export {
  display,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
} from "./once-ui.config";
