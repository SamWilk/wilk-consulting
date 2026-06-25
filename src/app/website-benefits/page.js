import AuditCta from "../_components/AuditCta";
import SectionIntro from "../_components/SectionIntro";
import SiteHeader from "../_components/SiteHeader";
import styles from "./website-benefits.module.css";

export const metadata = {
  title: "Modern Website Benefits for Jacksonville Service Businesses",
  description:
    "See how a faster, cleaner, mobile-first website helps Jacksonville contractors earn more calls, trust, and quote requests.",
};

const outcomes = [
  {
    title: "More trust before the first call",
    copy: "A sharp website makes a pressure washing, construction, or landscaping company look active, organized, and ready to hire.",
  },
  {
    title: "Fewer visitors lost on mobile",
    copy: "Most local service searches happen on phones. Clear buttons, readable sections, and quick pages reduce drop-offs.",
  },
  {
    title: "Better quote request flow",
    copy: "Strong service pages guide people from problem to proof to action without making them hunt for the next step.",
  },
];

const upgrades = [
  "Clear service cards for the jobs customers actually search",
  "Sticky or repeated call-to-action areas",
  "Review, warranty, and insurance proof sections",
  "Fast-loading layouts with compressed media",
  "Simple quote form paths and visible phone links",
  "Mobile spacing that works for busy customers in the field",
];

export default function WebsiteBenefitsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrap}>
        <SiteHeader variant="dark" />
      </div>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Modern website benefits</p>
        <h1>Show clients what a sharper service-business website can do.</h1>
        <p>
          This page gives you a clear story to walk local business owners through:
          the website should load fast, explain services clearly, build trust, and
          make contacting the company obvious.
        </p>
      </section>

      <section className={styles.section}>
        <SectionIntro
          eyebrow="Business impact"
          title="A better website changes how potential customers judge the business."
        />
        <div className={styles.cardGrid}>
          {outcomes.map((outcome) => (
            <article className={styles.card} key={outcome.title}>
              <h2>{outcome.title}</h2>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.featureBand}>
        <div>
          <p className={styles.eyebrow}>What gets upgraded</p>
          <h2>Every section should reduce doubt or move someone closer to a quote.</h2>
        </div>
        <div className={styles.list}>
          {upgrades.map((upgrade) => (
            <div className={styles.listItem} key={upgrade}>
              <span aria-hidden="true">+</span>
              {upgrade}
            </div>
          ))}
        </div>
      </section>

      <AuditCta />
    </main>
  );
}
