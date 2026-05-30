import type {
  About,
  Blog,
  Business,
  Education,
  Gallery,
  Home,
  Newsletter,
  Person,
  Personal,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import {
  about as aboutEs,
  blog as blogEs,
  business as businessEs,
  education as educationEs,
  events as eventsEs,
  gallery as galleryEs,
  home as homeEs,
  newsletter as newsletterEs,
  person as personEs,
  personal as personalEs,
  social as socialEs,
  work as workEs,
} from "./content";
import type { Locale } from "./locale";

type LocalizedResources = {
  person: Person;
  social: Social;
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
  events: Blog;
  work: Work;
  gallery: Gallery;
  education: Education;
  business: Business;
  personal: Personal;
};

const en: LocalizedResources = {
  person: {
    firstName: "KaiLinks",
    lastName: "Team",
    name: "KaiLinks",
    role: "Global DMC · Exhibitions · Market Entry",
    avatar: "/images/avatar.webp",
    email: "info@kailinks.com",
    location: "Asia/Tokyo",
    languages: ["English", "Spanish", "Japanese", "Mandarin Chinese"],
  },
  newsletter: {
    display: false,
    title: <>Get KaiLinks updates</>,
    description: <>Insights for education programs, business delegations, and group travel.</>,
  },
  social: [
    {
      name: "Website",
      icon: "globe",
      link: "https://kailinks.com",
      essential: true,
    },
    {
      name: "Email",
      icon: "email",
      link: "mailto:info@kailinks.com",
      essential: true,
    },
    {
      name: "X",
      icon: "x",
      link: "https://x.com/KaiLinksGlobal",
      essential: false,
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/kailinksglobal/",
      essential: false,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/company/kai-links/",
      essential: false,
    },
  ],
  home: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "Home",
    title: "KaiLinks | International Program Operations",
    description:
      "One contact. Any destination. Local execution for international programs across East Asia, Latin America, and Europe.",
    headline: <>One contact. Any destination.</>,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong>KaiLinks</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            Global DMC · Asia · Latin America · Europe
          </Text>
        </Row>
      ),
      href: "/about",
    },
    subline: (
      <>
        Agenda, suppliers, and on-ground operations — managed from a single point of contact.
      </>
    ),
  },
  about: {
    path: "/about",
    label: "About",
    title: "About KaiLinks",
    description:
      "Local execution for international programs. In-region network across East Asia, Latin America, and Europe.",
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: false,
    },
    calendar: {
      display: true,
      link: "https://kailinks.com/contact",
    },
    intro: {
      display: true,
      title: "Who We Are",
      description: (
        <>
          KaiLinks supports organizations and groups when they need to execute in destinations they
          do not manage directly. We combine DMC operations, local coordination, and market-entry
          support so clients can stay focused on outcomes while we run the delivery on the ground.
        </>
      ),
    },
    work: {
      display: true,
      title: "How We Work",
      experiences: [
        {
          company: "DMC Operations",
          timeframe: "Education | Business | Groups",
          role: "Program design and local execution",
          achievements: [
            <>
              End-to-end itinerary planning, supplier sourcing, booking, and on-site coordination.
            </>,
            <>Flexible delivery models for single-city, multi-city, and multi-country programs.</>,
          ],
          images: [],
        },
        {
          company: "Market Entry and Partnerships",
          timeframe: "Assessment | Matchmaking | Regional Coordination",
          role: "Regional setup and partner development",
          achievements: [
            <>
              Market research, feasibility support, and partner matchmaking for expansion
              initiatives.
            </>,
            <>Regulatory and localization guidance coordinated through regional experts.</>,
          ],
          images: [],
        },
        {
          company: "Operational Delivery",
          timeframe: "Pre-trip to post-program",
          role: "Execution, risk control, and reporting",
          achievements: [
            <>
              Real-time troubleshooting, schedule control, and multilingual communication support.
            </>,
            <>Post-event reporting with recommendations for continuous improvement.</>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "Operational Coverage",
      institutions: [
        {
          name: "East Asia",
          description: (
            <>Program operations, local partnerships, education visits, and executive support.</>
          ),
        },
        {
          name: "Latin America",
          description: (
            <>Institutional exchanges, delegations, and destination logistics in major cities.</>
          ),
        },
        {
          name: "Europe",
          description: (
            <>
              Market entry, commercial channels, exhibition support, and cross-border coordination.
            </>
          ),
        },
        {
          name: "Multi-city programs",
          description: (
            <>Coordination across venues, suppliers, and local teams when programs cross regions.</>
          ),
        },
      ],
    },
    technical: {
      display: true,
      title: "Execution Capabilities",
      skills: [
        {
          title: "Planning and Partnering",
          description:
            "Program architecture, local partner sourcing, venue negotiation, and timeline design.",
          tags: [
            {
              name: "Strategy",
              icon: "document",
            },
            {
              name: "Partnerships",
              icon: "globe",
            },
          ],
          images: [],
        },
        {
          title: "On-ground Execution",
          description:
            "Team deployment, attendee management, local staffing, transfers, and issue resolution.",
          tags: [
            {
              name: "Operations",
              icon: "grid",
            },
            {
              name: "Coordination",
              icon: "calendar",
            },
          ],
          images: [],
        },
        {
          title: "Post-program Support",
          description:
            "Documentation, reporting, and optimization recommendations for your next program cycle.",
          tags: [
            {
              name: "Insights",
              icon: "book",
            },
            {
              name: "Follow-up",
              icon: "globe",
            },
          ],
          images: [],
        },
      ],
    },
  },
  blog: {
    path: "/blog",
    label: "Events",
    title: "KaiLinks Events",
    description: "Events, notes, and updates on international programs and destination management.",
  },
  events: {
    path: "/events",
    label: "Events",
    title: "KaiLinks Events",
    description: "Agenda and events organized and coordinated by KaiLinks.",
  },
  work: {
    path: "/work",
    label: "Work",
    title: "Case Studies",
    description: "Selected delivery examples from KaiLinks programs.",
  },
  education: {
    path: "/education",
    label: "Education",
    title: "Educational Institutions",
    description:
      "We design and run academic programs, conferences, and institutional events with partnerships, scheduling, logistics, and on-site operations.",
  },
  business: {
    path: "/business",
    label: "Business",
    title: "Corporate programs",
    description:
      "We structure executive agendas, expo participation, and local coordination for companies operating outside their usual market.",
  },
  personal: {
    path: "/groups",
    label: "Groups",
    title: "Group programs",
    description:
      "We coordinate groups, incentives, delegations, and special-interest experiences with clear scheduling, reliable suppliers, and local support.",
  },
  gallery: {
    path: "/gallery",
    label: "Gallery",
    title: "KaiLinks Gallery",
    description: "Selected moments from KaiLinks-supported programs.",
    images: [
      {
        src: "/images/illustrations/group-travel.svg",
        alt: "Group travel operations illustration",
        orientation: "horizontal",
      },
      {
        src: "/images/illustrations/pavilion-expo.svg",
        alt: "Pavilion and exhibition operations illustration",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/kailinks-operations-map.svg",
        alt: "International coordination illustration",
        orientation: "horizontal",
      },
      {
        src: "/images/illustrations/education-programs.svg",
        alt: "International education program illustration",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/startup-market-entry.svg",
        alt: "Corporate international agenda illustration",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/risk-map.svg",
        alt: "Operations and risk control illustration",
        orientation: "vertical",
      },
    ],
  },
};

const es: LocalizedResources = {
  person: personEs,
  social: socialEs,
  newsletter: newsletterEs,
  home: homeEs,
  about: aboutEs,
  blog: blogEs,
  events: eventsEs,
  work: workEs,
  gallery: galleryEs,
  education: educationEs,
  business: businessEs,
  personal: personalEs,
};

const ja: LocalizedResources = {
  person: {
    firstName: "KaiLinks",
    lastName: "Team",
    name: "KaiLinks",
    role: "グローバルDMC・展示会運営・市場参入パートナー",
    avatar: "/images/avatar.webp",
    email: "info@kailinks.com",
    location: "Asia/Tokyo",
    languages: ["日本語", "英語", "スペイン語", "中国語（標準語）"],
  },
  newsletter: {
    display: false,
    title: <>KaiLinksの最新情報を受け取る</>,
    description: <>教育・企業・団体向けサービスの実務インサイトを配信します。</>,
  },
  social: [
    {
      name: "Webサイト",
      icon: "globe",
      link: "https://kailinks.com",
      essential: true,
    },
    {
      name: "メール",
      icon: "email",
      link: "mailto:info@kailinks.com",
      essential: true,
    },
    {
      name: "X",
      icon: "x",
      link: "https://x.com/KaiLinksGlobal",
      essential: false,
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://www.instagram.com/kailinksglobal/",
      essential: false,
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      link: "https://www.linkedin.com/company/kai-links/",
      essential: false,
    },
  ],
  home: {
    path: "/",
    image: "/images/og/home.jpg",
    label: "ホーム",
    title: "KaiLinks | 国際プログラム運営",
    description:
      "主要地域での国際プログラムに必要な企画、現地調整、実行管理を提供します。",
    headline: <>国際プログラムを、確実に運営する。</>,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong>KaiLinks</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            現地調整 · 国際プログラム運営
          </Text>
        </Row>
      ),
      href: "/about",
    },
    subline: (
      <>
        アジェンダ、調達、現地運営 — 一つの窓口で統括します。
      </>
    ),
  },
  about: {
    path: "/about",
    label: "会社情報",
    title: "KaiLinksについて",
    description:
      "KaiLinksは東アジア・中南米・欧州を中心に、プログラム運営・展示会・市場参入を支援するグローバルDMC/実行パートナーです。",
    tableOfContent: {
      display: false,
      subItems: false,
    },
    avatar: {
      display: false,
    },
    calendar: {
      display: true,
      link: "https://kailinks.com/contact",
    },
    intro: {
      display: true,
      title: "私たちについて",
      description: (
        <>
          KaiLinksは、組織や団体が自社で直接管理していない地域で実行する必要があるときに、
          DMC運営・現地調整・市場参入支援を組み合わせて支援します。クライアントが成果に集中できるよう、
          私たちが現地実務を担います。
        </>
      ),
    },
    work: {
      display: true,
      title: "運営トラック",
      experiences: [
        {
          company: "デスティネーション・マネジメント",
          timeframe: "教育 | 企業 | 団体",
          role: "プログラム設計と現地実行",
          achievements: [
            <>旅程設計、調達、手配、予約、当日運営までを一括対応。</>,
            <>単都市・複数都市・複数国に対応できる柔軟な運営モデル。</>,
          ],
          images: [],
        },
        {
          company: "市場参入・パートナー開発",
          timeframe: "評価 | マッチング | 地域調整",
          role: "地域立ち上げとパートナー構築",
          achievements: [
            <>市場調査、実現性評価、現地パートナーマッチングを提供。</>,
            <>各地域の専門家と連携した規制・ローカライズ対応。</>,
          ],
          images: [],
        },
        {
          company: "運営デリバリー",
          timeframe: "事前準備から事後報告まで",
          role: "実行、リスク管理、レポーティング",
          achievements: [
            <>リアルタイム対応、スケジュール管理、多言語コミュニケーション支援。</>,
            <>次回改善につながる事後レポートと提案。</>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true,
      title: "運営対応エリア",
      institutions: [
        {
          name: "東アジア",
          description: <>教育連携、現地運営、パートナー開拓を担当。</>,
        },
        {
          name: "中南米",
          description: <>交流プログラム、視察団、都市間ロジスティクスを担当。</>,
        },
        {
          name: "欧州",
          description: <>市場参入、販路開拓、展示会支援、広域連携を担当。</>,
        },
        {
          name: "複数都市プログラム",
          description: <>地域をまたぐ会場、サプライヤー、現地チームの調整を担当。</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "実行能力",
      skills: [
        {
          title: "企画とパートナー開発",
          description: "プログラム設計、現地パートナー選定、会場交渉、実行タイムラインの設計。",
          tags: [
            {
              name: "戦略",
              icon: "document",
            },
            {
              name: "連携",
              icon: "globe",
            },
          ],
          images: [],
        },
        {
          title: "現地実行",
          description: "運営チーム配置、参加者管理、現地スタッフ手配、移動管理、トラブル対応。",
          tags: [
            {
              name: "運営",
              icon: "grid",
            },
            {
              name: "調整",
              icon: "calendar",
            },
          ],
          images: [],
        },
        {
          title: "事後支援",
          description: "ドキュメント作成、報告、次回施策に向けた最適化提案。",
          tags: [
            {
              name: "分析",
              icon: "book",
            },
            {
              name: "フォロー",
              icon: "globe",
            },
          ],
          images: [],
        },
      ],
    },
  },
  blog: {
    path: "/blog",
    label: "イベント",
    title: "KaiLinksイベント",
    description: "国際プログラムとデスティネーション運営に関するイベント・ノート・更新情報。",
  },
  events: {
    path: "/events",
    label: "イベント",
    title: "KaiLinksイベント",
    description: "KaiLinksが企画・調整する公開イベントやセッションの最新情報。",
  },
  work: {
    path: "/work",
    label: "実績",
    title: "導入事例",
    description: "KaiLinksが提供したプログラム事例。",
  },
  education: {
    path: "/education",
    label: "教育機関",
    title: "教育機関向け",
    description:
      "学術プログラム、会議、教育イベントに必要な機関連携、スケジュール調整、ロジスティクス、現地運営を支援します。",
  },
  business: {
    path: "/business",
    label: "企業",
    title: "市場参入支援",
    description:
      "通常の商圏外で活動する企業向けに、役員アジェンダ、展示会参加、現地調整を構造化して支援します。",
  },
  personal: {
    path: "/groups",
    label: "団体",
    title: "団体プログラム",
    description:
      "団体、インセンティブ、代表団、テーマ別体験を、明確な日程、信頼できるサプライヤー、現地サポートで調整します。",
  },
  gallery: {
    path: "/gallery",
    label: "ギャラリー",
    title: "KaiLinksギャラリー",
    description: "KaiLinksが支援したプログラムのハイライト。",
    images: [
      {
        src: "/images/illustrations/group-travel.svg",
        alt: "団体旅行運営のイラスト",
        orientation: "horizontal",
      },
      {
        src: "/images/illustrations/pavilion-expo.svg",
        alt: "パビリオン・展示会運営のイラスト",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/kailinks-operations-map.svg",
        alt: "国際調整のイラスト",
        orientation: "horizontal",
      },
      {
        src: "/images/illustrations/education-programs.svg",
        alt: "教育プログラムのイラスト",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/startup-market-entry.svg",
        alt: "企業アジェンダ運営のイラスト",
        orientation: "vertical",
      },
      {
        src: "/images/illustrations/risk-map.svg",
        alt: "運営管理とリスク整理のイラスト",
        orientation: "vertical",
      },
    ],
  },
};

export function getLocalizedResources(locale: Locale): LocalizedResources {
  if (locale === "en") return en;
  if (locale === "ja") return ja;
  return es;
}
