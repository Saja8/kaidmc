import { Badge, Button, Column, Heading, Icon, Meta, RevealFx, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getBusinessProjectsPath } from "@/utils/contentPaths";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { business } = getLocalizedResources(locale);

  return Meta.generate({
    title: business.title,
    description: business.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(business.title)}`,
    path: business.path,
  });
}

export default async function Business() {
  const locale = await getServerLocale();
  const { about, business, person } = getLocalizedResources(locale);

  const posts = getPosts(getBusinessProjectsPath(locale)).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const ui =
    locale === "en"
      ? {
          badge: "Business",
          ctaTitle: "Need operational support for your next event?",
          ctaText: "Share your brief \u2014 destination, format, and group profile \u2014 and we\u2019ll come back with a feasibility outline and budget range.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "\u4f01\u696d",
            ctaTitle: "\u6b21\u306e\u30a4\u30d9\u30f3\u30c8\u306e\u904b\u55b6\u652f\u63f4\u304c\u5fc5\u8981\u3067\u3059\u304b\uff1f",
            ctaText: "\u76ee\u7684\u5730\u3001\u5f62\u5f0f\u3001\u53c2\u52a0\u8005\u60c5\u5831\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u3002\u5b9f\u73fe\u6027\u306e\u6982\u8981\u3068\u4e88\u7b97\u30ec\u30f3\u30b8\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\u3002",
            ctaButton: "\u304a\u554f\u3044\u5408\u308f\u305b",
          }
        : {
            badge: "Empresas",
            ctaTitle: "\u00bfNecesitas soporte operativo para tu pr\u00f3ximo evento?",
            ctaText: "Comp\u00e1rtenos tu brief \u2014 destino, formato y perfil de grupo \u2014 y te regresamos con un esquema de factibilidad y rango de presupuesto.",
            ctaButton: "Contactar",
          };

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={business.path}
        title={business.title}
        description={business.description}
        image={`/api/og/generate?title=${encodeURIComponent(business.title)}`}
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
          <Heading variant="display-strong-l" align="center">{business.title}</Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "34rem" }}
          >
            {business.description}
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
              <Icon name="grid" size="m" onBackground="brand-medium" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
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
