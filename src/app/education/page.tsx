import { Badge, Button, Column, Heading, Meta, RevealFx, Schema, Text } from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getPosts } from "@/utils/utils";
import { getEducationProjectsPath } from "@/utils/contentPaths";
import { CustomMDX, ServiceList } from "@/components";

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
          ctaText: "Send us your dates, group size, and learning goals — we'll design a program and come back with a proposal.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "教育",
            ctaTitle: "学術プログラムをご検討中ですか？",
            ctaText: "日程、参加人数、学習目標をお送りください。プログラムを設計し、提案書をお送りします。",
            ctaButton: "お問い合わせ",
          }
        : {
            badge: "Educación",
            ctaTitle: "¿Planeas un programa académico?",
            ctaText: "Envíanos fechas, tamaño de grupo y objetivos de aprendizaje — diseñamos el programa y te enviamos una propuesta.",
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

      {/* — Hero — */}
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

      {/* — Services list — */}
      <RevealFx translateY="8">
        <Column fillWidth style={{ maxWidth: "38rem", margin: "0 auto" }}>
          <ServiceList
            items={posts.map((post) => ({
              title: post.metadata.title,
              summary: post.metadata.summary,
              image: post.metadata.images?.[0],
            }))}
          >
            {posts.map((post) => (
              <CustomMDX key={post.slug} source={post.content} />
            ))}
          </ServiceList>
        </Column>
      </RevealFx>

      {/* — CTA — */}
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
