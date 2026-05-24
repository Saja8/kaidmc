"use client";

import { useId, useState } from "react";

type MobileHomeTab = {
  href: string;
  label: string;
  title: string;
  description: string;
};

type MobileHomeTabsProps = {
  items: MobileHomeTab[];
  actionLabel: string;
};

export function MobileHomeTabs({ items, actionLabel }: MobileHomeTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsId = useId();
  const activeItem = items[activeIndex] ?? items[0];

  if (!activeItem) return null;

  return (
    <section className="kailinksMobileTabs" aria-label="Service overview">
      <div className="kailinksMobileTabList" role="tablist">
        {items.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={item.href}
              id={`${tabsId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabsId}-panel-${index}`}
              className="kailinksMobileTab"
              data-active={selected}
              onClick={() => setActiveIndex(index)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        id={`${tabsId}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
        className="kailinksMobileTabPanel"
      >
        <p className="kailinksMobileTabKicker">{String(activeIndex + 1).padStart(2, "0")}</p>
        <h3 className="kailinksMobileTabTitle">{activeItem.title}</h3>
        <p className="kailinksMobileTabText">{activeItem.description}</p>
        <a className="kailinksMobileTabLink" href={activeItem.href}>
          {actionLabel}
        </a>
      </div>
    </section>
  );
}
