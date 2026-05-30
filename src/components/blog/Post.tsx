"use client";

import { Card, Column, Media, Row, Text, Badge } from "@once-ui-system/core";
import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import { Locale, getClientLocale } from "@/resources/locale";

interface PostProps {
  post: any;
  thumbnail: boolean;
  direction?: "row" | "column";
  basePath?: string;
}

export default function Post({ post, thumbnail, direction, basePath = "/blog" }: PostProps) {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  return (
    <Card
      fillWidth
      key={post.slug}
      href={`${basePath}/${post.slug}`}
      transition="micro-medium"
      direction={direction}
      border="neutral-alpha-weak"
      background="page"
      padding="0"
      radius="l"
      gap={direction === "column" ? undefined : "0"}
      s={{ direction: "column" }}
      className="klBlogCard"
    >
      {post.metadata.image && thumbnail && (
        <Media
          priority
          sizes="(max-width: 768px) 100vw, 640px"
          border="transparent"
          cursor="interactive"
          radius="l-4"
          src={post.metadata.image}
          alt={
            (locale === "en" ? "Thumbnail of " : locale === "ja" ? "サムネイル: " : "Miniatura de ") +
            post.metadata.title
          }
          aspectRatio="16 / 9"
          style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
        />
      )}
      <Column fillWidth paddingY="20" paddingX="24" gap="12">
        <Text variant="heading-strong-l" wrap="balance">
          {post.metadata.title}
        </Text>
        <Row gap="12" vertical="center" wrap>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            {formatDate(post.metadata.publishedAt, false)}
          </Text>
          {post.metadata.tag && (
            <Text variant="label-strong-s" onBackground="neutral-weak" className="klBlogTag">
              {post.metadata.tag}
            </Text>
          )}
        </Row>
      </Column>
    </Card>
  );
}
