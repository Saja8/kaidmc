"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";
import { useEffect, useState } from "react";
import { Locale, getClientLocale } from "@/resources/locale";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    setLocale(getClientLocale());
  }, []);

  return (
    <Flex
      fillWidth
      gap="l"
      padding="s"
      border="neutral-alpha-weak"
      radius="l"
      background="page"
      s={{ direction: "column" }}
      style={{ alignItems: "stretch" }}
    >
      {/* Image — constrained, not cropped */}
      <Flex
        flex={4}
        className="kailinksProjectImage"
        style={{
          borderRadius: "var(--radius-m)",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Carousel
          sizes="(max-width: 768px) 100vw, 400px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      </Flex>
      {/* Text content */}
      <Column flex={6} gap="12" paddingY="8" horizontal="start">
        {title && (
          <Heading as="h2" wrap="balance" variant="heading-strong-l">
            {title}
          </Heading>
        )}
        {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        <Flex gap="20" wrap>
          {content?.trim() && (
            <SmartLink
              suffixIcon="arrowRight"
              style={{ margin: "0", width: "fit-content" }}
              href={href}
            >
              <Text variant="body-default-s">
                {locale === "en" ? "Read case study" : locale === "ja" ? "事例を読む" : "Leer caso"}
              </Text>
            </SmartLink>
          )}
          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">
                {locale === "en" ? "View project" : locale === "ja" ? "プロジェクトを見る" : "Ver proyecto"}
              </Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    </Flex>
  );
};
