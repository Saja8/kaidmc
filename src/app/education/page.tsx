import { Badge, Button, Column, Heading, Icon, Meta, RevealFx, Row, Schema, Text } from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getEducationProjectsPath } from "@/utils/contentPaths";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { education } = getLocalizedResources(locale);

  return Meta.generate({
    title: education.title,
    description: education.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(education.title)}`,
    path: education.path,
  });
}

export default async function Education() {
  const locale = await getServerLocale();
  const { about, education, person } = getLocalizedResources(locale);

  const posts = getPosts(getEducationProjectsPath(locale)).sort(
    (a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
  );

  const ui =
    locale === "en"
      ? {
          badge: "Education",
          ctaTitle: "Planning an academic program?",
          ctaText: "Send us your dates, group size, and learning goals \u2014 we\u2019ll design a program and come back with a proposal.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "\u6559\u80b2",
            ctaTitle: "\u5b66\u8853\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u3054\u691c\u8a0e\u4e2d\u3067\u3059\u304b\uff1f",
            ctaText: "\u65e5\u7a0b\u3001\u53c2\u52a0\u4eba\u6570\u3001\u5b66\u7fd2\u76ee\u6a19\u3092\u304a\u9001\u308a\u304f\u3060\u3055\u3044\u3002\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u8a2d\u8a08\u3057\u3001\u63d0\u6848\u66f8\u3092\u304a\u9001\u308a\u3057\u307e\u3059\u3002",
            ctaButton: "\u304a\u554f\u3044\u5408\u308f\u305b",
          }
        : {
            badge: "Educaci\u00f3n",
            ctaTitle: "\u00bfPlaneas un programa acad\u00e9mico?",
            ctaText: "Env\u00edanos fechas, tama\u00f1o de grupo y objetivos de aprendizaje \u2014 dise\u00f1amos el programa y te enviamos una propuesta.",
            ctaButton: "Contactar",
          };

  return (
    <Column maxWidth="m" paddingTop="24" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={education.path}
        title={education.title}
        description={education.description}
        image={`/api/og/generate?title=${encodeURIComponent(education.title)}`}
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
          <Heading variant="display-strong-l" align="center">{education.title}</Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "34rem" }}
          >
            {education.description}
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
              <Icon name="book" size="m" onBackground="brand-medium" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
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
