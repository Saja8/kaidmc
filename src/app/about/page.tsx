import styles from "@/components/about/about.module.scss";
import { MobileAboutTabs } from "@/components/about/MobileAboutTabs";
import { WorldCoverageMap } from "@/components/about/WorldCoverageMap";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
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
  Text,
} from "@once-ui-system/core";

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
  const { about, person } = getLocalizedResources(locale);

  const emailHref = `mailto:${person.email}?subject=${encodeURIComponent("KaiLinks inquiry")}`;
  const profileLabels =
    locale === "en"
      ? { linkedin: "LinkedIn profile", scholar: "Google Scholar profile", source: "External profile" }
      : locale === "ja"
        ? { linkedin: "LinkedInプロフィール", scholar: "Google Scholarプロフィール", source: "外部プロフィール" }
        : {
            linkedin: "Perfil de LinkedIn",
            scholar: "Perfil de Google Scholar",
            source: "Perfil externo",
          };

  const ui =
    locale === "en"
      ? {
          badge: "About KaiLinks",
          intro:
            "KaiLinks is a DMC and cross-market execution partner for programs, delegations, exhibitions, and market-entry initiatives. One coordination line — from brief to delivery.",
          contactLabel: "Get in touch",
          callLabel: "Contact",
          emailLabel: "Send email",
          coverageTitle: "Coverage",
          processTitle: "How a program works",
          scientificTitle: "Scientific committee",
          scientificIntro:
            "Academic advisors and IFToMM network members connected to aerospace systems, mechanism science, robotics, and mechatronics.",
          coverageItems: [
            {
              label: "East Asia",
              text: "Programs, local partners, education visits, and executive support.",
            },
            {
              label: "Latin America",
              text: "Delegations, destination logistics, and coordination in major cities.",
            },
            {
              label: "Europe",
              text: "Market entry, commercial channels, exhibitions, and cross-border delivery.",
            },
          ],
          processSteps: [
            {
              step: "01",
              title: "Intake & feasibility",
              text: "We review your brief, confirm destination fit, check date availability, and flag any risks.",
            },
            {
              step: "02",
              title: "Planning & booking",
              text: "We build your itinerary, book venues, arrange transport, assign interpreters, and set up comms.",
            },
            {
              step: "03",
              title: "On-site delivery",
              text: "Our local team runs the program day-by-day: logistics, troubleshooting, and client support.",
            },
            {
              step: "04",
              title: "Reporting & next steps",
              text: "Wrap-up report with costs, outcomes, photos, and recommendations for your next program.",
            },
            ],
          teamTitle: "Regional team",
          teamMembers: [
            {
              name: "Arturo Díaz",
              region: "Latin America",
              role: "CEO",
              photo: "/images/team/arturo.webp",
              desc: "Leads client relationships and exhibition strategy across Latin America — from initial brief to on-ground delivery.",
              linkedIn: "https://www.linkedin.com/in/arturo-diaz-ponce-80b50ba2",
              scholar: "https://scholar.google.com.mx/citations?hl=es&user=jDELPIMAAAAJ",
            },
            {
              name: "Satomi Ota",
              region: "East Asia",
              role: "Market Entry Advisor",
              photo: "/images/team/satomi.webp",
              desc: "Local point of contact across East Asia and Asia-Pacific — supplier sourcing, scheduling, and day-of execution.",
              linkedIn: "https://www.linkedin.com/in/satomi-o-8ba049216/",
              scholar: "",
            },
            {
              name: "Arely Sánchez",
              region: "Europe",
              role: "Market Entry Consultant",
              photo: "/images/team/arely.webp",
              desc: "Builds KaiLinks' European footprint — trade show participation, regulatory guidance, and commercial partnerships in the EU.",
              linkedIn: "https://www.linkedin.com/in/arely-s%C3%A1nchez-tejada-9978996a/",
              scholar: "",
            },
          ],
        }
      : locale === "ja"
        ? {
            badge: "KaiLinksについて",
            intro:
              "KaiLinksは、プログラム運営・代表団対応・展示会・市場参入支援を行うDMC/実行パートナーです。企画から実施まで一つの窓口で管理します。",
            contactLabel: "まずはご相談ください",
            callLabel: "お問い合わせ",
            emailLabel: "メール送信",
            coverageTitle: "対応地域",
            processTitle: "プログラムの進め方",
            scientificTitle: "科学委員会",
            scientificIntro:
              "航空宇宙システム、機構学、ロボティクス、メカトロニクスに関わる研究者・IFToMMネットワークメンバー。",
            coverageItems: [
              {
                label: "東アジア",
                text: "プログラム運営、現地パートナー、教育訪問、エグゼクティブサポート。",
              },
              {
                label: "中南米",
                text: "代表団、目的地ロジスティクス、主要都市での現地調整。",
              },
              {
                label: "ヨーロッパ",
                text: "市場参入、商流開拓、展示会、クロスボーダー運営。",
              },
            ],
            processSteps: [
              {
                step: "01",
                title: "受付と実現性確認",
                text: "要件を確認し、目的地適合性・日程・リスクを整理します。",
              },
              {
                step: "02",
                title: "設計と手配",
                text: "旅程作成、会場予約、移動手配、通訳配置、連絡体制を構築します。",
              },
              {
                step: "03",
                title: "現地運営",
                text: "現地チームが日ごとにプログラムを運営。ロジ対応・トラブル解決・クライアント支援。",
              },
              {
                step: "04",
                title: "報告と次回提案",
                text: "費用・成果・写真・改善提案をまとめた実施レポートをお届けします。",
              },
            ],
            teamTitle: "地域担当者",
            teamMembers: [
              {
                name: "Arturo Díaz",
                region: "中南米",
                role: "CEO",
                photo: "/images/team/arturo.webp",
                desc: "中南米全域でのクライアント対応・展示会戦略を統括。ブリーフから現地納品まで一貫して担当。",
                linkedIn: "https://www.linkedin.com/in/arturo-diaz-ponce-80b50ba2",
                scholar: "https://scholar.google.com.mx/citations?hl=es&user=jDELPIMAAAAJ",
              },
              {
                name: "太田 智美",
                region: "東アジア",
                role: "市場参入アドバイザー",
                photo: "/images/team/satomi.webp",
                desc: "東アジア・アジア太平洋地域の現地窓口。サプライヤー調達、スケジュール管理、当日運営を担当。",
                linkedIn: "https://www.linkedin.com/in/satomi-o-8ba049216/",
                scholar: "",
              },
              {
                name: "Arely Sánchez",
                region: "ヨーロッパ",
                role: "市場参入コンサルタント",
                photo: "/images/team/arely.webp",
                desc: "欧州の展示会参加、規制ガイダンス、EU市場向け商業パートナーシップの構築を担当。",
                linkedIn: "https://www.linkedin.com/in/arely-s%C3%A1nchez-tejada-9978996a/",
                scholar: "",
              },
            ],
          }
        : {
            badge: "Sobre KaiLinks",
            intro:
              "KaiLinks opera como socio DMC y de ejecución internacional para programas, delegaciones, exhibiciones y entrada a mercados. Una sola línea de coordinación — del brief a la entrega.",
            contactLabel: "Inicia una conversación",
            callLabel: "Contactar",
            emailLabel: "Enviar correo",
            coverageTitle: "Cobertura",
            processTitle: "Cómo funciona un programa",
            scientificTitle: "Comité científico",
            scientificIntro:
              "Asesores académicos y miembros de la red IFToMM vinculados con sistemas aeroespaciales, ciencia de mecanismos, robótica y mecatrónica.",
            coverageItems: [
              {
                label: "Asia Oriental",
                text: "Programas, aliados locales, visitas educativas y soporte ejecutivo.",
              },
              {
                label: "Latinoamérica",
                text: "Delegaciones, logística de destino y coordinación en ciudades clave.",
              },
              {
                label: "Europa",
                text: "Entrada a mercados, canales comerciales, exhibiciones y operación regional.",
              },
            ],
            processSteps: [
              {
                step: "01",
                title: "Recepción y factibilidad",
                text: "Revisamos tu brief, confirmamos destino, verificamos disponibilidad y señalamos riesgos.",
              },
              {
                step: "02",
                title: "Planeación y reservas",
                text: "Armamos itinerario, reservamos sedes, organizamos transporte, asignamos intérpretes y comunicación.",
              },
              {
                step: "03",
                title: "Ejecución en sitio",
                text: "Nuestro equipo local opera el programa día a día: logística, resolución de incidencias y soporte.",
              },
              {
                step: "04",
                title: "Reporte y siguientes pasos",
                text: "Reporte final con costos, resultados, fotos y recomendaciones para tu próximo programa.",
              },
            ],
            teamTitle: "Equipo regional",
            teamMembers: [
              {
                name: "Arturo Díaz",
                region: "Latinoamérica",
                role: "CEO",
                photo: "/images/team/arturo.webp",
                desc: "Dirige la estrategia de exhibición y relación con clientes en América Latina — del brief inicial a la entrega en campo.",
                linkedIn: "https://www.linkedin.com/in/arturo-diaz-ponce-80b50ba2",
                scholar: "https://scholar.google.com.mx/citations?hl=es&user=jDELPIMAAAAJ",
              },
              {
                name: "Satomi Ota",
                region: "Asia Oriental",
                role: "Asesora de entrada a mercados",
                photo: "/images/team/satomi.webp",
                desc: "Punto de contacto local en Asia Oriental y Asia-Pacífico — selección de proveedores, agenda y ejecución en sitio.",
                linkedIn: "https://www.linkedin.com/in/satomi-o-8ba049216/",
                scholar: "",
              },
              {
                name: "Arely Sánchez",
                region: "Europa",
                role: "Consultora de entrada a mercados",
                photo: "/images/team/arely.webp",
                desc: "Desarrolla la presencia de KaiLinks en Europa — ferias comerciales, orientación regulatoria y alianzas comerciales en la UE.",
                linkedIn: "https://www.linkedin.com/in/arely-s%C3%A1nchez-tejada-9978996a/",
                scholar: "",
              },
            ],
          };

  const scientificCommittee = [
    {
      name: "Hironori Sahara",
      title: "Professor, Ph.D.",
      affiliation: "Tokyo Metropolitan University",
      group: "Tokyo Metropolitan University",
      href: "https://researchmap.jp/hironori-sahara?lang=en",
    },
    {
      name: "Hideki Takenaka",
      title: "Assistant Professor, Ph.D.",
      affiliation: "Tokyo Metropolitan University",
      group: "Tokyo Metropolitan University",
      href: "https://researchmap.jp/takenaka-hideki?lang=en",
    },
    {
      name: "Claudio Villegas",
      title: "Chair, IFToMM Young Faculty Group",
      affiliation: "University of Bío-Bío",
      group: "IFToMM Young Faculty Group",
      href: "https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/",
    },
    {
      name: "Jiang Ming",
      title: "Chair Secretariat, IFToMM Young Faculty Group",
      affiliation: "Tokyo Institute of Technology",
      group: "IFToMM Young Faculty Group",
      href: "https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/",
    },
    {
      name: "Sajjad Keshtkar",
      title: "Member, IFToMM Young Faculty Group",
      affiliation: "Tokyo Metropolitan University",
      group: "IFToMM Young Faculty Group",
      href: "https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/",
    },
    {
      name: "Maria G. Contreras C.",
      title: "Member, IFToMM Young Faculty Group",
      affiliation: "Tecnológico de Monterrey / UTEQ",
      group: "IFToMM Young Faculty Group",
      href: "https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/",
    },
    {
      name: "Giuseppe Carbone",
      title: "Chair, IFToMM Technical Committee for Robotics and Mechatronics",
      affiliation: "University of Calabria",
      group: "IFToMM Robotics and Mechatronics TC",
      href: "https://iftomm-world.org/committees/technical-committee-for-robotics-and-mechatronics/",
    },
    {
      name: "Shaoping Bai",
      title: "Deputy Chair, IFToMM Technical Committee for Robotics and Mechatronics",
      affiliation: "Aalborg University",
      group: "IFToMM Robotics and Mechatronics TC",
      href: "https://iftomm-world.org/committees/technical-committee-for-robotics-and-mechatronics/",
    },
    {
      name: "Yukio Takeda",
      title: "Member, IFToMM Robotics and Mechatronics TC",
      affiliation: "Tokyo Institute of Technology",
      group: "IFToMM Robotics and Mechatronics TC",
      href: "https://iftomm-world.org/committees/technical-committee-for-robotics-and-mechatronics/",
    },
    {
      name: "Gentian Venture",
      title: "Member, IFToMM Robotics and Mechatronics TC",
      affiliation: "Tokyo University of Agriculture and Technology",
      group: "IFToMM Robotics and Mechatronics TC",
      href: "https://iftomm-world.org/committees/technical-committee-for-robotics-and-mechatronics/",
    },
    {
      name: "Hiram Ponce",
      title: "Member, IFToMM Robotics and Mechatronics TC",
      affiliation: "Universidad Panamericana",
      group: "IFToMM Robotics and Mechatronics TC",
      href: "https://iftomm-world.org/committees/technical-committee-for-robotics-and-mechatronics/",
    },
    {
      name: "Tobias Bruckmann",
      title: "Member, IFToMM Young Faculty Group / Robotics and Mechatronics TC",
      affiliation: "University of Duisburg-Essen",
      group: "IFToMM network",
      href: "https://iftomm-world.org/cdg-2-iftomm-young-faculty-group/",
    },
  ];

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

      {/* ── 1. Intro ── */}
      <Column fillWidth gap="20" padding="24" className={styles.heroFrame}>
        <Badge paddingX="12" paddingY="4" background="brand-alpha-weak" arrow={false}>
          {ui.badge}
        </Badge>
        <Column gap="4">
          <Heading variant="display-strong-xl">{person.name}</Heading>
          <Text variant="display-default-xs" onBackground="neutral-weak">
            {person.role}
          </Text>
        </Column>
        <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "36rem" }}>
          {ui.intro}
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
              {ui.callLabel}
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
            {ui.emailLabel}
          </Button>
        </Row>
      </Column>

      {/* ── 1b. Coverage map ── */}
      <Column fillWidth gap="8" className={styles.desktopDetailSection}>
        <WorldCoverageMap />
      </Column>

      <MobileAboutTabs
        coverageTitle={ui.coverageTitle}
        processTitle={ui.processTitle}
        teamTitle={ui.teamTitle}
        coverageItems={ui.coverageItems}
        processSteps={ui.processSteps}
        teamMembers={ui.teamMembers}
        scientificTitle={ui.scientificTitle}
        scientificIntro={ui.scientificIntro}
        scientificMembers={scientificCommittee}
        profileLabels={profileLabels}
      />

      {/* ── 2. How it works ── */}
      <Column fillWidth gap="16" className={styles.desktopDetailSection}>
        <Heading as="h2" variant="heading-strong-xl">
          {ui.processTitle}
        </Heading>
        <div className={styles.processGrid}>
          {ui.processSteps.map((step) => (
            <Column key={step.step} gap="8" padding="16" className={styles.processCard}>
              <Text variant="heading-strong-l" onBackground="brand-medium" style={{ opacity: 0.4 }}>
                {step.step}
              </Text>
              <Text variant="heading-strong-m">{step.title}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {step.text}
              </Text>
            </Column>
          ))}
        </div>
      </Column>

      {/* ── 3. Scientific committee ── */}
      <Column fillWidth gap="16" className={styles.desktopDetailSection}>
        <Column gap="4">
          <Heading as="h2" variant="heading-strong-xl">
            {ui.scientificTitle}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: "42rem" }}>
            {ui.scientificIntro}
          </Text>
        </Column>
        <div className={styles.scientificGrid}>
          {scientificCommittee.map((member) => (
            <Column key={member.name} gap="8" padding="16" className={styles.scientificCard}>
              <Row gap="8" horizontal="between" vertical="start">
                <Column gap="4">
                  <Text variant="heading-strong-s">{member.name}</Text>
                  <Text variant="label-default-s" onBackground="brand-medium">
                    {member.group}
                  </Text>
                </Column>
                <IconButton
                  href={member.href}
                  icon="openLink"
                  tooltip={profileLabels.source}
                  size="s"
                  variant="secondary"
                />
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {member.title}
              </Text>
              <Badge paddingX="12" paddingY="4" background="neutral-alpha-weak" arrow={false}>
                {member.affiliation}
              </Badge>
            </Column>
          ))}
        </div>
      </Column>

      {/* ── 4. Team ── */}
      <Column fillWidth gap="16" className={styles.desktopDetailSection}>
        <Heading as="h2" variant="heading-strong-xl">
          {ui.teamTitle}
        </Heading>
        <div className={styles.teamGrid}>
          {ui.teamMembers.map((member) => (
            <Column
              key={member.name}
              gap="12"
              padding="20"
              className={styles.teamCard}
              horizontal="center"
            >
              <div className={styles.teamPhotoRing}>
                <Media
                  src={member.photo}
                  alt={member.name}
                  width={96}
                  height={96}
                  className={styles.teamPhoto}
                />
              </div>
              <Column gap="4" horizontal="center" align="center">
                <Text variant="heading-strong-m">{member.name}</Text>
                <Text variant="label-default-s" onBackground="brand-medium">
                  {member.role}
                </Text>
                <Badge paddingX="12" paddingY="4" background="neutral-alpha-weak" arrow={false}>
                  {member.region}
                </Badge>
              </Column>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                {member.desc}
              </Text>
              {(member.linkedIn || member.scholar) && (
                <Row gap="8" horizontal="center">
                  {member.linkedIn && (
                    <IconButton
                      href={member.linkedIn}
                      icon="linkedin"
                      tooltip={profileLabels.linkedin}
                      size="s"
                      variant="secondary"
                    />
                  )}
                  {member.scholar && (
                    <IconButton
                      href={member.scholar}
                      icon="scholar"
                      tooltip={profileLabels.scholar}
                      size="s"
                      variant="secondary"
                    />
                  )}
                </Row>
              )}
            </Column>
          ))}
        </div>
      </Column>
    </Column>
  );
}
