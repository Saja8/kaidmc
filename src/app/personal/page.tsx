import { Badge, Button, Column, Heading, Icon, Meta, RevealFx, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getPersonalProjectsPath } from "@/utils/contentPaths";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { personal } = getLocalizedResources(locale);

  return Meta.generate({
    title: personal.title,
    description: personal.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(personal.title)}`,
    path: personal.path,
  });
}

export default async function Personal() {
  const locale = await getServerLocale();
  const { about, personal, person } = getLocalizedResources(locale);

  const posts = getPosts(getPersonalProjectsPath(locale)).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const ui =
    locale === "en"
      ? {
          badge: "Individual",
          ctaTitle: "Have an event or competition coming up abroad?",
          ctaText: "Tell us the event, destination, and dates \u2014 we\u2019ll handle flights, hotels, registration, and local support so you can focus on what you do best.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "\u500b\u4eba",
            ctaTitle: "\u6d77\u5916\u306e\u30a4\u30d9\u30f3\u30c8\u3084\u5927\u4f1a\u306b\u53c2\u52a0\u4e88\u5b9a\u3067\u3059\u304b\uff1f",
            ctaText: "\u30a4\u30d9\u30f3\u30c8\u540d\u30fb\u884c\u304d\u5148\u30fb\u65e5\u7a0b\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u30d5\u30e9\u30a4\u30c8\u30fb\u30db\u30c6\u30eb\u30fb\u767b\u9332\u30fb\u73fe\u5730\u30b5\u30dd\u30fc\u30c8\u3092\u624b\u914d\u3057\u3001\u3042\u306a\u305f\u306f\u672c\u696d\u306b\u96c6\u4e2d\u3067\u304d\u307e\u3059\u3002",
            ctaButton: "\u304a\u554f\u3044\u5408\u308f\u305b",
          }
        : {
            badge: "Individual",
            ctaTitle: "\u00bfTienes un evento o competencia en el extranjero?",
            ctaText: "Cu\u00e9ntanos el evento, destino y fechas \u2014 nos encargamos de vuelos, hotel, registro y soporte local para que t\u00fa te enfoques en lo tuyo.",
            ctaButton: "Contactar",
          };

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={personal.path}
        title={personal.title}
        description={personal.description}
        image={`/api/og/generate?title=${encodeURIComponent(personal.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* \u2014 Hero \u2014 */}
      <RevealFx>
        <Column gap="12" horizontal="center" align="center">
          <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>{ui.badge}</Badge>
          <Heading variant="display-strong-l" align="center">{personal.title}</Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "34rem" }}
          >
            {personal.description}
          </Text>
        </Column>
      </RevealFx>

      {/* \u2014 Services list \u2014 */}
      <Column fillWidth gap="12" style={{ maxWidth: "38rem", margin: "0 auto" }}>
        {posts.map((post) => (
          <RevealFx key={post.slug} translateY="8">
            <Row
              fillWidth
              gap="16"
              padding="16"
              border="neutral-alpha-weak"
              background="page"
              radius="l"
              vertical="start"
            >
              <Icon name="person" size="m" onBackground="brand-medium" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
              <Column gap="4">
                <Heading as="h2" variant="heading-strong-m">{post.metadata.title}</Heading>
                <Text variant="body-default-s" onBackground="neutral-weak">{post.metadata.summary}</Text>
              </Column>
            </Row>
          </RevealFx>
        ))}
      </Column>

      {/* \u2014 CTA \u2014 */}
      <RevealFx translateY="12">
        <Column fillWidth gap="16" horizontal="center" align="center" padding="24">
          <Heading as="h3" variant="heading-strong-l" align="center" wrap="balance">
            {ui.ctaTitle}
          </Heading>
          <Text
            variant="body-default-m"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "30rem" }}
          >
            {ui.ctaText}
          </Text>
          <Button variant="primary" size="l" href="https://kailinks.com/contact">
            {ui.ctaButton}
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
