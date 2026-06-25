import styles from "./AuditCta.module.css";

export default function AuditCta() {
  const emailBody = [
    "Hi Sam,",
    "",
    "I'd like a website audit.",
    "",
    "My current website is:",
    "My business name is:",
    "The main service I offer is:",
    "",
    "Thanks!",
  ].join("\n");

  const auditEmailLink = `mailto:samwilk1898@gmail.com?subject=${encodeURIComponent(
    "Website audit request",
  )}&body=${encodeURIComponent(emailBody)}`;

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
      <a className={styles.primaryButton} href={auditEmailLink}>
        Request an audit
      </a>
    </section>
  );
}
