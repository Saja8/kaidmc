import { getPosts } from "@/utils/utils";
import { Grid } from "@once-ui-system/core";
import Post from "./Post";
import type { Locale } from "@/resources/locale";
import { getEventsPostsPath } from "@/utils/contentPaths";

interface EventsProps {
  locale?: Locale;
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
  exclude?: string[];
}

export function Events({
  locale = "es",
  range,
  columns = "1",
  thumbnail = false,
  exclude = [],
  direction,
}: EventsProps) {
  let allEvents = getPosts(getEventsPostsPath(locale));

  if (allEvents.length === 0 && locale !== "es") {
    allEvents = getPosts(getEventsPostsPath("es"));
  }

  if (exclude.length) {
    allEvents = allEvents.filter((post) => !exclude.includes(post.slug));
  }

  const sorted = allEvents.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayed = range
    ? sorted.slice(range[0] - 1, range.length === 2 ? range[1] : sorted.length)
    : sorted;

  return (
    <>
      {displayed.length > 0 && (
        <Grid columns={columns} s={{ columns: 1 }} fillWidth marginBottom="40" gap="16">
          {displayed.map((post) => (
            <Post
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
              basePath="/events/posts"
            />
          ))}
        </Grid>
      )}
    </>
  );
}
