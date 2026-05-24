"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";

interface GalleryImage {
  src: string;
  alt: string;
  orientation: string;
}

export default function GalleryView({ images }: { images: GalleryImage[] }) {
  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
