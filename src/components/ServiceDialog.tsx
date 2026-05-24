"use client";

import { Column, Heading, Icon, Row, Text } from "@once-ui-system/core";
import { useEffect, useState } from "react";

interface ServiceDialogProps {
  title: string;
  summary: string;
  image?: string;
  children: React.ReactNode;
}

export function ServiceDialog({ title, summary, image, children }: ServiceDialogProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <Row
        fillWidth
        gap="16"
        padding="16"
        border="neutral-alpha-weak"
        background="page"
        radius="l"
        vertical="start"
        className="kailinksServiceListItem"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        {image ? (
          <div className="kailinksServiceListThumb">
            <img src={image} alt="" loading="lazy" />
          </div>
        ) : (
          <Icon
            name="grid"
            size="m"
            onBackground="brand-medium"
            style={{ flexShrink: 0, marginTop: "0.15rem" }}
          />
        )}
        <Column gap="4" flex={1}>
          <Row horizontal="between" vertical="center" gap="8">
            <Heading as="h2" variant="heading-strong-m">
              {title}
            </Heading>
            <Icon
              name="chevronDown"
              size="s"
              onBackground="neutral-weak"
              style={{ flexShrink: 0 }}
            />
          </Row>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {summary}
          </Text>
        </Column>
      </Row>

      {open && (
        <div className="klDialogOverlay" onClick={() => setOpen(false)}>
          <div className="klDialogPanel" onClick={(e) => e.stopPropagation()}>
            <div className="klDialogHeader">
              <span className="klDialogTitle">{title}</span>
              <button
                className="klDialogClose"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            {image && <img src={image} alt={title} className="klDialogImage" />}
            <div className="klDialogContent">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
