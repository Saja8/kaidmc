"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, Fade, Line, Row, Text, ToggleButton } from "@once-ui-system/core";

import { routes, display } from "@/resources";
import { getClientLocale } from "@/resources/locale";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [locale, setLocale] = useState<"en" | "es" | "ja">("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  const labels =
    locale === "en"
      ? {
          about: "About",
          blog: "Blog",
          education: "Education",
          business: "Business",
          personal: "Personal",
        }
      : {
          about: locale === "ja" ? "会社情報" : "Nosotros",
          blog: locale === "ja" ? "ブログ" : "Blog",
          education: locale === "ja" ? "教育機関" : "Educacion",
          business: locale === "ja" ? "企業" : "Empresas",
          personal: locale === "ja" ? "個人向け" : "Personal",
        };

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        top="0"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s" s={{ hide: true }}>
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "var(--static-space-8)" }}>
            <Text variant="label-strong-m" onBackground="brand-strong" style={{ letterSpacing: "-0.02em" }}>
              KaiLinks
            </Text>
          </a>
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/education"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/education"
                      label={labels.education}
                      selected={pathname.startsWith("/education")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="book"
                      href="/education"
                      selected={pathname.startsWith("/education")}
                    />
                  </Row>
                </>
              )}
              {routes["/business"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/business"
                      label={labels.business}
                      selected={pathname.startsWith("/business")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="grid"
                      href="/business"
                      selected={pathname.startsWith("/business")}
                    />
                  </Row>
                </>
              )}
              {routes["/personal"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/personal"
                      label={labels.personal}
                      selected={pathname.startsWith("/personal")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="person"
                      href="/personal"
                      selected={pathname.startsWith("/personal")}
                    />
                  </Row>
                </>
              )}
              {(routes["/education"] || routes["/business"] || routes["/personal"]) &&
                (routes["/about"] || routes["/blog"]) && (
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                )}
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="openLink"
                      href="/about"
                      label={labels.about}
                      selected={pathname.startsWith("/about")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="openLink"
                      href="/about"
                      selected={pathname.startsWith("/about")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      prefixIcon="document"
                      href="/blog"
                      label={labels.blog}
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      prefixIcon="document"
                      href="/blog"
                      selected={pathname.startsWith("/blog")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <LanguageToggle />
                  <ThemeToggle />
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Row fillWidth horizontal="end" vertical="center" paddingRight="12" s={{ hide: true }}>
          <Button
            href="https://kailinks.com/contact"
            variant="secondary"
            size="s"
            weight="default"
            prefixIcon="email"
            data-border="rounded"
          >
            {locale === "en" ? "Contact" : locale === "ja" ? "お問い合わせ" : "Contacto"}
          </Button>
        </Row>
      </Row>
    </>
  );
};
