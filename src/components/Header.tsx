"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button, Fade, Line, Row, Text, ToggleButton } from "@once-ui-system/core";

import { display, routes } from "@/resources";
import { getClientLocale } from "@/resources/locale";
import styles from "./Header.module.scss";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [locale, setLocale] = useState<"en" | "es" | "ja">("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  const labels =
    locale === "en"
      ? {
          home: "Home",
          about: "About",
          blog: "Events",
          education: "Education",
          business: "Business",
          personal: "Groups",
          gallery: "Gallery",
        }
      : locale === "ja"
        ? {
            home: "ホーム",
            about: "会社情報",
            blog: "イベント",
            education: "教育",
            business: "企業",
            personal: "団体",
            gallery: "ギャラリー",
          }
        : {
            home: "Inicio",
            about: "Nosotros",
            blog: "Eventos",
            education: "Educación",
            business: "Empresas",
            personal: "Grupos",
            gallery: "Galería",
          };

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade hide s={{ hide: false }} fillWidth position="fixed" top="0" height="80" zIndex={9} />
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
        <Row
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
          s={{ hide: true }}
          className="kailinksHeaderBrand"
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "var(--static-space-8)",
            }}
          >
            <Text
              variant="label-strong-m"
              onBackground="brand-strong"
              style={{ letterSpacing: "-0.02em" }}
            >
              KaiLinks
            </Text>
          </a>
        </Row>
        <Row fillWidth horizontal="center" className="kailinksHeaderCenter">
          <Row
            as="nav"
            aria-label={
              locale === "en"
                ? "Main navigation"
                : locale === "ja"
                  ? "メインナビゲーション"
                  : "Navegación principal"
            }
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            className="kailinksNavShell"
          >
            <Row
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
              className="kailinksNavItems"
            >
              {routes["/"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/"
                      label={labels.home}
                      selected={pathname === "/" || pathname.startsWith("/about")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/"
                      prefixIcon="home"
                      aria-label={labels.home}
                      title={labels.home}
                      selected={pathname === "/" || pathname.startsWith("/about")}
                    />
                  </Row>
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/business"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/business"
                      label={labels.business}
                      selected={pathname.startsWith("/business")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/business"
                      prefixIcon="briefcase"
                      aria-label={labels.business}
                      title={labels.business}
                      selected={pathname.startsWith("/business")}
                    />
                  </Row>
                </>
              )}
              {routes["/education"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/education"
                      label={labels.education}
                      selected={pathname.startsWith("/education")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/education"
                      prefixIcon="student"
                      aria-label={labels.education}
                      title={labels.education}
                      selected={pathname.startsWith("/education")}
                    />
                  </Row>
                </>
              )}
              {routes["/groups"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/groups"
                      label={labels.personal}
                      selected={pathname.startsWith("/groups")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/groups"
                      prefixIcon="groups"
                      aria-label={labels.personal}
                      title={labels.personal}
                      selected={pathname.startsWith("/groups")}
                    />
                  </Row>
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/gallery"
                      label={labels.gallery}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/gallery"
                      prefixIcon="image"
                      aria-label={labels.gallery}
                      title={labels.gallery}
                      selected={pathname.startsWith("/gallery")}
                    />
                  </Row>
                </>
              )}
              {(routes["/education"] ||
                routes["/business"] ||
                routes["/groups"] ||
                routes["/gallery"]) &&
                (routes["/blog"] || routes["/events"]) && (
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/blog"
                      label={labels.blog}
                      selected={pathname.startsWith("/blog") || pathname.startsWith("/events")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/blog"
                      prefixIcon="book"
                      aria-label={labels.blog}
                      title={labels.blog}
                      selected={pathname.startsWith("/blog") || pathname.startsWith("/events")}
                    />
                  </Row>
                </>
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <LanguageToggle />
                  <Row s={{ hide: true }}>
                    <ThemeToggle />
                  </Row>
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Row
          fillWidth
          horizontal="end"
          vertical="center"
          paddingRight="12"
          s={{ hide: true }}
          className="kailinksHeaderAction"
        >
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
