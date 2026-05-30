import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Events } from "@/components/blog/Events";
import { baseURL, getLocalizedResources, getServerLocale } from "@/resources";

export async function generateMetadata() {
  const locale = await getServerLocale();
  const { events } = getLocalizedResources(locale);

  return Meta.generate({
    title: events.title,
    description: events.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(events.title)}`,
    path: events.path,
  });
}

export default async function EventsPage() {
  const locale = await getServerLocale();
  const { events, person } = getLocalizedResources(locale);

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={events.title}
        description={events.description}
        path={events.path}
        image={`/api/og/generate?title=${encodeURIComponent(events.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${events.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="8" variant="heading-strong-xl" marginLeft="24">
        {events.label}
      </Heading>
      <Text marginLeft="24" marginBottom="l" onBackground="neutral-weak" variant="body-default-l">
        {events.description}
      </Text>
      <Column fillWidth flex={1} gap="40">
        <Events locale={locale} range={[1, 2]} thumbnail />
        <Heading as="h2" variant="heading-strong-l" marginLeft="l">
          {locale === "en" ? "More events" : locale === "ja" ? "他のイベント" : "Más eventos"}
        </Heading>
        <Events locale={locale} range={[3]} columns="2" thumbnail direction="column" />
      </Column>
    </Column>
  );
}
