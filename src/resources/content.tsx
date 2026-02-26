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

const person: Person = {
  firstName: "KaiLinks",
  lastName: "Team",
  name: "KaiLinks",
  role: "Socio global de gestión de destinos (DMC), exhibiciones y entrada a mercados",
  avatar: "/images/avatar.webp",
  email: "info@kailinks.com",
  location: "Asia/Tokyo",
  languages: ["Inglés", "Español", "Japonés", "Chino mandarín"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Recibe actualizaciones de KaiLinks</>,
  description: <>Perspectivas para programas educativos, delegaciones empresariales y soporte personalizado.</>,
};

const social: Social = [
  {
    name: "Sitio web",
    icon: "globe",
    link: "https://kailinks.com",
    essential: true,
  },
  {
    name: "Correo",
    icon: "email",
    link: `mailto:${person.email}`,
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
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: "KaiLinks | DMC y acceso a mercados",
  description:
    "Servicios DMC, exhibiciones, eventos y apoyo de entrada a mercados en Japón, México, Alemania/UE y Hong Kong/China.",
  headline: <>Conectamos culturas y negocios — del plan a la ejecución.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>KaiLinks</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          DMC · Pabellones · Incentivos · Entrada a mercados
        </Text>
      </Row>
    ),
    href: "/business",
  },
  subline: (
    <>
      Programas académicos, eventos corporativos, viajes de incentivo y logística individual
      — planeados y operados en campo en Japón, México, Alemania/UE y Hong Kong/China.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Nosotros",
  title: "Nosotros | KaiLinks",
  description:
    "KaiLinks es un socio global DMC y de ejecución internacional para programas, exhibiciones y soporte de entrada a mercados con cobertura en Japón, México, Alemania/UE y Hong Kong/China.",
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
    title: "Quiénes somos",
    description: (
      <>
        KaiLinks acompaña a organizaciones y personas cuando necesitan ejecutar programas en
        destinos que no controlan directamente. Combinamos diseño operativo, coordinación local y
        soporte de entrada a mercados para que el cliente se concentre en objetivos, decisiones y
        resultados, mientras nosotros gestionamos la operación en campo.
      </>
    ),
  },
  work: {
    display: true,
    title: "Líneas de trabajo",
    experiences: [
      {
        company: "Operación DMC",
        timeframe: "Educación | Empresas | Personal",
        role: "Diseño de programas y ejecución local",
        achievements: [
          <>Planeación integral de itinerarios, proveedores, reservas y coordinación en sitio.</>,
          <>Modelos flexibles para programas en una ciudad, varias ciudades o varios países.</>,
        ],
        images: [],
      },
      {
        company: "Entrada a mercados y alianzas",
        timeframe: "Evaluación | Matchmaking | Coordinación regional",
        role: "Desarrollo regional y alianzas",
        achievements: [
          <>Investigación de mercado, análisis de factibilidad y matchmaking de socios.</>,
          <>Guía regulatoria, localización y coordinación con especialistas en cada mercado.</>,
        ],
        images: [],
      },
      {
        company: "Entrega operativa",
        timeframe: "Antes, durante y después del programa",
        role: "Ejecución, control de riesgo y reportes",
        achievements: [
          <>Resolución en tiempo real, control de agenda y soporte de comunicación multilingüe.</>,
          <>Reportes post programa con recomendaciones para mejorar la siguiente ejecución.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Cobertura operativa",
    institutions: [
      {
        name: "Japón",
        description: <>Programas educativos, coordinación local, visitas institucionales y soporte ejecutivo.</>,
      },
      {
        name: "México",
        description: <>Intercambios institucionales, delegaciones, logística de destino y coordinación en ciudades clave.</>,
      },
      {
        name: "Alemania / UE",
        description: <>Planeación de conferencias, soporte de exhibiciones y coordinación transfronteriza.</>,
      },
      {
        name: "Hong Kong / China",
        description: <>Acceso de negocios, soporte ejecutivo y coordinación regional de alto nivel.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Capacidades de ejecución",
    skills: [
      {
        title: "Planeación y alianzas",
        description:
          "Arquitectura de programas, selección de socios locales, negociación de sedes y diseño de timeline.",
        tags: [
          {
        name: "Estrategia",
            icon: "document",
          },
          {
            name: "Alianzas",
            icon: "globe",
          },
        ],
        images: [],
      },
      {
        title: "Ejecución en sitio",
        description:
          "Despliegue de equipo, gestión de asistentes, staff local, traslados y resolución de incidencias.",
        tags: [
          {
        name: "Operaciones",
            icon: "grid",
          },
          {
        name: "Coordinación",
            icon: "calendar",
          },
        ],
        images: [],
      },
      {
        title: "Soporte post programa",
        description:
          "Documentación, reportes y recomendaciones de optimización para el siguiente ciclo.",
        tags: [
          {
        name: "Análisis",
            icon: "book",
          },
          {
            name: "Seguimiento",
            icon: "person",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Perspectivas de KaiLinks",
  description: "Notas prácticas sobre gestión de destinos y operaciones entre mercados.",
};

const work: Work = {
  path: "/work",
  label: "Casos",
  title: "Casos de éxito",
  description: "Ejemplos seleccionados de entrega en programas KaiLinks.",
};

const education: Education = {
  path: "/education",
  label: "Educación",
  title: "Instituciones educativas",
  description:
    "Diseñamos y ejecutamos programas académicos en cuatro regiones: Japan, México, Hong Kong/China y Alemania/UE. Nos encargamos de la vinculación institucional, agenda, logística y operación en sitio.",
};

const business: Business = {
  path: "/business",
  label: "Empresas",
  title: "Empresas",
  description:
    "Soporte operativo para reuniones corporativas, conferencias, viajes de incentivo, participación en expos y estrategias de entrada a nuevos mercados.",
};

const personal: Personal = {
  path: "/personal",
  label: "Personal",
  title: "Viajes individuales",
  description:
    "Logística para freelancers, deportistas y profesionales independientes que quieren participar en eventos, competencias y actividades en el extranjero.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: "Galería KaiLinks",
  description: "Momentos seleccionados de programas ejecutados por KaiLinks.",
  images: [
    {
      src: "/images/events/Nagano_Sky_2025.webp",
      alt: "Nagano Sky — programa en Japón",
      orientation: "horizontal",
    },
    {
      src: "/images/events/HongKong_Jewrellery_2025.webp",
      alt: "Hong Kong Jewellery Fair — feria comercial",
      orientation: "vertical",
    },
    {
      src: "/images/events/Tokyo_Spasce_Expo_2024.webp",
      alt: "Tokyo Space Expo — exhibición tecnológica",
      orientation: "horizontal",
    },
    {
      src: "/images/events/Osaka_Expo_2025.webp",
      alt: "Osaka Expo 2025 — evento internacional",
      orientation: "vertical",
    },
    {
      src: "/images/events/Queretaro_Expo_2025.webp",
      alt: "Querétaro Expo — exhibición en México",
      orientation: "vertical",
    },
    {
      src: "/images/events/UpcmEvnts_2.webp",
      alt: "Evento empresarial — delegación de negocios",
      orientation: "horizontal",
    },
    {
      src: "/images/events/UpcmEvnts_4.webp",
      alt: "Conferencia internacional — programa KaiLinks",
      orientation: "horizontal",
    },
    {
      src: "/images/events/Tokyo_Electronics_2025.webp",
      alt: "Tokyo Electronics — feria de electrónica",
      orientation: "vertical",
    },
  ],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
  education,
  business,
  personal,
};
