import { CustomMDX, ScrollToHash } from "@/components";
import { ShareSection } from "@/components/blog/ShareSection";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import type { Locale } from "@/resources/locale";
import { getEventsPostsPath } from "@/utils/contentPaths";
import { formatDate } from "@/utils/formatDate";
import { getPosts } from "@/utils/utils";
import {
  Avatar,
  Column,
  Heading,
  Line,
  Media,
  Meta,
  Row,
  Schema,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

function getEventPosts(locale: Locale) {
  const localizedPosts = getPosts(getEventsPostsPath(locale));

  if (localizedPosts.length || locale === "es") {
    return localizedPosts;
  }

  return getPosts(getEventsPostsPath("es"));
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(getEventsPostsPath("es"));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const locale = await getServerLocale();
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getEventPosts(locale).find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image:
      post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`,
    path: `/events/posts/${post.slug}`,
  });
}

export default async function EventPost({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const locale = await getServerLocale();
  const { about, events, person } = getLocalizedResources(locale);
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const post = getEventPosts(locale).find((post) => post.slug === slugPath);

  if (!post) {
    notFound();
  }

  const eventPath = `/events/posts/${post.slug}`;

  return (
    <Row fillWidth>
      <Row maxWidth={12} m={{ hide: true }} />
      <Row fillWidth horizontal="center">
        <Column as="section" maxWidth="m" horizontal="center" gap="l" paddingTop="24">
          <Schema
            as="blogPosting"
            baseURL={baseURL}
            path={eventPath}
            title={post.metadata.title}
            description={post.metadata.summary}
            datePublished={post.metadata.publishedAt}
            dateModified={post.metadata.publishedAt}
            image={
              post.metadata.image ||
              `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
            }
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />
          <Column maxWidth="s" gap="16" horizontal="center" align="center">
            <SmartLink href="/blog">
              <Text variant="label-strong-m">{events.label}</Text>
            </SmartLink>
            <Text variant="body-default-xs" onBackground="neutral-weak" marginBottom="12">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
            <Heading variant="display-strong-m">{post.metadata.title}</Heading>
            {post.metadata.subtitle && (
              <Text
                variant="body-default-l"
                onBackground="neutral-weak"
                align="center"
                style={{ fontStyle: "italic" }}
              >
                {post.metadata.subtitle}
              </Text>
            )}
          </Column>
          <Row marginBottom="32" horizontal="center">
            <Row gap="16" vertical="center">
              <Avatar size="s" src={person.avatar} />
              <Text variant="label-default-m" onBackground="brand-weak">
                {person.name}
              </Text>
            </Row>
          </Row>
          {post.metadata.image && (
            <Media
              src={post.metadata.image}
              alt={post.metadata.title}
              aspectRatio="16/9"
              priority
              sizes="(min-width: 768px) 100vw, 768px"
              border="neutral-alpha-weak"
              radius="l"
              marginTop="12"
              marginBottom="8"
            />
          )}
          <Column as="article" maxWidth="s">
            <CustomMDX source={post.content} />
          </Column>

          <ShareSection title={post.metadata.title} url={`${baseURL}${eventPath}`} />

          <Column fillWidth gap="40" horizontal="center" marginTop="40">
            <Line maxWidth="40" />
            <SmartLink href="/blog">
              <Text variant="label-strong-m">
                {locale === "en"
                  ? "Back to notes and events"
                  : locale === "ja"
                    ? "ブログ・イベントに戻る"
                    : "Volver a perspectivas y eventos"}
              </Text>
            </SmartLink>
          </Column>
          <ScrollToHash />
        </Column>
      </Row>
      <Column maxWidth={12} m={{ hide: true }} />
    </Row>
  );
}
