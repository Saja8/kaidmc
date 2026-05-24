import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getPersonalProjectsPath } from "@/utils/contentPaths";
import { getPosts } from "@/utils/utils";
import {
  Badge,
  Button,
  Column,
  Heading,
  Meta,
  RevealFx,
  Schema,
  Text,
} from "@once-ui-system/core";
import { CustomMDX, ServiceList } from "@/components";

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
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const ui =
    locale === "en"
      ? {
          badge: "Groups",
          ctaTitle: "Planning a group program or special-interest tour?",
          ctaText:
            "Tell us the objective, destination, dates, and group size. We can scope the schedule, suppliers, logistics, and local support around the program.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "団体",
            ctaTitle: "団体プログラムやテーマ別ツアーを企画中ですか？",
            ctaText:
              "目的・行き先・日程・人数をお知らせください。スケジュール、サプライヤー、ロジスティクス、現地サポートをプログラムに合わせて設計します。",
            ctaButton: "お問い合わせ",
          }
        : {
            badge: "Grupos",
            ctaTitle: "¿Planeas un programa de grupo o tour temático?",
            ctaText:
              "Cuéntanos objetivo, destino, fechas y tamaño del grupo. Podemos definir agenda, proveedores, logística y soporte local alrededor del programa.",
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

      {/* — Hero — */}
      <RevealFx>
        <Column gap="12" horizontal="center" align="center">
          <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
            {ui.badge}
          </Badge>
          <Heading variant="display-strong-l" align="center">
            {personal.title}
          </Heading>
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
