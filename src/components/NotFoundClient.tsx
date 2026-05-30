"use client";

import { getClientLocale } from "@/resources";
import { Button, Column, Heading, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

export default function NotFoundClient() {
  const [locale, setLocale] = useState<string>("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  const labels =
    locale === "en"
      ? {
          heading: "Page Not Found",
          text: "The page you are looking for does not exist.",
          cta: "Back to home",
        }
      : locale === "ja"
        ? {
            heading: "ページが見つかりません",
            text: "お探しのページは存在しません。",
            cta: "ホームに戻る",
          }
        : {
            heading: "Página no encontrada",
            text: "La página que buscas no existe.",
            cta: "Volver al inicio",
          };

  return (
    <Column as="section" fill center paddingBottom="160" gap="16">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        {labels.heading}
      </Heading>
      <Text onBackground="neutral-weak" marginBottom="l">
        {labels.text}
      </Text>
      <Button href="/" variant="secondary" size="m" data-border="rounded" arrowIcon>
        {labels.cta}
      </Button>
    </Column>
  );
}
