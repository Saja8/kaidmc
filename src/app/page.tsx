import {
  Badge,
  Button,
  Column,
  Heading,
  Icon,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale, routes } from "@/resources";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { home } = getLocalizedResources(locale);

  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function Home() {
  const locale = await getServerLocale();
  const { about, business, education, home, personal, person } = getLocalizedResources(locale);
  const openSectionLabel =
    locale === "en" ? "View services" : locale === "ja" ? "サービスを見る" : "Ver servicios";
  const briefMailHref = `mailto:${person.email}?subject=${encodeURIComponent("KaiLinks DMC request")}`;
  const contactPageHref = "https://kailinks.com/contact";

  /* ── Trilingual UI strings ── */
  const heroLead =
    locale === "en"
      ? {
          title: "Tell us about your next program",
          description:
            "Send us destination, dates, group size, and goals. We usually reply in 1-2 business days with a clear plan, timeline, and budget range.",
          checklist: ["Destination(s)", "Dates / timing", "Group size", "Main objective"],
          emailCta: "Send your brief",
          contactCta: "Open contact page",
        }
      : locale === "ja"
        ? {
            title: "次のプログラムについてご相談ください",
            description:
              "行き先・日程・人数・目的をお送りください。通常1〜2営業日以内に、具体的なプラン・スケジュール・概算予算をご提案します。",
            checklist: ["行き先", "日程 / 時期", "人数", "主目的"],
            emailCta: "要件をメール送信",
            contactCta: "お問い合わせページ",
          }
        : {
            title: "Cuéntanos sobre tu próximo programa",
            description:
              "Envía destino, fechas, tamaño del grupo y objetivo. Normalmente respondemos en 1-2 días hábiles con un plan claro, cronograma y rango de presupuesto.",
            checklist: ["Destino(s)", "Fechas / timing", "Tamaño del grupo", "Objetivo principal"],
            emailCta: "Enviar briefing",
            contactCta: "Abrir página de contacto",
          };

  const capabilities =
    locale === "en"
      ? [
          { icon: "book", title: "Study programs", desc: "Academic tours, campus visits, faculty exchange" },
          { icon: "grid", title: "MICE & incentives", desc: "Meetings, incentive trips, conferences, events" },
          { icon: "globe", title: "Expo pavilions", desc: "Booth logistics, market entry, B2B matchmaking" },
          { icon: "person", title: "Individual travel", desc: "Event attendance, sports travel, freelancer logistics" },
        ]
      : locale === "ja"
        ? [
            { icon: "book", title: "教育プログラム", desc: "学術ツアー、キャンパス訪問、教員交流" },
            { icon: "grid", title: "MICE・インセンティブ", desc: "会議、報奨旅行、カンファレンス、イベント" },
            { icon: "globe", title: "展示パビリオン", desc: "ブース運営、市場参入、B2Bマッチング" },
            { icon: "person", title: "個人渡航", desc: "イベント参加、スポーツ遠征、フリーランス対応" },
          ]
        : [
            { icon: "book", title: "Programas académicos", desc: "Tours universitarios, visitas a campus, intercambio docente" },
            { icon: "grid", title: "MICE e incentivos", desc: "Reuniones, viajes de incentivos, conferencias, eventos" },
            { icon: "globe", title: "Pabellones de expo", desc: "Logística de stands, entrada a mercados, matchmaking B2B" },
            { icon: "person", title: "Viajes individuales", desc: "Eventos, competencias deportivas, logística freelancer" },
          ];

  const servicesIntro =
    locale === "en"
      ? {
          badge: "Services",
          heading: "Three tracks, one quality standard",
          description:
            "Each track has its own planning model — universities need different timelines than corporate groups. Pick the one that fits your program.",
        }
      : locale === "ja"
        ? {
            badge: "サービス",
            heading: "3つの区分、1つの品質基準",
            description:
              "大学と企業ではスケジュールも設計も異なります。目的に合う区分を選んでください。",
          }
        : {
            badge: "Servicios",
            heading: "Tres líneas, un solo estándar de calidad",
            description:
              "Cada línea tiene su propio modelo de planeación — las universidades necesitan tiempos diferentes que los grupos corporativos. Elige la que se ajuste a tu programa.",
          };

  const regions =
    locale === "en"
      ? ["Japan", "Mexico & Latam", "Hong Kong & China", "Germany & EU"]
      : locale === "ja"
        ? ["日本", "メキシコ・中南米", "香港・中国", "ドイツ・EU"]
        : ["Japón", "México y Latam", "Hong Kong y China", "Alemania y UE"];

  const regionsLabel =
    locale === "en" ? "Where we deliver" : locale === "ja" ? "対応地域" : "Donde operamos";

  /* Short taglines for homepage service cards (different from section page descriptions) */
  const taglines =
    locale === "en"
      ? {
          education: "Study tours, campus visits, and institutional exchanges — coordinated on-ground so your faculty focuses on teaching.",
          business: "Conferences, expos, incentive trips, and market-entry operations — one team, multiple markets.",
          personal: "Freelancers attending trade shows, athletes going to competitions — we handle the logistics, you handle the rest.",
        }
      : locale === "ja"
        ? {
            education: "スタディツアー、キャンパス訪問、大学間交流 — 現地運営は私たちに、教員は教育に専念。",
            business: "カンファレンス、展示会、インセンティブ旅行、市場参入 — 一つのチームで複数市場に対応。",
            personal: "展示会参加のフリーランス、大会遠征のアスリート — ロジスティクスは私たちが対応。",
          }
        : {
            education: "Study tours, visitas a campus e intercambios — operados en sitio para que tu equipo académico se enfoque en enseñar.",
            business: "Conferencias, expos, viajes de incentivo y entrada a mercados — un equipo, múltiples destinos.",
            personal: "Freelancers en ferias, deportistas en competencias — nosotros manejamos la logística, tú haces lo tuyo.",
          };

  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* ── 1. HERO: badge + headline + subline ── */}
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="center" paddingTop="16" paddingBottom="20" paddingLeft="12">
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="20">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>

          {/* ── 2. WHAT WE DO — capability tiles ── */}
          <RevealFx translateY={10} delay={0.26} fillWidth horizontal="center" paddingBottom="16">
            <Row fillWidth wrap horizontal="center" gap="12" className="kailinksStatsStrip">
              {capabilities.map((c) => (
                <Column
                  key={c.title}
                  align="center"
                  horizontal="center"
                  gap="4"
                  padding="12"
                  radius="m"
                  border="neutral-alpha-weak"
                  background="page"
                  className="kailinksStat"
                  style={{ flex: "1 1 8rem", maxWidth: "12rem" }}
                >
                  <Icon name={c.icon} size="m" onBackground="brand-medium" />
                  <Text variant="label-strong-s" onBackground="neutral-strong" align="center">{c.title}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak" align="center">{c.desc}</Text>
                </Column>
              ))}
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* ── 4. SERVICES: "Three tracks, one quality standard" ── */}
      <RevealFx translateY="12" delay={0.45}>
        <Column fillWidth gap="12" align="center" horizontal="center">
          <Badge paddingX="12" paddingY="4" background="accent-alpha-weak" arrow={false}>
            {servicesIntro.badge}
          </Badge>
          <Heading as="h2" variant="display-strong-m" align="center" wrap="balance">
            {servicesIntro.heading}
          </Heading>
          <Text
            align="center"
            onBackground="neutral-weak"
            variant="body-default-l"
            wrap="balance"
            style={{ maxWidth: "36rem" }}
          >
            {servicesIntro.description}
          </Text>
        </Column>
      </RevealFx>

      {routes["/education"] && (
        <RevealFx translateY="16" delay={0.55}>
          <Column
            fillWidth
            gap="12"
            padding="20"
            border="neutral-alpha-weak"
            background="page"
            radius="l"
            className="kailinksServiceCard"
          >
            <Row gap="8" vertical="center">
              <Icon name="book" size="l" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-l" wrap="balance">
                {education.title}
              </Heading>
            </Row>
            <Text onBackground="neutral-weak" variant="body-default-l">
              {taglines.education}
            </Text>
            <Button
              href={education.path}
              variant="secondary"
              size="m"
              weight="default"
              data-border="rounded"
              prefixIcon="book"
              arrowIcon
            >
              {openSectionLabel}
            </Button>
          </Column>
        </RevealFx>
      )}

      {routes["/business"] && (
        <RevealFx translateY="16" delay={0.65}>
          <Column
            fillWidth
            gap="12"
            padding="20"
            border="neutral-alpha-weak"
            background="page"
            radius="l"
            className="kailinksServiceCard"
          >
            <Row gap="8" vertical="center">
              <Icon name="grid" size="l" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-l" wrap="balance">
                {business.title}
              </Heading>
            </Row>
            <Text onBackground="neutral-weak" variant="body-default-l">
              {taglines.business}
            </Text>
            <Button
              href={business.path}
              variant="secondary"
              size="m"
              weight="default"
              data-border="rounded"
              prefixIcon="grid"
              arrowIcon
            >
              {openSectionLabel}
            </Button>
          </Column>
        </RevealFx>
      )}

      {routes["/personal"] && (
        <RevealFx translateY="16" delay={0.75}>
          <Column
            fillWidth
            gap="12"
            padding="20"
            border="neutral-alpha-weak"
            background="page"
            radius="l"
            className="kailinksServiceCard"
          >
            <Row gap="8" vertical="center">
              <Icon name="person" size="l" onBackground="brand-medium" />
              <Heading as="h3" variant="heading-strong-l" wrap="balance">
                {personal.title}
              </Heading>
            </Row>
            <Text onBackground="neutral-weak" variant="body-default-l">
              {taglines.personal}
            </Text>
            <Button
              href={personal.path}
              variant="secondary"
              size="m"
              weight="default"
              data-border="rounded"
              prefixIcon="person"
              arrowIcon
            >
              {openSectionLabel}
            </Button>
          </Column>
        </RevealFx>
      )}

      {/* ── REGIONS STRIP ── */}
      <RevealFx translateY="16" delay={0.8}>
        <Column fillWidth gap="8" align="center" horizontal="center">
          <Text variant="label-default-s" onBackground="neutral-weak" align="center">
            {regionsLabel}
          </Text>
          <Row gap="8" wrap horizontal="center">
            {regions.map((r) => (
              <Badge
                key={r}
                paddingX="12"
                paddingY="4"
                background="neutral-alpha-weak"
                border="neutral-alpha-weak"
                arrow={false}
              >
                <Row gap="4" vertical="center">
                  <Icon name="globe" size="xs" onBackground="brand-medium" />
                  <Text variant="label-strong-s">{r}</Text>
                </Row>
              </Badge>
            ))}
          </Row>
        </Column>
      </RevealFx>

      {/* ── TRUSTED-BY CLIENT LOGOS ── */}
      <RevealFx translateY="16" delay={0.9}>
        <Column fillWidth gap="12" align="center" horizontal="center">
          <Text variant="label-default-s" onBackground="neutral-weak" align="center">
            {locale === "en"
              ? "Trusted by organizations across 4 continents"
              : locale === "ja"
                ? "4大陸の組織から信頼されています"
                : "Organizaciones en 4 continentes confían en nosotros"}
          </Text>
          <Row
            gap="24"
            wrap
            horizontal="center"
            style={{ opacity: 0.55, filter: "grayscale(1)" }}
          >
            {Array.from({ length: 8 }, (_, i) => (
              <img
                key={i}
                src={`/images/clients/client-${i + 1}.png`}
                alt={`Client ${i + 1}`}
                style={{ height: "2rem", width: "auto", objectFit: "contain" }}
              />
            ))}
          </Row>
        </Column>
      </RevealFx>

      {/* ── 7. CTA BRIEF PANEL (bottom — after visitor understands what we do) ── */}
      <RevealFx translateY="16" delay={0.95}>
        <Column
          fillWidth
          maxWidth="m"
          gap="16"
          padding="24"
          border="neutral-alpha-medium"
          background="neutral-alpha-weak"
          radius="l"
          className="kailinksHeroPanel"
        >
          <Column gap="8" align="center" horizontal="center">
            <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
              {locale === "en" ? "Get started" : locale === "ja" ? "お問い合わせ" : "Comenzar"}
            </Badge>
            <Heading as="h2" variant="heading-strong-xl" align="center" wrap="balance">
              {heroLead.title}
            </Heading>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
              style={{ maxWidth: "32rem" }}
            >
              {heroLead.description}
            </Text>
            <Row gap="8" wrap horizontal="center" paddingTop="4">
              {heroLead.checklist.map((item) => (
                <Badge
                  key={item}
                  paddingX="12"
                  paddingY="4"
                  background="page"
                  border="neutral-alpha-weak"
                  arrow={false}
                >
                  {item}
                </Badge>
              ))}
            </Row>
          </Column>
          <Row gap="12" wrap horizontal="center">
            <Button
              data-border="rounded"
              href={briefMailHref}
              variant="primary"
              size="l"
              weight="default"
              prefixIcon="email"
              arrowIcon
            >
              {heroLead.emailCta}
            </Button>
            <Button
              data-border="rounded"
              href={contactPageHref}
              variant="secondary"
              size="l"
              weight="default"
              prefixIcon="calendar"
              arrowIcon
            >
              {heroLead.contactCta}
            </Button>
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
