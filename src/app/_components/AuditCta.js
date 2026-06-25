import styles from "./shared.module.css";

export default function AuditCta() {
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
      <a className={styles.primaryButton} href="mailto:hello@example.com?subject=Website%20audit%20request">
        Request an audit
      </a>
    </section>
  );
}
