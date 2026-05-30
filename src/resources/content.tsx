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

const person: Person = {
  firstName: "KaiLinks",
  lastName: "Team",
  name: "KaiLinks",
  role: "DMC global · Exhibiciones · Entrada a mercados",
  avatar: "/images/avatar.webp",
  email: "info@kailinks.com",
  location: "Asia/Tokyo",
  languages: ["Inglés", "Español", "Japonés", "Chino mandarín"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Recibe actualizaciones de KaiLinks</>,
  description: (
    <>Perspectivas para programas educativos, delegaciones empresariales y viajes de grupo.</>
  ),
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
  title: "KaiLinks | Operación internacional",
  description:
    "Planeación y ejecución local para programas internacionales con coordinación profesional en cada destino.",
  headline: <>Un contacto. Cualquier destino.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong>KaiLinks</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          DMC global · Asia · América Latina · Europa
        </Text>
      </Row>
    ),
    href: "/about",
  },
  subline: (
    <>
      Agenda, proveedores y operación en sitio — gestionados desde un solo punto de contacto.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Nosotros",
  title: "Nosotros | KaiLinks",
  description:
    "Ejecución local para programas internacionales. Red propia en Asia Oriental, América Latina y Europa.",
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
        KaiLinks acompaña a organizaciones y grupos cuando necesitan ejecutar programas en destinos
        que no controlan directamente. Combinamos diseño operativo, coordinación local y soporte de
        entrada a mercados para que el cliente se concentre en objetivos, decisiones y resultados,
        mientras nosotros gestionamos la operación en campo.
      </>
    ),
  },
  work: {
    display: true,
    title: "Líneas de trabajo",
    experiences: [
      {
        company: "Operación DMC",
        timeframe: "Educación | Empresas | Grupos",
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
        name: "Asia Oriental",
        description: (
          <>
            Programas educativos, coordinación local, visitas institucionales y soporte ejecutivo.
          </>
        ),
      },
      {
        name: "América Latina",
        description: (
          <>
            Intercambios institucionales, delegaciones, logística de destino y coordinación en
            ciudades clave.
          </>
        ),
      },
      {
        name: "Europa",
        description: (
          <>
            Entrada a mercado, canales comerciales, soporte de exhibiciones y coordinación
            transfronteriza.
          </>
        ),
      },
      {
        name: "Programas multicity",
        description: (
          <>
            Coordinación entre sedes, proveedores y equipos locales cuando el programa cruza
            regiones.
          </>
        ),
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
          "Arquitectura de programas, selección de socios locales, negociación de sedes y diseño de timeline. Integración de herramientas digitales para seguimiento y coordinación.",
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
          "Despliegue de equipo, gestión de asistentes, staff local, traslados y resolución de incidencias. Uso de operaciones basadas en datos para mayor previsibilidad.",
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
          "Documentación, reportes y recomendaciones de optimización para el siguiente ciclo. Entregables claros con insights prácticos y métricas.",
        tags: [
          {
            name: "Análisis",
            icon: "book",
          },
          {
            name: "Seguimiento",
            icon: "globe",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Eventos",
  title: "Eventos KaiLinks",
  description: "Eventos, notas y actualizaciones sobre programas internacionales y gestión de destinos.",
};

const events: Blog = {
  path: "/events",
  label: "Eventos",
  title: "Eventos KaiLinks",
  description: "Agenda y eventos organizados y coordinados por KaiLinks.",
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
    "Diseñamos y ejecutamos programas académicos, conferencias y eventos institucionales con vinculación, agenda, logística y operación en sitio.",
};

const business: Business = {
  path: "/business",
  label: "Empresas",
  title: "Programas para empresas",
  description:
    "Estructuramos agendas ejecutivas, participación en expos y coordinación local para empresas que necesitan operar fuera de su mercado habitual.",
};

const personal: Personal = {
  path: "/groups",
  label: "Grupos",
  title: "Programas de grupo",
  description:
    "Coordinamos grupos, incentivos, delegaciones y experiencias especiales con agenda clara, proveedores confiables y soporte local.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: "Galería KaiLinks",
  description: "Momentos seleccionados de programas ejecutados por KaiLinks.",
  images: [
    {
      src: "/images/illustrations/group-travel.svg",
      alt: "Ilustración de operación para viajes de grupo",
      orientation: "horizontal",
    },
    {
      src: "/images/illustrations/pavilion-expo.svg",
      alt: "Ilustración de operación de pabellón y exposición",
      orientation: "vertical",
    },
    {
      src: "/images/illustrations/kailinks-operations-map.svg",
      alt: "Ilustración de coordinación internacional",
      orientation: "horizontal",
    },
    {
      src: "/images/illustrations/education-programs.svg",
      alt: "Ilustración de programa educativo internacional",
      orientation: "vertical",
    },
    {
      src: "/images/illustrations/startup-market-entry.svg",
      alt: "Ilustración de agenda empresarial internacional",
      orientation: "vertical",
    },
    {
      src: "/images/illustrations/risk-map.svg",
      alt: "Ilustración de control operativo y riesgos",
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
  events,
  work,
  gallery,
  education,
  business,
  personal,
};
