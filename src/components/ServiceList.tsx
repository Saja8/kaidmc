"use client";

import { Children, useState } from "react";
import { Icon } from "@once-ui-system/core";

interface ServiceItem {
  title: string;
  summary: string;
  image?: string;
}

interface ServiceListProps {
  items: ServiceItem[];
  children: React.ReactNode;
  listId?: string;
}

export function ServiceList({ items, children, listId = "kl-accordion" }: ServiceListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const childArray = Children.toArray(children);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="klAccordionList">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const hasPhotoThumb = item.image && !item.image.endsWith(".svg");
        const bodyId = `${listId}-body-${i}`;
        const triggerId = `${listId}-trigger-${i}`;
        return (
          <div key={i} className={`klAccordionItem${isOpen ? " klAccordionItem--open" : ""}`}>
            <button
              id={triggerId}
              className="klAccordionTrigger"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={bodyId}
            >
              {hasPhotoThumb ? (
                <div className="klAccordionThumb">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
              ) : (
                <div className="klAccordionBadge" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
              )}
              <div className="klAccordionMeta">
                <span className="klAccordionTitle">{item.title}</span>
                <span className="klAccordionSummary">{item.summary}</span>
              </div>
              <span className={`klAccordionChevron${isOpen ? " klAccordionChevron--open" : ""}`} aria-hidden="true">
                <Icon name="chevronDown" size="s" onBackground="neutral-weak" />
              </span>
            </button>
            <div
              id={bodyId}
              role="region"
              aria-labelledby={triggerId}
              className={`klAccordionBody${isOpen ? " klAccordionBody--open" : ""}`}
            >
              <div className="klAccordionBodyInner">
                <div className="klAccordionContent">{childArray[i]}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
