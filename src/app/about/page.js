import AuditCta from "../_components/AuditCta/AuditCta";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import SocialHighlights from "../_components/SocialHighlights/SocialHighlights";
import { experience, profile, projects, skills } from "../_data/portfolio";
import styles from "./page.module.css";

export const metadata = {
  title: "About Sam | Sam Wilk Consulting",
  description:
    "About Sam Wilk, the engineer behind the consulting site, with background across product development, APIs, and modern web applications.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>About Sam</p>
          <h1>The consulting side is backed by real software engineering work.</h1>
          <p>
            I am a {profile.location}-based software engineer focused on building and
            maintaining production software. That background shapes how I approach client
            websites: fast pages, clear structure, maintainable implementation, and a
            practical eye for what actually helps a business convert.
          </p>
        </div>
        <aside className={styles.snapshotCard} aria-label="Sam Wilk profile summary">
          <span>Current role</span>
          <strong>{experience[0].title}</strong>
          <strong>{experience[0].company}</strong>
          <p>{profile.summary}</p>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.cardGrid}>
          <article className={styles.card}>
            <h2>Production mindset</h2>
            <p>
              My day job centers on APIs, services, databases, and production support.
              That translates well into consulting work where speed, clarity, and
              reliability matter more than flashy markup.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Frontend and backend range</h2>
            <p>
              I have worked across C#, SQL, RabbitMQ, React, Next.js, and Node.js, so
              I am comfortable thinking through both what a site looks like and how it
              should be built.
            </p>
          </article>
          <article className={styles.card}>
            <h2>Built around outcomes</h2>
            <p>
              The consulting angle is straightforward: give local businesses a site that
              loads quickly, earns trust, and makes the next step obvious.
            </p>
          </article>
        </div>
      </section>

      <section className={styles.timelineSection}>
        {experience.slice(0, 3).map((role) => (
          <article className={styles.timelineItem} key={`${role.company}-${role.title}`}>
            <p className={styles.period}>{role.period}</p>
            <h2>{role.title}</h2>
            <p className={styles.company}>
              {role.company} · {role.location}
            </p>
            <ul className={styles.responsibilityList}>
              {role.responsibilities.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.band}>
        <div>
          <p className={styles.eyebrow}>Stack and side work</p>
          <h2>Representative tools and recent projects.</h2>
        </div>
        <div className={styles.bandContent}>
          <div className={styles.skillGrid}>
            {skills.map((skill) => (
              <span className={styles.skillItem} key={skill}>
                {skill}
              </span>
            ))}
          </div>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <div className={styles.projectItem} key={project.title}>
                <strong>{project.title}</strong>
                <span>{project.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
