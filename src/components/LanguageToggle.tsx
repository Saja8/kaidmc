"use client";

import type { Locale } from "@/resources/locale";
import { getClientLocale, setClientLocale } from "@/resources/locale";
import { useEffect, useState } from "react";

const languageOptions: Array<{
  locale: Locale;
  flagCode: "mx" | "gb" | "jp";
  label: string;
}> = [
  { locale: "es", flagCode: "mx", label: "Español" },
  { locale: "en", flagCode: "gb", label: "English" },
  { locale: "ja", flagCode: "jp", label: "日本語" },
];

export const LanguageToggle = () => {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;

    setClientLocale(nextLocale);
    setLocale(nextLocale);
    window.location.reload();
  };

  return (
    <div className="kailinksLanguageToggle" aria-label="Language selector">
      {languageOptions.map((option) => (
        <button
          key={option.locale}
          type="button"
          className="kailinksLanguageOption"
          aria-label={option.label}
          aria-pressed={locale === option.locale}
          title={option.label}
          data-active={locale === option.locale}
          onClick={() => switchLocale(option.locale)}
        >
          <span className="kailinksFlagIcon" data-flag={option.flagCode} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
};
