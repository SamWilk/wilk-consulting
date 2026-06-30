import Link from "next/link";
import AuditCta from "./_components/AuditCta/AuditCta";
import SectionIntro from "./_components/SectionIntro/SectionIntro";
import SiteHeader from "./_components/SiteHeader/SiteHeader";
import SocialHighlights from "./_components/SocialHighlights/SocialHighlights";
import WebsitePreview from "./_components/WebsitePreview/WebsitePreview";
import { experience, profile } from "./_data/portfolio";
import styles from "./page.module.css";

const businessTypes = [
  "Pressure washing",
  "Construction",
  "Landscaping",
  "Roofing",
  "HVAC",
  "Home repair",
];

const wins = [
  {
    metric: "1.2s",
    label: "target load time",
    detail: "Fast pages keep mobile visitors from backing out before they call.",
  },
  {
    metric: "3x",
    label: "clearer quote paths",
    detail: "Every section points toward calling, requesting a quote, or booking.",
  },
  {
    metric: "Local",
    label: "SEO structure",
    detail: "Pages can target Jacksonville neighborhoods and nearby service areas.",
  },
];

const services = [
  {
    title: "Modern Website Redesigns",
    copy: "Replace dated pages with a fast, mobile-first site that makes your business look established before the first phone call.",
    href: "/website-benefits",
  },
  {
    title: "Local SEO Foundations",
    copy: "Set up titles, descriptions, headings, service-area copy, and pages built around what customers search.",
    href: "/local-seo-benefits",
  },
  {
    title: "About Sam",
    copy: "See the engineering background behind the consulting work, including product experience, C# services, React apps, and production systems.",
    href: "/about",
  },
];

const checklist = [
  "Fast hosting and clean code",
  "Mobile-first layout",
  "Google-friendly page titles",
  "Service area landing pages",
  "Review and trust sections",
  "Clear quote request flow",
];

const founderPoints = [
  `Built and maintained production APIs, services, and web applications in ${profile.location}.`,
  "Worked across enterprise systems, event-driven architectures, and client-facing interfaces.",
  `Brings a software engineering mindset to consulting work: performance, maintainability, and clear execution.`,
];

export default function Home() {
  const currentRole = experience[0];

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Jacksonville web design for service businesses</p>
            <h1>Turn an outdated website into a faster lead machine.</h1>
            <p className={styles.heroText}>
              I build snappy, modern websites for local businesses that need more calls,
              quote requests, and trust from the first visit.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#contact">
                Get a website audit
              </a>
              <Link className={styles.secondaryButton} href="/about">
                About Sam
              </Link>
            </div>
            <div className={styles.businessTypes} aria-label="Example business types">
              {businessTypes.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </div>
          </div>

          <WebsitePreview />
        </div>
      </section>

      <section className={styles.section} id="work">
        <SectionIntro
          eyebrow="What clients feel immediately"
          title="A site that looks current, loads quickly, and makes calling easy."
        />
        <div className={styles.winGrid}>
          {wins.map((win) => (
            <article className={styles.winCard} key={win.label}>
              <strong>{win.metric}</strong>
              <h3>{win.label}</h3>
              <p>{win.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionIntro
          eyebrow="Who is building it"
          title="Consulting backed by hands-on engineering experience."
        />
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}>
            <h3>{profile.name}</h3>
            <p>
              {profile.summary} Right now that includes {currentRole.title.toLowerCase()} work at{" "}
              {currentRole.company}, plus earlier product and platform work.
            </p>
            <Link href="/about">Read the background</Link>
          </article>

          {founderPoints.slice(0, 2).map((point) => (
            <article className={styles.serviceCard} key={point}>
              <h3>Practical delivery</h3>
              <p>{point}</p>
              <Link href="/projects">See projects</Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.splitSection} id="seo">
        <div>
          <p className={styles.eyebrow}>SEO that supports real business</p>
          <h2>Help local customers find the service they already need.</h2>
          <p>
            Jacksonville customers search with intent for pressure washing near me,
            landscaper in Mandarin, construction company Jacksonville, and similar terms.
            A better site gives Google clearer signals and gives visitors a reason to stay.
          </p>
        </div>
        <div className={styles.checkPanel}>
          {checklist.map((item) => (
            <div className={styles.checkItem} key={item}>
              <span aria-hidden="true">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionIntro
          eyebrow="Template packages"
          title="Start with the pieces most local service businesses need."
        />
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <Link href={service.href}>Explore</Link>
            </article>
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
