import styles from "./AuditCta.module.css";

export default function AuditCta() {
  const auditEmailLink = `mailto:samwilk1898@gmail.com?subject=${encodeURIComponent(
    "Website audit request",
  )}`;

  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>For Jacksonville businesses</p>
        <h2>Want your current site compared against this standard?</h2>
        <p>
          Send over your website and I will point out the speed, trust, SEO, and
          conversion improvements that would matter most.
        </p>
      </div>
      <div className={styles.actions}>
        <a className={styles.primaryButton} href={auditEmailLink}>
          Request an audit
        </a>
        <a
          className={styles.secondaryButton}
          href="https://calendly.com/samwilk1898/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Schedule a call
        </a>
      </div>
    </section>
  );
}
