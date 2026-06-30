import AuditCta from "../_components/AuditCta/AuditCta";
import SiteHeader from "../_components/SiteHeader/SiteHeader";
import SocialHighlights from "../_components/SocialHighlights/SocialHighlights";
import { projects } from "../_data/portfolio";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects | Sam Wilk",
  description:
    "Selected projects for Sam Wilk, including Spendr, Handicap Trackr, and JobTrackr.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Projects</p>
        <h1>Recent builds that show frontend, backend, and shipping range.</h1>
        <p>
          These projects came over from the resume site and now live inside the same
          template structure. They give the portfolio a clearer path from experience to
          code and deployed work.
        </p>
      </section>

      <section className={styles.projectGrid}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.cardTop}>
              <div>
                <p className={styles.period}>{project.period}</p>
                <h2>{project.title}</h2>
              </div>
              <div className={styles.linkGroup}>
                {project.liveLink ? (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live site
                  </a>
                ) : null}
                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>

            <p className={styles.description}>{project.description}</p>

            <ul className={styles.highlightList}>
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={styles.techRow}>
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <div className={styles.socialWrap}>
        <SocialHighlights />
      </div>

      <AuditCta />
    </main>
  );
}
