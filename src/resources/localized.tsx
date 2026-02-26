import {
  about as aboutEs,
  blog as blogEs,
  business as businessEs,
  education as educationEs,
  gallery as galleryEs,
  home as homeEs,
  newsletter as newsletterEs,
  person as personEs,
  personal as personalEs,
  social as socialEs,
  work as workEs,
} from "./content";
import { Locale } from "./locale";
import {
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

type LocalizedResources = {
  person: Person;
  social: Social;
  newsletter: Newsletter;
  home: Home;
  about: About;
  blog: Blog;
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
    role: "Global DMC, exhibitions, and market-entry partner",
    avatar: "/images/avatar.webp",
    email: "info@kailinks.com",
    location: "Asia/Tokyo",
    languages: ["English", "Spanish", "Japanese", "Mandarin Chinese"],
  },
  newsletter: {
    display: false,
    title: <>Get KaiLinks updates</>,
    description: <>Insights for education programs, business delegations, and personal support.</>,
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
    title: "KaiLinks | Global DMC, exhibitions, and market entry",
    description:
      "DMC (Destination Management Company), exhibition, event, and market-entry support across Japan, Mexico, Germany/EU, and Hong Kong/China.",
    headline: <>Bridging cultures and businesses — from plan to execution.</>,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong>KaiLinks</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            DMC · Pavilions · Incentives · Market entry
          </Text>
        </Row>
      ),
      href: "/business",
    },
    subline: (
      <>
        Academic programs, corporate events, incentive trips, and individual travel logistics
        — planned and delivered on the ground across Japan, Mexico, Germany/EU, and Hong Kong/China.
      </>
    ),
  },
  about: {
    path: "/about",
    label: "About",
    title: "About KaiLinks",
    description:
      "KaiLinks is a global DMC and execution partner for programs, exhibitions, and market-entry initiatives across Japan, Mexico, Germany/EU, and Hong Kong/China.",
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
          KaiLinks supports organizations and individuals when they need to execute in destinations
          they do not manage directly. We combine DMC operations, local coordination, and
          market-entry support so clients can stay focused on outcomes while we run the delivery on
          the ground.
        </>
      ),
    },
    work: {
      display: true,
      title: "How We Work",
      experiences: [
        {
          company: "DMC Operations",
          timeframe: "Education | Business | Personal",
          role: "Program design and local execution",
          achievements: [
            <>End-to-end itinerary planning, supplier sourcing, booking, and on-site coordination.</>,
            <>Flexible delivery models for single-city, multi-city, and multi-country programs.</>,
          ],
          images: [],
        },
        {
          company: "Market Entry and Partnerships",
          timeframe: "Assessment | Matchmaking | Regional Coordination",
          role: "Regional setup and partner development",
          achievements: [
            <>Market research, feasibility support, and partner matchmaking for expansion initiatives.</>,
            <>Regulatory and localization guidance coordinated through regional experts.</>,
          ],
          images: [],
        },
        {
          company: "Operational Delivery",
          timeframe: "Pre-trip to post-program",
          role: "Execution, risk control, and reporting",
          achievements: [
            <>Real-time troubleshooting, schedule control, and multilingual communication support.</>,
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
          name: "Japan",
          description: <>Program operations, local partnerships, education visits, and executive support.</>,
        },
        {
          name: "Mexico",
          description: <>Institutional exchanges, delegations, and destination logistics in major cities.</>,
        },
        {
          name: "Germany / EU",
          description: <>Conference planning, exhibition support, and cross-border coordination.</>,
        },
        {
          name: "Hong Kong / China",
          description: <>Business access, executive support, and high-touch regional delivery.</>,
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
              icon: "person",
            },
          ],
          images: [],
        },
      ],
    },
  },
  blog: {
    path: "/blog",
    label: "Blog",
    title: "KaiLinks Insights",
    description: "Practical notes for destination management and cross-market operations.",
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
      "We design and run academic programs across four regions: Japan, Mexico, Hong Kong/China, and Germany/EU. We handle institutional partnerships, scheduling, logistics, and on-site operations.",
  },
  business: {
    path: "/business",
    label: "Business",
    title: "Businesses",
    description:
      "Operational support for corporate meetings, conferences, incentive trips, expo participation, and market-entry strategies across our operating regions.",
  },
  personal: {
    path: "/personal",
    label: "Personal",
    title: "Individual travel",
    description:
      "Logistics for freelancers, athletes, and independent professionals who want to attend events, competitions, and activities abroad.",
  },
  gallery: {
    path: "/gallery",
    label: "Gallery",
    title: "KaiLinks Gallery",
    description: "Selected moments from KaiLinks-supported programs.",
    images: [
      {
        src: "/images/events/Nagano_Sky_2025.webp",
        alt: "Nagano Sky — Japan program",
        orientation: "horizontal",
      },
      {
        src: "/images/events/HongKong_Jewrellery_2025.webp",
        alt: "Hong Kong Jewellery Fair — trade show",
        orientation: "vertical",
      },
      {
        src: "/images/events/Tokyo_Spasce_Expo_2024.webp",
        alt: "Tokyo Space Expo — technology exhibition",
        orientation: "horizontal",
      },
      {
        src: "/images/events/Osaka_Expo_2025.webp",
        alt: "Osaka Expo 2025 — international event",
        orientation: "vertical",
      },
      {
        src: "/images/events/Queretaro_Expo_2025.webp",
        alt: "Querétaro Expo — Mexico exhibition",
        orientation: "vertical",
      },
      {
        src: "/images/events/UpcmEvnts_2.webp",
        alt: "Business event — corporate delegation",
        orientation: "horizontal",
      },
      {
        src: "/images/events/UpcmEvnts_4.webp",
        alt: "International conference — KaiLinks program",
        orientation: "horizontal",
      },
      {
        src: "/images/events/Tokyo_Electronics_2025.webp",
        alt: "Tokyo Electronics — electronics fair",
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
    description: <>教育・企業・個人向けサービスの実務インサイトを配信します。</>,
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
    title: "KaiLinks | グローバルDMC・展示会・市場参入支援",
    description:
      "日本・メキシコ・ドイツ/EU・香港/中国で、DMC運営、展示会・イベント対応、市場参入支援を提供します。",
    headline: <>文化とビジネスをつなぐ — 計画から実行まで。</>,
    featured: {
      display: true,
      title: (
        <Row gap="12" vertical="center">
          <strong>KaiLinks</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            DMC · パビリオン · インセンティブ · 市場参入
          </Text>
        </Row>
      ),
      href: "/business",
    },
    subline: (
      <>
        学術プログラム、企業イベント、インセンティブ旅行、個人渡航ロジスティクス ——
        日本・メキシコ・ドイツ/EU・香港/中国で現地運営。
      </>
    ),
  },
  about: {
    path: "/about",
    label: "会社情報",
    title: "KaiLinksについて",
    description:
      "KaiLinksは日本・メキシコ・ドイツ/EU・香港/中国で、プログラム運営・展示会・市場参入を支援するグローバルDMC/実行パートナーです。",
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
          KaiLinksは、組織や個人が自社で直接管理していない地域で実行する必要があるときに、
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
          timeframe: "教育 | 企業 | 個人",
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
          name: "日本",
          description: <>教育連携、現地運営、パートナー開拓を担当。</>,
        },
        {
          name: "メキシコ",
          description: <>交流プログラム、視察団、都市間ロジスティクスを担当。</>,
        },
        {
          name: "ドイツ / EU",
          description: <>会議・展示会運営と広域連携を担当。</>,
        },
        {
          name: "香港 / 中国",
          description: <>ビジネスアクセス支援と高品質な実務運営を担当。</>,
        },
      ],
    },
    technical: {
      display: true,
      title: "実行能力",
      skills: [
        {
          title: "企画とパートナー開発",
          description:
            "プログラム設計、現地パートナー選定、会場交渉、実行タイムラインの設計。",
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
          description:
            "運営チーム配置、参加者管理、現地スタッフ手配、移動管理、トラブル対応。",
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
          description:
            "ドキュメント作成、報告、次回施策に向けた最適化提案。",
          tags: [
            {
              name: "分析",
              icon: "book",
            },
            {
              name: "フォロー",
              icon: "person",
            },
          ],
          images: [],
        },
      ],
    },
  },
  blog: {
    path: "/blog",
    label: "ブログ",
    title: "KaiLinksインサイト",
    description: "デスティネーション運営と越境オペレーションに関する実務ノート。",
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
      "日本・メキシコ・香港/中国・ドイツ/EUの4地域で学術プログラムを設計・運営。機関連携、スケジュール調整、ロジスティクス、現地運営を担当します。",
  },
  business: {
    path: "/business",
    label: "企業",
    title: "企業向け",
    description:
      "企業会議、カンファレンス、インセンティブ旅行、展示会参加、市場参入戦略に対するオペレーショナルサポート。",
  },
  personal: {
    path: "/personal",
    label: "個人",
    title: "個人渡航",
    description:
      "海外のイベント・大会・活動に参加したいフリーランス、アスリート、独立プロフェッショナル向けのロジスティクス。",
  },
  gallery: {
    path: "/gallery",
    label: "ギャラリー",
    title: "KaiLinksギャラリー",
    description: "KaiLinksが支援したプログラムのハイライト。",
    images: [
      {
        src: "/images/events/Nagano_Sky_2025.webp",
        alt: "長野スカイ — 日本プログラム",
        orientation: "horizontal",
      },
      {
        src: "/images/events/HongKong_Jewrellery_2025.webp",
        alt: "香港ジュエリーフェア — 展示会",
        orientation: "vertical",
      },
      {
        src: "/images/events/Tokyo_Spasce_Expo_2024.webp",
        alt: "東京宇宙博 — 技術展示会",
        orientation: "horizontal",
      },
      {
        src: "/images/events/Osaka_Expo_2025.webp",
        alt: "大阪万博2025 — 国際イベント",
        orientation: "vertical",
      },
      {
        src: "/images/events/Queretaro_Expo_2025.webp",
        alt: "ケレタロ博 — メキシコ展示会",
        orientation: "vertical",
      },
      {
        src: "/images/events/UpcmEvnts_2.webp",
        alt: "ビジネスイベント — 企業視察",
        orientation: "horizontal",
      },
      {
        src: "/images/events/UpcmEvnts_4.webp",
        alt: "国際会議 — KaiLinksプログラム",
        orientation: "horizontal",
      },
      {
        src: "/images/events/Tokyo_Electronics_2025.webp",
        alt: "東京エレクトロニクス — 電子機器展",
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
