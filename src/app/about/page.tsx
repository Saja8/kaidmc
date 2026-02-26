import {
  Badge,
  Button,
  Column,
  Heading,
  IconButton,
  Media,
  Meta,
  Row,
  Schema,
  Tag,
  Text,
} from "@once-ui-system/core";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { about } = getLocalizedResources(locale);

  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default async function About() {
  const locale = await getServerLocale();
  const { about, business, education, personal, person, social } = getLocalizedResources(locale);

  const essentialSocial = social.filter((item) => item.link && item.essential);
  const extraSocial = social.filter((item) => item.link && !item.essential);

  const aboutUi =
    locale === "en"
      ? {
          badge: "About KaiLinks",
          introLead:
            "KaiLinks is a DMC and cross-market execution partner for programs, delegations, exhibitions, and market-entry initiatives.",
          summaryCards: [
            {
              title: "Single lead team",
              text: "One coordination line across planning, local execution, and supplier control.",
            },
            {
              title: "Multi-segment delivery",
              text: "Education, business, and personal requests under one operating standard.",
            },
            {
              title: "Regional execution",
              text: "Local delivery capability across the KaiLinks network without fragmented management.",
            },
            {
              title: "Reporting and follow-through",
              text: "Post-program reporting with documentation, outcomes, and next-step recommendations.",
            },
          ],
          contactLabel: "Start a conversation",
          callLabel: "Contact KaiLinks",
          directLabel: "Send email",
          socialLabel: "Other channels",
          workLead:
            "We structure work as operational tracks, not disconnected services. Each track can be delivered independently or combined in one program.",
          coverageLead:
            "Coverage is managed as an execution network. We avoid repeating a list of bases in every section and focus on what each region can support.",
          skillsLead:
            "These are the execution capabilities clients usually need before, during, and after a program.",
          figureTitle: "KaiLinks at a glance",
          figures: [
            { value: "1", label: "Lead coordinator", detail: "Single point of contact across planning and delivery" },
            { value: "4", label: "Markets", detail: "Core operating regions with local delivery support" },
            { value: "3", label: "Service tracks", detail: "Education, Business, Personal" },
            { value: "4", label: "Program phases", detail: "Intake, planning, on-site delivery, reporting" },
          ],
          processTitle: "How a KaiLinks program works",
          processSubtitle: "Every program follows four phases — from intake to post-delivery reporting, with a single coordinator managing the entire process.",
          processSteps: [
            { step: "01", title: "Intake & feasibility", text: "We review your brief, confirm destination fit, check date availability, and flag any risks." },
            { step: "02", title: "Planning & booking", text: "We build your itinerary, book venues, arrange transport, assign interpreters, and set up comms." },
            { step: "03", title: "On-site delivery", text: "Our local team runs the program day-by-day: logistics, troubleshooting, and client support." },
            { step: "04", title: "Reporting & next steps", text: "Wrap-up report with costs, outcomes, photos, and recommendations for your next program." },
          ],
          teamTitle: "Regional representatives",
          teamMembers: [
            { name: "Arturo Díaz", region: "Mexico & Latin America", role: "CEO", photo: "/images/team/arturo.webp", desc: "Head of operations for Latin American markets, exhibitions, and client coordination across the region." },
            { name: "Satomi Ota", region: "Asia", role: "Market Entry Advisor", photo: "/images/team/satomi.webp", desc: "Covers Japan, Hong Kong, China, and broader Asia-Pacific — program logistics, market entry, and on-ground delivery." },
            { name: "Arely Sánchez", region: "Europe", role: "Market Entry Consultant", photo: "/images/team/arely.webp", desc: "European operations for exhibitions, cross-border programs, and market entry in Germany, EU, and beyond." },
          ],
        }
      : locale === "ja"
        ? {
            badge: "KaiLinksについて",
            introLead:
              "KaiLinksは、プログラム運営・代表団対応・展示会・市場参入支援を行うDMC/実行パートナーです。",
            summaryCards: [
              {
                title: "単一窓口",
                text: "企画、現地運営、サプライヤー管理を一つの調整線で統括。",
              },
              {
                title: "複数区分対応",
                text: "教育・企業・個人向けを共通品質基準で運営。",
              },
              {
                title: "地域実行ネットワーク",
                text: "分断された管理ではなく、KaiLinksの実行体制で提供。",
              },
              {
                title: "報告と次回提案",
                text: "実施後レポート、成果整理、次回に向けた改善提案まで対応。",
              },
            ],
            contactLabel: "まずはご相談ください",
            callLabel: "お問い合わせ",
            directLabel: "メール送信",
            socialLabel: "その他チャネル",
            workLead:
              "サービスを個別に並べるのではなく、運営トラックとして設計しています。単独でも組み合わせでも対応できます。",
            coverageLead:
              "拠点名を繰り返すより、各地域で何を実行できるかを明確に示す構成にしています。",
            skillsLead:
              "実施前・実施中・実施後で必要になりやすい実務能力を整理しています。",
            figureTitle: "KaiLinksの概要",
            figures: [
              { value: "1", label: "統括担当", detail: "企画から実施まで一貫した窓口" },
              { value: "4", label: "対応市場", detail: "現地実行に対応する主要地域" },
              { value: "3", label: "サービス区分", detail: "教育・企業・個人" },
              { value: "4", label: "進行フェーズ", detail: "受付・設計・現地運営・報告" },
            ],
            processTitle: "KaiLinksプログラムの進め方",
            processSubtitle: "すべてのプログラムは4フェーズで進行。受付から実施報告まで、1名のコーディネーターが一貫管理します。",
            processSteps: [
              { step: "01", title: "受付と実現性確認", text: "要件を確認し、目的地適合性・日程・リスクを整理します。" },
              { step: "02", title: "設計と手配", text: "旅程作成、会場予約、移動手配、通訳配置、連絡体制を構築します。" },
              { step: "03", title: "現地運営", text: "現地チームが日ごとにプログラムを運営。ロジ対応・トラブル解決・クライアント支援。" },
              { step: "04", title: "報告と次回提案", text: "費用・成果・写真・改善提案をまとめた実施レポートをお届けします。" },
            ],
            teamTitle: "地域担当者",
            teamMembers: [
              { name: "Arturo Díaz", region: "メキシコ・ラテンアメリカ", role: "CEO", photo: "/images/team/arturo.webp", desc: "ラテンアメリカ市場の展示会・クライアント対応を統括。" },
              { name: "太田 智美", region: "アジア", role: "市場参入アドバイザー", photo: "/images/team/satomi.webp", desc: "日本、香港、中国、アジア太平洋地域のプログラム・市場参入・現地対応を担当。" },
              { name: "Arely Sánchez", region: "ヨーロッパ", role: "市場参入コンサルタント", photo: "/images/team/arely.webp", desc: "ドイツ・EU圏の展示会、クロスボーダープログラム、市場参入を担当。" },
            ],
          }
        : {
            badge: "Sobre KaiLinks",
            introLead:
              "KaiLinks opera como socio DMC y de ejecución internacional para programas, delegaciones, exhibiciones y entrada a mercados.",
            summaryCards: [
              {
                title: "Un solo equipo coordinador",
                text: "Una sola línea de coordinación para planeación, ejecución local y control de proveedores.",
              },
              {
                title: "Entrega por segmentos",
                text: "Educación, empresas y solicitudes personales bajo un mismo estándar de operación.",
              },
              {
                title: "Red de ejecución regional",
                text: "Capacidad local dentro de la red KaiLinks sin gestión fragmentada.",
              },
              {
                title: "Reporte y seguimiento",
                text: "Cierre con documentación, resultados y recomendaciones para el siguiente programa.",
              },
            ],
            contactLabel: "Inicia una conversación",
            callLabel: "Contactar KaiLinks",
            directLabel: "Enviar correo",
            socialLabel: "Otros canales",
            workLead:
              "Organizamos el trabajo como líneas operativas, no como servicios aislados. Se pueden contratar por separado o combinados en un mismo programa.",
            coverageLead:
              "En lugar de repetir la lista de bases en cada sección, mostramos qué tipo de ejecución soporta cada región.",
            skillsLead:
              "Estas son las capacidades operativas que normalmente se necesitan antes, durante y después de un programa.",
            figureTitle: "KaiLinks en resumen",
            figures: [
              { value: "1", label: "Coordinador principal", detail: "Un solo punto de contacto de planeación a ejecución" },
              { value: "4", label: "Mercados", detail: "Regiones clave con capacidad de ejecución local" },
              { value: "3", label: "Líneas de servicio", detail: "Educación, Empresas, Personal" },
              { value: "4", label: "Fases de programa", detail: "Recepción, planeación, operación en sitio y reporte" },
            ],
            processTitle: "Cómo funciona un programa KaiLinks",
            processSubtitle: "Cada programa sigue cuatro fases — desde la recepción hasta el reporte final, con un solo coordinador gestionando todo el proceso.",
            processSteps: [
              { step: "01", title: "Recepción y factibilidad", text: "Revisamos tu brief, confirmamos destino, verificamos disponibilidad y señalamos riesgos." },
              { step: "02", title: "Planeación y reservas", text: "Armamos itinerario, reservamos sedes, organizamos transporte, asignamos intérpretes y comunicación." },
              { step: "03", title: "Ejecución en sitio", text: "Nuestro equipo local opera el programa día a día: logística, resolución de incidencias y soporte." },
              { step: "04", title: "Reporte y siguientes pasos", text: "Reporte final con costos, resultados, fotos y recomendaciones para tu próximo programa." },
            ],
            teamTitle: "Representantes regionales",
            teamMembers: [
              { name: "Arturo Díaz", region: "México y Latinoamérica", role: "CEO", photo: "/images/team/arturo.webp", desc: "Responsable de operaciones en mercados latinoamericanos, exhibiciones y coordinación de clientes en la región." },
              { name: "Satomi Ota", region: "Asia", role: "Asesora de entrada a mercados", photo: "/images/team/satomi.webp", desc: "Cubre Japón, Hong Kong, China y Asia-Pacífico — logística de programas, entrada a mercados y operación en campo." },
              { name: "Arely Sánchez", region: "Europa", role: "Consultora de entrada a mercados", photo: "/images/team/arely.webp", desc: "Operaciones europeas para exhibiciones, programas transfronterizos y entrada a mercados en Alemania, UE y más." },
            ],
          };

  const emailHref = `mailto:${person.email}?subject=${encodeURIComponent("KaiLinks About inquiry")}`;
  const serviceTracksUi =
    locale === "en"
      ? {
          title: "Choose a service track",
          description:
            "Service detail belongs in the service pages. Start with the track that matches your program and we can scope it from there.",
          cta: "Open track",
        }
      : locale === "ja"
        ? {
            title: "サービス区分を選ぶ",
            description:
              "詳細な提供内容は各サービスページに集約しています。まずは目的に合う区分からご確認ください。",
            cta: "区分を見る",
          }
        : {
            title: "Elige una línea de servicio",
            description:
              "El detalle operativo está en las páginas de servicio. Empieza por la línea que se ajusta a tu programa y definimos alcance desde ahí.",
            cta: "Ver línea",
          };

  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column fillWidth gap="16" className={styles.heroFrame}>
        <Row fillWidth className={styles.heroGrid} s={{ direction: "column" }}>
          <Column className={styles.heroContent} gap="16">
            <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
              {aboutUi.badge}
            </Badge>

            <Column gap="8">
              <Heading variant="display-strong-xl">{person.name}</Heading>
              <Text variant="display-default-xs" onBackground="neutral-weak">
                {person.role}
              </Text>
            </Column>

            <Column gap="8" className={styles.introPanel}>
              <Text variant="body-default-l" onBackground="neutral-weak">
                {aboutUi.introLead}
              </Text>
              {about.intro.display && (
                <Column gap="8" textVariant="body-default-l">
                  {about.intro.description}
                </Column>
              )}
            </Column>

            <Column gap="8">
              <Text variant="label-strong-m" onBackground="neutral-weak">
                {aboutUi.contactLabel}
              </Text>
              <Row gap="8" wrap>
                {about.calendar.display && (
                  <Button
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    size="m"
                    weight="default"
                    prefixIcon="calendar"
                    arrowIcon
                  >
                    {aboutUi.callLabel}
                  </Button>
                )}
                <Button
                  href={emailHref}
                  data-border="rounded"
                  variant="tertiary"
                  size="m"
                  weight="default"
                  prefixIcon="email"
                >
                  {aboutUi.directLabel}
                </Button>
                {essentialSocial
                  .filter((item) => item.icon !== "email")
                  .map((item) => (
                    <Button
                      key={item.name}
                      href={item.link!}
                      data-border="rounded"
                      variant="tertiary"
                      size="m"
                      weight="default"
                      prefixIcon={item.icon}
                    >
                      {item.name}
                    </Button>
                  ))}
              </Row>

              {extraSocial.length > 0 && (
                <>
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {aboutUi.socialLabel}
                  </Text>
                  <Row gap="8" wrap>
                    {extraSocial.map((item) => (
                      <IconButton
                        key={item.name}
                        href={item.link!}
                        icon={item.icon}
                        tooltip={item.name}
                        variant="secondary"
                        size="s"
                      />
                    ))}
                  </Row>
                </>
              )}
            </Column>

            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={`${language}-${index}`} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>

          <Column className={styles.heroVisual} gap="12">
            <Row fillWidth className={styles.summaryGrid}>
              {aboutUi.summaryCards.map((item) => (
                <Column key={item.title} gap="8" padding="12" className={styles.summaryCard}>
                  <Text variant="label-default-s" onBackground="brand-medium">
                    {item.title}
                  </Text>
                  <Text variant="body-default-s">{item.text}</Text>
                </Column>
              ))}
            </Row>
          </Column>
        </Row>
      </Column>

      {/* Process steps */}
      <Column fillWidth gap="12">
        <Column gap="4">
          <Heading as="h2" variant="display-strong-s">
            {aboutUi.processTitle}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {aboutUi.processSubtitle}
          </Text>
        </Column>
        <Row fillWidth className={styles.processGrid}>
          {aboutUi.processSteps.map((step) => (
            <Column key={step.step} gap="8" padding="12" className={styles.processCard}>
              <Heading as="h3" variant="display-strong-l" onBackground="brand-medium" style={{ opacity: 0.25 }}>
                {step.step}
              </Heading>
              <Text variant="heading-strong-l">{step.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {step.text}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Team representatives */}
      <Column fillWidth gap="12">
        <Heading as="h2" variant="display-strong-s">
          {aboutUi.teamTitle}
        </Heading>
        <Row fillWidth className={styles.teamGrid}>
          {aboutUi.teamMembers.map((member) => (
            <Column key={member.name} gap="12" padding="24" className={styles.teamCard} horizontal="center">
              <div className={styles.teamPhotoRing}>
                <Media
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className={styles.teamPhoto}
                />
              </div>
              <Text variant="heading-strong-l">{member.name}</Text>
              <Text variant="label-default-s" onBackground="brand-medium" className={styles.teamRole}>{member.role}</Text>
              <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
                {member.region}
              </Badge>
              <Text variant="body-default-s" onBackground="neutral-weak" className={styles.teamDesc}>
                {member.desc}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      <Column fillWidth gap="12">
        <Column gap="4">
          <Heading as="h2" variant="display-strong-s">
            {serviceTracksUi.title}
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {serviceTracksUi.description}
          </Text>
        </Column>
        <Row fillWidth className={styles.trackGrid}>
          {[
            { title: education.title, description: education.description, href: education.path, icon: "book" as const },
            { title: business.title, description: business.description, href: business.path, icon: "grid" as const },
            { title: personal.title, description: personal.description, href: personal.path, icon: "person" as const },
          ].map((track) => (
            <Column key={track.href} gap="12" padding="16" className={styles.trackCard}>
              <Row gap="8" vertical="center">
                <Tag size="l" prefixIcon={track.icon}>
                  {track.title}
                </Tag>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {track.description}
              </Text>
              <Row paddingTop="8">
                <Button
                  href={track.href}
                  variant="secondary"
                  size="s"
                  weight="default"
                  data-border="rounded"
                  arrowIcon
                >
                  {serviceTracksUi.cta}
                </Button>
              </Row>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
