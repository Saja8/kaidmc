import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Posts } from "@/components/blog/Posts";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";

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

  return (
    <Column maxWidth="m" paddingTop="24">
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
      <Heading marginBottom="8" variant="heading-strong-xl" marginLeft="24">
        {blog.title}
      </Heading>
      <Text marginLeft="24" marginBottom="l" onBackground="neutral-weak" variant="body-default-l">
        {blog.description}
      </Text>
      <Column fillWidth flex={1} gap="40">
        <Posts locale={locale} range={[1, 1]} thumbnail />
        <Heading as="h2" variant="heading-strong-l" marginLeft="l">
          {locale === "en" ? "More posts" : locale === "ja" ? "その他の記事" : "Mas publicaciones"}
        </Heading>
        <Posts locale={locale} range={[2]} columns="2" thumbnail direction="column" />
      </Column>
    </Column>
  );
}
