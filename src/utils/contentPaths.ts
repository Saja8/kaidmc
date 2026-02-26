import type { Locale } from "@/resources/locale";

export function getBlogPostsPath(locale: Locale): string[] {
  return [
    "src",
    "app",
    "blog",
    locale === "en" ? "posts-en" : locale === "ja" ? "posts-ja" : "posts",
  ];
}

export function getEducationProjectsPath(locale: Locale): string[] {
  return [
    "src",
    "app",
    "education",
    locale === "en" ? "projects-en" : locale === "ja" ? "projects-ja" : "projects",
  ];
}

export function getBusinessProjectsPath(locale: Locale): string[] {
  return [
    "src",
    "app",
    "business",
    locale === "en" ? "projects-en" : locale === "ja" ? "projects-ja" : "projects",
  ];
}

export function getPersonalProjectsPath(locale: Locale): string[] {
  return [
    "src",
    "app",
    "personal",
    locale === "en" ? "projects-en" : locale === "ja" ? "projects-ja" : "projects",
  ];
}
