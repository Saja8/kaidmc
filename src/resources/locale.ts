export type Locale = "en" | "es" | "ja";

export const defaultLocale: Locale = "es";

export function normalizeLocale(value?: string | null): Locale {
  if (value === "en") return "en";
  if (value === "ja") return "ja";
  return "es";
}

export async function getServerLocale(): Promise<Locale> {
  const { cookies } = await import("next/headers");
  const cookieStore = await cookies();
  return normalizeLocale(cookieStore.get("locale")?.value);
}

export function getClientLocale(): Locale {
  if (typeof document === "undefined") return defaultLocale;

  const match = document.cookie.match(/(?:^|; )locale=([^;]+)/);
  const raw = match?.[1] ? decodeURIComponent(match[1]) : undefined;
  return normalizeLocale(raw);
}

export function setClientLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `locale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}
