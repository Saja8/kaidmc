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
          title: "Tell us the market. We'll map the path.",
          description:
            "Share your target market, company profile, and what you want to achieve. We'll come back with a diagnosis, a proposed agenda, and a realistic scope.",
          checklist: ["Target market", "Company profile", "Goal", "Timeline"],
          emailCta: "Send a brief",
          contactCta: "Open contact page",
        }
      : locale === "ja"
        ? {
            title: "市場を教えてください。私たちがルートを描きます。",
            description:
              "対象市場、御社のプロフィール、達成したいことをお聞かせください。診断、アジェンダ案、現実的なスコープをご返答します。",
            checklist: ["対象市場", "御社のプロフィール", "目標", "スケジュール"],
            emailCta: "ブリーフを送る",
            contactCta: "お問い合わせ",
          }
        : {
            title: "Dinos el mercado. Nosotros trazamos el camino.",
            description:
              "Comparte el mercado objetivo, el perfil de tu empresa y lo que quieres lograr. Respondemos con un diagnóstico, una agenda propuesta y un alcance realista.",
            checklist: ["Mercado objetivo", "Perfil de empresa", "Meta", "Plazo"],
            emailCta: "Enviar brief",
            contactCta: "Abrir página de contacto",
          };

  const facts =
    locale === "en"
      ? [
          { number: "01", title: "Market diagnosis", desc: "ICP, channels, and competitive read — before you arrive" },
          { number: "02", title: "B2B agenda", desc: "Pre-qualified meetings with interpretation and accompaniment" },
          { number: "03", title: "On-ground execution", desc: "Logistics, access, and real-time issue resolution" },
          { number: "04", title: "Deliverables", desc: "Contact notes, reports, and 30–90 day next steps" },
        ]
      : locale === "ja"
        ? [
            { number: "01", title: "市場診断", desc: "現地ICP・チャネル・競合分析 — 渡航前に完了" },
            { number: "02", title: "B2Bアジェンダ", desc: "精査済み商談 + 通訳・同行サポート付き" },
            { number: "03", title: "現地実行", desc: "移動・アクセス・リアルタイム対応を統括" },
            { number: "04", title: "成果物", desc: "商談メモ、報告書、30〜90日の次のアクション" },
          ]
        : [
            { number: "01", title: "Diagnóstico", desc: "ICP, canales y lectura competitiva — antes de llegar" },
            { number: "02", title: "Agenda B2B", desc: "Reuniones precalificadas con interpretación y acompañamiento" },
            { number: "03", title: "Ejecución en sitio", desc: "Logística, acceso y resolución de incidencias en tiempo real" },
            { number: "04", title: "Entregables", desc: "Notas de conversaciones, reportes y próximos pasos 30–90 días" },
          ];

  const factsIntro =
    locale === "en"
      ? { eyebrow: "What we deliver", heading: "More than logistics" }
      : locale === "ja"
        ? { eyebrow: "提供するもの", heading: "ロジスティクス以上の価値" }
        : { eyebrow: "Lo que entregamos", heading: "Más que logística" };

  const servicesIntro =
    locale === "en"
      ? {
          badge: "Programs",
          heading: "Choose your track",
          description:
            "We operate across three program types — each with the same structured methodology, adapted to your audience and goals.",
        }
      : locale === "ja"
        ? {
            badge: "プログラム",
            heading: "目的に合わせたトラック選択",
            description:
              "3種類のプログラムに対応。同じ体系的メソッドを、参加者とゴールに合わせて適用します。",
          }
        : {
            badge: "Programas",
            heading: "Elige tu modalidad",
            description:
              "Operamos tres tipos de programa — con la misma metodología estructurada, adaptada a tu audiencia y objetivos.",
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

  const clientLogos = [
    { src: "/images/clients/client-1.png", alt: "MYOB" },
    { src: "/images/clients/client-2.png", alt: "Belimo" },
    { src: "/images/clients/client-3.png", alt: "LifeGroups" },
    { src: "/images/clients/client-4.png", alt: "Grabyo" },
    { src: "/images/clients/client-5.png", alt: "Citrus" },
    { src: "/images/clients/client-6.png", alt: "Trustly" },
    { src: "/images/clients/client-7.png", alt: "Oldendorff" },
    { src: "/images/clients/client-8.png", alt: "Client logo" },
  ];

  const clientsIntro =
    locale === "en"
      ? "Selected clients and partners"
      : locale === "ja"
        ? "主なクライアント・パートナー"
        : "Clientes y aliados de referencia";

  /* ── How a program works — 4 steps ── */
  const processData =
    locale === "en"
      ? {
          eyebrow: "Method",
          heading: "How we enter a market with you",
          steps: [
            {
              num: "01",
              title: "Diagnosis",
              desc: "We map the market: ICP fit, key channels, relevant contacts, and barriers. You know what you're walking into before you book anything.",
            },
            {
              num: "02",
              title: "Agenda design",
              desc: "We source and pre-qualify meetings — importers, distributors, partners, institutions — and build a prioritized schedule around your goals.",
            },
            {
              num: "03",
              title: "In-market execution",
              desc: "We run the program on the ground: logistics, interpretation, accompaniment in every meeting, and real-time problem-solving.",
            },
            {
              num: "04",
              title: "Commercial deliverables",
              desc: "You leave with contact notes, conversation summaries, deal status, and a 30–90 day action plan. No blank slate after the trip.",
            },
          ],
        }
      : locale === "ja"
        ? {
            eyebrow: "メソッド",
            heading: "KaiLinksとともに市場へ",
            steps: [
              {
                num: "01",
                title: "診断",
                desc: "市場を読む：ICP適合性、主要チャネル、有効な接点、参入障壁。渡航前に全体像を把握できます。",
              },
              {
                num: "02",
                title: "アジェンダ設計",
                desc: "輸入業者・販売代理店・パートナー・機関を精査し、ゴールに沿った優先順位付きのスケジュールを構築します。",
              },
              {
                num: "03",
                title: "現地実行",
                desc: "ロジスティクス、通訳、全商談への同行、リアルタイム対応をKaiLinksが担当します。",
              },
              {
                num: "04",
                title: "商業的成果物",
                desc: "渡航後に：商談メモ、会話サマリー、商談状況、30〜90日のアクションプランをお渡しします。",
              },
            ],
          }
        : {
            eyebrow: "Método",
            heading: "Cómo entramos al mercado contigo",
            steps: [
              {
                num: "01",
                title: "Diagnóstico",
                desc: "Mapeamos el mercado: encaje de ICP, canales clave, contactos relevantes y barreras reales. Sabes a qué vas antes de reservar nada.",
              },
              {
                num: "02",
                title: "Diseño de agenda",
                desc: "Identificamos y precalificamos reuniones — importadores, distribuidores, socios, instituciones — y armamos un calendario priorizado según tus objetivos.",
              },
              {
                num: "03",
                title: "Ejecución en mercado",
                desc: "Operamos el programa en campo: logística, interpretación, acompañamiento en cada reunión y resolución de imprevistos en tiempo real.",
              },
              {
                num: "04",
                title: "Entregables comerciales",
                desc: "Sales con notas de contacto, resúmenes de conversaciones, estado de deals y un plan de acción 30–90 días. Sin pizarrón en blanco después del viaje.",
              },
            ],
          };

  /* ── Region coverage cards ── */
  const regionsData =
    locale === "en"
      ? {
          eyebrow: "Coverage",
          heading: "Where we operate",
          regions: [
            {
              name: "East Asia",
              desc: "Our home region. Local teams for education visits, corporate programs, exhibitions, and incentive groups.",
              tags: ["Japan", "Hong Kong"],
            },
            {
              name: "Latin America",
              desc: "Institutional exchanges, delegation logistics, and destination coordination for international visitors.",
              tags: ["Mexico"],
            },
            {
              name: "Europe",
              desc: "Market entry, trade fair coordination, and cross-border partnership support.",
              tags: ["Germany"],
            },
          ],
        }
      : locale === "ja"
        ? {
            eyebrow: "対応エリア",
            heading: "私たちが活動する地域",
            regions: [
              {
                name: "東アジア",
                desc: "ホームリージョン。教育訪問、企業プログラム、展示会、インセンティブグループに対応する現地チームを配置。",
                tags: ["日本", "香港"],
              },
              {
                name: "中南米",
                desc: "機関間交流、視察団ロジスティクス、海外ゲスト向け受入プログラムを調整。",
                tags: ["メキシコ"],
              },
              {
                name: "欧州",
                desc: "市場参入支援、国際商業フェア対応、越境パートナーシップのファシリテーション。",
                tags: ["ドイツ"],
              },
            ],
          }
        : {
            eyebrow: "Cobertura",
            heading: "Dónde operamos",
            regions: [
              {
                name: "Asia Oriental",
                desc: "Nuestra región de origen. Equipos locales para visitas educativas, programas corporativos, exhibiciones y grupos de incentivo.",
                tags: ["Japón", "Hong Kong"],
              },
              {
                name: "América Latina",
                desc: "Intercambios institucionales, logística de delegaciones y coordinación de destino para visitantes internacionales.",
                tags: ["México"],
              },
              {
                name: "Europa",
                desc: "Entrada a mercado, coordinación de ferias comerciales y soporte de alianzas transfronterizas.",
                tags: ["Alemania"],
              },
            ],
          };

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

      {/* ── 1. HERO: badge + headline + subline + CTAs ── */}
      <Column fillWidth horizontal="center" gap="32">
        {/* Constrained text column */}
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
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="24">
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
              className="kailinksHomeSubline"
            >
              {home.subline}
            </Text>
          </RevealFx>

          {/* ── Hero CTA buttons — primary action visible above the fold ── */}
          <RevealFx translateY="8" delay={0.28} fillWidth horizontal="center">
            <Row gap="12" wrap horizontal="center" className="kailinksHeroCtaRow">
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
              >
                {heroLead.contactCta}
              </Button>
            </Row>
          </RevealFx>
        </Column>

        {/* ── 2. FACTS — pulled to full width for stronger visual impact ── */}
        <RevealFx translateY={10} delay={0.38} fillWidth horizontal="center">
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
                  <Text variant="display-strong-m" onBackground="brand-medium" className="kailinksFactNum">
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

      {/* ── CLIENTES ── */}
      <RevealFx fillWidth translateY="8" delay={0.3}>
        <section className="kailinksClientStrip" aria-labelledby="clients-heading">
          <Text
            as="h2"
            id="clients-heading"
            variant="label-strong-s"
            onBackground="neutral-weak"
            align="center"
          >
            {clientsIntro}
          </Text>
          <div className="kailinksDestTicker">
            <div className="kailinksDestTickerTrack">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <div key={`${logo.src}-${i}`} className="kailinksLogoItem">
                  <img src={logo.src} alt={logo.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealFx>

      {/* ── PROCESS: How a program comes together ── */}
      <RevealFx fillWidth translateY="8" delay={0.44}>
        <Column fillWidth gap="16">
          <Row fillWidth horizontal="between" vertical="end" wrap gap="12">
            <Column gap="4">
              <Text variant="label-strong-s" onBackground="brand-medium">
                {processData.eyebrow}
              </Text>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                {processData.heading}
              </Heading>
            </Column>
          </Row>
          <div className="kailinksProcess">
            {processData.steps.map((step) => (
              <div key={step.num} className="kailinksProcessStep">
                <span className="kailinksProcessNum">{step.num}</span>
                <p className="kailinksProcessTitle">{step.title}</p>
                <p className="kailinksProcessDesc">{step.desc}</p>
              </div>
            ))}
          </div>
        </Column>
      </RevealFx>

      {/* ── 3. OPERATIONS VISUAL ── */}
      <RevealFx fillWidth translateY="8" delay={0.36}>
        <div className="kailinksOperationsVisual" aria-hidden="true">
          <img src="/images/illustrations/kailinks-operations-map.svg" alt="" loading="lazy" />
        </div>
      </RevealFx>

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

      {/* ── REGION COVERAGE — rich 3-column cards ── */}
      <RevealFx translateY="16" delay={0.85}>
        <Column fillWidth gap="16">
          <Row fillWidth horizontal="between" vertical="end" wrap gap="12">
            <Column gap="4">
              <Text variant="label-strong-s" onBackground="brand-medium">
                {regionsData.eyebrow}
              </Text>
              <Heading as="h2" variant="heading-strong-xl" wrap="balance">
                {regionsData.heading}
              </Heading>
            </Column>
          </Row>
          <div className="kailinksRegionGrid">
            {regionsData.regions.map((region) => (
              <div key={region.name} className="kailinksRegionCard">
                <p className="kailinksRegionName">{region.name}</p>
                <p className="kailinksRegionDesc">{region.desc}</p>
                <div className="kailinksRegionTags">
                  {region.tags.map((tag) => (
                    <span key={tag} className="kailinksRegionTagItem">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
