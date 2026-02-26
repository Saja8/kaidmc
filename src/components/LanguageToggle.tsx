"use client";

import { Button } from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { Locale, getClientLocale, setClientLocale } from "@/resources/locale";

export const LanguageToggle = () => {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  const order: Locale[] = ["es", "en", "ja"];
  const currentIndex = order.indexOf(locale);
  const nextLocale: Locale = order[(currentIndex + 1) % order.length];

  const switchLocale = () => {
    setClientLocale(nextLocale);
    setLocale(nextLocale);
    window.location.reload();
  };

  return (
    <Button variant="secondary" size="s" onClick={switchLocale}>
      {nextLocale === "ja" ? "日本語" : nextLocale.toUpperCase()}
    </Button>
  );
};
