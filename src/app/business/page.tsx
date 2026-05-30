import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { getBusinessProjectsPath } from "@/utils/contentPaths";
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
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );

  const ui =
    locale === "en"
      ? {
          badge: "Business",
          ctaTitle: "Exploring a new market?",
          ctaText:
            "Share your target market, current stage, timeline, and objective. We can map feasibility, meetings, local support, and next steps.",
          ctaButton: "Get in touch",
        }
      : locale === "ja"
        ? {
            badge: "企業",
            ctaTitle: "新しい市場を検討中ですか？",
            ctaText:
              "対象市場、現在の段階、タイムライン、目的をお知らせください。実現性、面談設計、現地サポート、次のステップを整理します。",
            ctaButton: "お問い合わせ",
          }
        : {
            badge: "Empresas",
            ctaTitle: "¿Quieres explorar un nuevo mercado?",
            ctaText:
              "Compártenos mercado objetivo, etapa actual, fechas y meta. Podemos mapear factibilidad, reuniones, soporte local y siguientes pasos.",
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

      {/* — Hero — */}
      <RevealFx fillWidth horizontal="center">
        <Column gap="16" horizontal="center" align="center" fillWidth>
          <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
            {ui.badge}
          </Badge>
          <Heading variant="display-strong-m" align="center" wrap="balance">
            {business.title}
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-weak"
            align="center"
            wrap="balance"
            style={{ maxWidth: "34rem" }}
          >
            {business.description}
          </Text>
          <div className="kailinksServiceHeroIllustration" aria-hidden="true">
            <img src="/images/illustrations/business-programs.svg" alt="" loading="eager" />
          </div>
        </Column>
      </RevealFx>

      {/* — Services list — */}
      <RevealFx translateY="8">
        <Column fillWidth style={{ maxWidth: "44rem", margin: "0 auto" }}>
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
          <Button variant="primary" size="l" href="https://kailinks.com/contact" arrowIcon>
            {ui.ctaButton}
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
}
