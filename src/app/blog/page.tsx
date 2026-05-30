import { Events } from "@/components/blog/Events";
import { Posts } from "@/components/blog/Posts";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";
import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { blog } = getLocalizedResources(locale);

  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default async function Blog() {
  const locale = await getServerLocale();
  const { blog, person } = getLocalizedResources(locale);

  const pageTitle =
    locale === "en"
      ? "Events"
      : locale === "ja"
        ? "イベント"
        : "Eventos";

  const pageDescription =
    locale === "en"
      ? "Events, notes, and updates on international programs and destination management."
      : locale === "ja"
        ? "国際プログラムとデスティネーション運営に関するイベント・ノート・更新情報。"
        : "Eventos, notas y actualizaciones sobre programas internacionales y gestión de destinos.";

  return (
    <Column maxWidth="m" paddingTop="24" paddingX="0">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page header */}
      <Column paddingX="24" paddingBottom="40" gap="8">
        <Heading variant="display-strong-m">
          {pageTitle}
        </Heading>
        <Text onBackground="neutral-weak" variant="body-default-l">
          {pageDescription}
        </Text>
      </Column>

      {/* Featured post — full width */}
      <Column fillWidth gap="40">
        <Posts locale={locale} range={[1, 1]} thumbnail />

        {/* Events (shown only if content exists) */}
        <Events locale={locale} range={[1, 1]} thumbnail />

        {/* Remaining posts — 2-column grid */}
        <Posts locale={locale} range={[2]} columns="2" thumbnail direction="column" />
      </Column>
    </Column>
  );
}
