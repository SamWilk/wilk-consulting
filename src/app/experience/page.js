import Link from "next/link";
import AuditCta from "../_components/AuditCta/AuditCta";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import SocialHighlights from "../_components/SocialHighlights/SocialHighlights";
import { experience, profile, skills } from "../_data/portfolio";
import styles from "./page.module.css";

export const metadata = {
  title: "Experience | Sam Wilk",
  description:
    "Experience history for Sam Wilk across Black Diamond Wealth Solutions, Beeline, and Perspective.",
};

export default function ExperiencePage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Experience</p>
          <h1>Roles built around shipping and maintaining production software.</h1>
          <p>
            This page carries over the actual work history from the live resume site and
            fits it into the template structure. The emphasis is backend services, APIs,
            frontend delivery, and ownership after release.
          </p>
        </div>
        <aside className={styles.snapshotCard} aria-label="Profile snapshot">
          <span>Current focus</span>
          <strong>{profile.role}</strong>
          <strong>{profile.location}</strong>
          <p>{profile.summary}</p>
        </aside>
      </section>

      <section className={styles.timelineSection}>
        {experience.map((role) => (
          <article className={styles.timelineItem} key={`${role.company}-${role.title}`}>
            <div className={styles.roleHeader}>
              <div>
                <p className={styles.period}>{role.period}</p>
                <h2>{role.title}</h2>
                <p className={styles.company}>
                  {role.company} · {role.location}
                </p>
              </div>
              <Link className={styles.jumpLink} href="/projects">
                View projects
              </Link>
            </div>
            <ul className={styles.responsibilityList}>
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.skillsBand}>
        <div>
          <p className={styles.eyebrow}>Core stack</p>
          <h2>Tools that show up repeatedly in the work.</h2>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <div className={styles.skillItem} key={skill}>
              <span aria-hidden="true">+</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
