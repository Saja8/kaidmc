import { MobileHomeTabs } from "@/components";
import { baseURL, getLocalizedResources, getServerLocale, routes } from "@/resources";
import {
  Badge,
  Button,
  Column,
  Heading,
  Meta,
  RevealFx,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

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
          title: "Start with an operational brief",
          description:
            "Share destination, dates, participant profile, and expected outcome. We respond with a practical delivery path and the first budget assumptions.",
          checklist: ["Destination", "Dates", "Participants", "Outcome"],
          emailCta: "Send your brief",
          contactCta: "Open contact page",
        }
      : locale === "ja"
        ? {
            title: "運営ブリーフから始める",
            description:
              "行き先、日程、参加者像、期待する成果をお送りください。実行手順と初期予算前提を整理してご返信します。",
            checklist: ["行き先", "日程", "参加者", "成果"],
            emailCta: "要件をメール送信",
            contactCta: "お問い合わせページ",
          }
        : {
            title: "Comienza con un brief operativo",
            description:
              "Comparte destino, fechas, perfil de participantes y resultado esperado. Respondemos con una ruta de ejecución y supuestos iniciales de presupuesto.",
            checklist: ["Destino", "Fechas", "Participantes", "Resultado"],
            emailCta: "Enviar brief",
            contactCta: "Abrir página de contacto",
          };

  const facts =
    locale === "en"
      ? [
          { number: "01", title: "Coordination", desc: "One lead contact from brief to delivery" },
          {
            number: "02",
            title: "Local network",
            desc: "Partners across East Asia, Latin America, and Europe",
          },
          {
            number: "03",
            title: "Logistics",
            desc: "Itinerary, suppliers, transport, and on-site control",
          },
          { number: "04", title: "Follow-up", desc: "Clear reporting after each program" },
        ]
      : locale === "ja"
        ? [
            { number: "01", title: "調整力", desc: "要件整理から実施まで一つの窓口で管理" },
            {
              number: "02",
              title: "現地ネットワーク",
              desc: "東アジア・中南米・欧州のパートナーと連携",
            },
            { number: "03", title: "ロジスティクス", desc: "旅程、調達、移動、現地運営を統合" },
            { number: "04", title: "フォロー", desc: "実施後の報告と次回改善まで対応" },
          ]
        : [
            {
              number: "01",
              title: "Coordinación",
              desc: "Un solo contacto desde brief hasta entrega",
            },
            {
              number: "02",
              title: "Red local",
              desc: "Aliados en Asia Oriental, América Latina y Europa",
            },
            {
              number: "03",
              title: "Logística",
              desc: "Itinerario, proveedores, traslados y control en sitio",
            },
            { number: "04", title: "Seguimiento", desc: "Reporte claro después de cada programa" },
          ];

  const factsIntro =
    locale === "en"
      ? { eyebrow: "Method", heading: "Four operating strengths" }
      : locale === "ja"
        ? { eyebrow: "運営体制", heading: "4つの運営力" }
        : { eyebrow: "Método", heading: "Cuatro fortalezas operativas" };

  const servicesIntro =
    locale === "en"
      ? {
          badge: "Programs",
          heading: "Built around the objective",
          description:
            "Choose the operating model that matches the audience, agenda, and level of local support required.",
        }
      : locale === "ja"
        ? {
            badge: "プログラム",
            heading: "目的に合わせた運営設計",
            description:
              "参加者、アジェンダ、現地サポートのレベルに合わせて、適切な運営モデルを選択できます。",
          }
        : {
            badge: "Programas",
            heading: "Diseño operativo según el objetivo",
            description:
              "Elige el modelo de operación según audiencia, agenda y nivel de soporte local requerido.",
          };

  const servicePanels = [
    {
      enabled: routes["/business"],
      href: business.path,
      title: business.title,
      description: business.description,
      image: "/images/illustrations/business-programs.svg",
      label:
        locale === "en"
          ? "Business programs"
          : locale === "ja"
            ? "企業プログラム"
            : "Programas empresariales",
      regions:
        locale === "en"
          ? ["East Asia", "Latin America", "Europe"]
          : locale === "ja"
            ? ["東アジア", "中南米", "欧州"]
            : ["Asia Oriental", "América Latina", "Europa"],
    },
    {
      enabled: routes["/education"],
      href: education.path,
      title: education.title,
      description: education.description,
      image: "/images/illustrations/education-programs.svg",
      label:
        locale === "en"
          ? "Academic programs"
          : locale === "ja"
            ? "教育プログラム"
            : "Programas académicos",
      regions:
        locale === "en"
          ? ["Japan", "Mexico", "Guatemala"]
          : locale === "ja"
            ? ["日本", "メキシコ", "グアテマラ"]
            : ["Japón", "México", "Guatemala"],
    },
    {
      enabled: routes["/groups"],
      href: personal.path,
      title: personal.title,
      description: personal.description,
      image: "/images/illustrations/group-programs.svg",
      label:
        locale === "en"
          ? "Group programs"
          : locale === "ja"
            ? "団体プログラム"
            : "Programas de grupo",
      regions:
        locale === "en"
          ? ["Japan", "Hong Kong", "Mexico"]
          : locale === "ja"
            ? ["日本", "香港", "メキシコ"]
            : ["Japón", "Hong Kong", "México"],
    },
  ].filter((panel) => panel.enabled);

  const clientLogos = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/clients/client-${i + 1}.png`,
    alt: "",
  }));

  return (
    <Column
      maxWidth="m"
      gap="xl"
      paddingY="12"
      horizontal="center"
      className="kailinksHomePage"
      style={{ position: "relative" }}
    >
      <div className="homeOrbWrap" aria-hidden="true" />
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
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="20"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2" className="kailinksHeroBadge">
                  {home.featured.title}
                </Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l" className="kailinksHomeHeadline">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="20">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              className="kailinksHomeSubline"
            >
              {home.subline}
            </Text>
          </RevealFx>

          {/* ── 2. FUJI-STYLE FACTS ── */}
          <RevealFx translateY={10} delay={0.26} fillWidth horizontal="center" paddingBottom="16">
            <Column fillWidth gap="16" className="kailinksCorporateSection">
              <Row fillWidth horizontal="between" vertical="end" wrap gap="12">
                <Column gap="4">
                  <Text variant="label-strong-s" onBackground="brand-medium">
                    {factsIntro.eyebrow}
                  </Text>
                  <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                    {factsIntro.heading}
                  </Heading>
                </Column>
              </Row>
              <Row fillWidth wrap gap="12" className="kailinksFactGrid">
                {facts.map((fact) => (
                  <Column key={fact.number} gap="8" className="kailinksFact">
                    <Text variant="heading-strong-xl" onBackground="brand-medium">
                      {fact.number}
                    </Text>
                    <Column gap="4">
                      <Text variant="label-strong-m" onBackground="neutral-strong">
                        {fact.title}
                      </Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {fact.desc}
                      </Text>
                    </Column>
                  </Column>
                ))}
              </Row>
            </Column>
          </RevealFx>
        </Column>
      </Column>

      {/* ── 3. OPERATIONS VISUAL ── */}
      <RevealFx fillWidth translateY="8" delay={0.32}>
        <div className="kailinksOperationsVisual" aria-hidden="true">
          <img src="/images/illustrations/kailinks-operations-map.svg" alt="" loading="lazy" />
        </div>
      </RevealFx>

      {/* ── CLIENT LOGO TICKER ── */}
      <div className="kailinksDestTicker" aria-hidden="true">
        <div className="kailinksDestTickerTrack">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div key={i} className="kailinksLogoItem">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. SERVICES: "Three tracks, one quality standard" ── */}
      <RevealFx translateY="12" delay={0.45}>
        <Column
          fillWidth
          gap="12"
          align="center"
          horizontal="center"
          className="kailinksServiceIntro"
        >
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
            className="kailinksServiceIntroDescription"
            style={{ maxWidth: "36rem" }}
          >
            {servicesIntro.description}
          </Text>
        </Column>
      </RevealFx>

      <MobileHomeTabs
        items={servicePanels.map(({ href, title, description, label }) => ({
          href,
          title,
          description,
          label,
        }))}
        actionLabel={openSectionLabel}
      />

      <RevealFx translateY="16" delay={0.55}>
        <Column fillWidth gap="16" className="kailinksServiceGrid">
          {servicePanels.map((panel, index) => (
            <Row
              key={panel.href}
              fillWidth
              gap="20"
              padding="16"
              border="neutral-alpha-weak"
              background="page"
              radius="m"
              vertical="stretch"
              className="kailinksServicePanel"
              s={{ direction: "column" }}
            >
              <div className="kailinksServiceImage">
                <img src={panel.image} alt={panel.label} loading={index === 0 ? "eager" : "lazy"} />
              </div>
              <Column flex={1} gap="12" paddingY="4">
                <Text variant="label-strong-s" onBackground="brand-medium">
                  {String(index + 1).padStart(2, "0")} / {panel.label}
                </Text>
                <Heading as="h3" variant="heading-strong-l" wrap="balance">
                  {panel.title}
                </Heading>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {panel.description}
                </Text>
                {panel.regions && (
                  <div className="kailinksRegionStr">
                    {panel.regions.map((r) => (
                      <span key={r} className="kailinksRegionTag">
                        {r}
                      </span>
                    ))}
                  </div>
                )}
                <Button
                  href={panel.href}
                  variant="secondary"
                  size="m"
                  weight="default"
                  data-border="rounded"
                  arrowIcon
                >
                  {openSectionLabel}
                </Button>
              </Column>
            </Row>
          ))}
        </Column>
      </RevealFx>

      {/* ── OPERATING COVERAGE ── */}
      <RevealFx translateY="16" delay={0.9}>
        <Column
          fillWidth
          gap="12"
          align="center"
          horizontal="center"
          className="kailinksClientProof"
        >
          <Text variant="label-default-s" onBackground="neutral-weak" align="center">
            {locale === "en"
              ? "Operating coverage across priority regions"
              : locale === "ja"
                ? "主要地域での運営対応"
                : "Cobertura operativa en regiones prioritarias"}
          </Text>
          <Row gap="8" wrap horizontal="center">
            {(locale === "en"
              ? ["East Asia", "Latin America", "Europe", "Multi-city programs"]
              : locale === "ja"
                ? ["東アジア", "中南米", "欧州", "複数都市プログラム"]
                : ["Asia Oriental", "América Latina", "Europa", "Programas multicity"]
            ).map((region) => (
              <Badge
                key={region}
                paddingX="12"
                paddingY="4"
                background="page"
                border="neutral-alpha-weak"
                arrow={false}
              >
                {region}
              </Badge>
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
              className="kailinksCtaDescription"
              style={{ maxWidth: "32rem" }}
            >
              {heroLead.description}
            </Text>
            <Row gap="8" wrap horizontal="center" paddingTop="4" className="kailinksCtaChecklist">
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
          <Row gap="12" wrap horizontal="center" className="kailinksCtaActions">
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
