import Link from "next/link";
import AuditCta from "./_components/AuditCta";
import SectionIntro from "./_components/SectionIntro";
import SiteHeader from "./_components/SiteHeader";
import WebsitePreview from "./_components/WebsitePreview";
import shared from "./_components/shared.module.css";
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
    copy: "Set up titles, descriptions, headings, service-area copy, schema-ready content, and pages built around what customers search.",
    href: "/local-seo-benefits",
  },
  {
    title: "Lead-Focused Layouts",
    copy: "Add visible calls to action, proof, reviews, service details, and quote forms so visitors know exactly what to do next.",
    href: "#contact",
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

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <SiteHeader />

        <div className={styles.heroGrid} id="top">
          <div className={styles.heroContent}>
            <p className={shared.eyebrow}>Jacksonville web design for service businesses</p>
            <h1>Turn an outdated website into a faster lead machine.</h1>
            <p className={styles.heroText}>
              I build snappy, modern websites for local businesses that need more calls,
              quote requests, and trust from the first visit.
            </p>
            <div className={styles.heroActions}>
              <a className={shared.primaryButton} href="#contact">
                Get a website audit
              </a>
              <Link className={styles.secondaryButton} href="/website-benefits">
                See what changes
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

      <section className={styles.splitSection} id="seo">
        <div>
          <p className={shared.eyebrow}>SEO that supports real business</p>
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
              <Link href={service.href}>Explore benefits</Link>
            </article>
          ))}
        </div>
      </section>

      <AuditCta />
    </main>
  );
}
