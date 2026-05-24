"use client";

import styles from "@/components/about/about.module.scss";
import { IconButton } from "@once-ui-system/core";
import { useId, useState } from "react";

type ProcessStep = {
  step: string;
  title: string;
  text: string;
};

type TeamMember = {
  name: string;
  region: string;
  role: string;
  photo: string;
  desc: string;
  linkedIn?: string;
  scholar?: string;
};

type MobileAboutTabsProps = {
  coverageTitle: string;
  processTitle: string;
  teamTitle: string;
  coverageItems: Array<{ label: string; text: string }>;
  processSteps: ProcessStep[];
  teamMembers: TeamMember[];
  profileLabels: {
    linkedin: string;
    scholar: string;
    source: string;
  };
};

export function MobileAboutTabs({
  coverageTitle,
  processTitle,
  teamTitle,
  coverageItems,
  processSteps,
  teamMembers,
  profileLabels,
}: MobileAboutTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabsId = useId();
  const tabs = [coverageTitle, processTitle, teamTitle];

  return (
    <section className={styles.mobileTabs} aria-label="About sections">
      <div className={styles.mobileTabList} role="tablist">
        {tabs.map((tab, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={tab}
              id={`${tabsId}-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabsId}-panel-${index}`}
              className={styles.mobileTab}
              data-active={selected}
              onClick={() => setActiveIndex(index)}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        id={`${tabsId}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${activeIndex}`}
        className={styles.mobileTabPanel}
      >
        {activeIndex === 0 && (
          <div className={styles.mobileCoverageList}>
            {coverageItems.map((item) => (
              <article key={item.label} className={styles.mobileCoverageCard}>
                <p className={styles.mobileCardTitle}>{item.label}</p>
                <p className={styles.mobileCardText}>{item.text}</p>
              </article>
            ))}
          </div>
        )}

        {activeIndex === 1 && (
          <div className={styles.mobileProcessList}>
            {processSteps.map((step) => (
              <article key={step.step} className={styles.mobileProcessCard}>
                <span className={styles.mobileStep}>{step.step}</span>
                <div>
                  <p className={styles.mobileCardTitle}>{step.title}</p>
                  <p className={styles.mobileCardText}>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeIndex === 2 && (
          <div className={styles.mobileTeamList}>
            {teamMembers.map((member) => (
              <article key={member.name} className={styles.mobileTeamCard}>
                <img src={member.photo} alt={member.name} className={styles.mobileTeamPhoto} />
                <div className={styles.mobileTeamBody}>
                  <p className={styles.mobileCardTitle}>{member.name}</p>
                  <p className={styles.mobileTeamMeta}>
                    {member.role} · {member.region}
                  </p>
                  <p className={styles.mobileCardText}>{member.desc}</p>
                  {(member.linkedIn || member.scholar) && (
                    <div className={styles.mobileProfileLinks}>
                      {member.linkedIn && (
                        <IconButton
                          href={member.linkedIn}
                          icon="linkedin"
                          tooltip={profileLabels.linkedin}
                          size="s"
                          variant="secondary"
                        />
                      )}
                      {member.scholar && (
                        <IconButton
                          href={member.scholar}
                          icon="scholar"
                          tooltip={profileLabels.scholar}
                          size="s"
                          variant="secondary"
                        />
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
