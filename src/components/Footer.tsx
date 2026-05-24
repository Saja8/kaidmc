import { Column, IconButton, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import { getLocalizedResources, getServerLocale } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = async () => {
  const locale = await getServerLocale();
  const { person, social } = getLocalizedResources(locale);
  const currentYear = new Date().getFullYear();

  const mainSiteLabel =
    locale === "en" ? "Main website" : locale === "ja" ? "メインサイト" : "Sitio principal";
  const contactLabel =
    locale === "en" ? "Contact" : locale === "ja" ? "お問い合わせ" : "Contacto";

  return (
    <Column as="footer" fillWidth padding="8" horizontal="center" gap="0">
      <Line background="neutral-alpha-weak" />
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="16"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
          gap: "12",
        }}
      >
        <Row gap="16" vertical="center" wrap>
          <Text variant="body-default-s" onBackground="neutral-strong">
            <Text onBackground="neutral-weak">© {currentYear} /</Text>
            <Text paddingX="4">{person.name}</Text>
          </Text>
          <Line background="neutral-alpha-weak" vert maxHeight="16" />
          <SmartLink href="https://kailinks.com" style={{ fontSize: "var(--font-size-body-s)" }}>
            {mainSiteLabel}
          </SmartLink>
          <SmartLink href="https://kailinks.com/contact" style={{ fontSize: "var(--font-size-body-s)" }}>
            {contactLabel}
          </SmartLink>
        </Row>
        <Row gap="12" vertical="center">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
      </Row>
      <Row height="80" hide s={{ hide: false }} />
    </Column>
  );
};
