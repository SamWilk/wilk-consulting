import AuditCta from "../_components/AuditCta";
import SectionIntro from "../_components/SectionIntro";
import SiteHeader from "../_components/SiteHeader";
import styles from "./local-seo-benefits.module.css";

export const metadata = {
  title: "Local SEO Benefits for Jacksonville Contractors",
  description:
    "Learn how local SEO pages, service-area content, reviews, and technical structure help Jacksonville businesses earn more qualified leads.",
};

const seoBenefits = [
  {
    title: "Get found by high-intent customers",
    copy: "People searching for a service nearby are often ready to call. Local SEO helps the right pages show up for the right searches.",
  },
  {
    title: "Turn service areas into assets",
    copy: "Pages can target Jacksonville, Mandarin, Riverside, Orange Park, Beaches communities, and other areas where the business works.",
  },
  {
    title: "Improve retention by proving value",
    copy: "SEO gives clients visible progress to track: better content, clearer rankings, stronger pages, and more qualified traffic over time.",
  },
];

const localSignals = [
  "Unique title tags and meta descriptions",
  "Service pages built around real customer searches",
  "Neighborhood and city landing pages",
  "Review sections and trust signals",
  "Structured headings that explain each service",
  "Fast pages that support search performance",
];

export default function LocalSeoBenefitsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Local SEO benefits</p>
          <h1>Make the website easier for Google and customers to understand.</h1>
          <p>
            Local SEO is not just keywords. It is page structure, service-area content,
            trust signals, speed, and clear answers that help qualified customers choose
            who to call.
          </p>
        </div>
        <aside className={styles.searchCard} aria-label="Example local search intent">
          <span>Example searches</span>
          <strong>pressure washing near me</strong>
          <strong>landscaping company Jacksonville FL</strong>
          <strong>home remodel contractor Mandarin</strong>
        </aside>
      </section>

      <section className={styles.section}>
        <SectionIntro
          eyebrow="Why it matters"
          title="SEO helps business owners connect website improvements to revenue."
        />
        <div className={styles.cardGrid}>
          {seoBenefits.map((benefit) => (
            <article className={styles.card} key={benefit.title}>
              <h2>{benefit.title}</h2>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.signalSection}>
        <div>
          <p className={styles.eyebrow}>Local ranking signals</p>
          <h2>Build pages around services, locations, and proof.</h2>
          <p>
            This gives you a strong client conversation: the site is not only prettier,
            it is organized around the searches that produce calls and quote requests.
          </p>
        </div>
        <div className={styles.signalGrid}>
          {localSignals.map((signal) => (
            <div className={styles.signalItem} key={signal}>
              <span aria-hidden="true">+</span>
              {signal}
            </div>
          ))}
        </div>
      </section>

      <AuditCta />
    </main>
  );
}
