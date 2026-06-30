import styles from "./AuditCta.module.css";
import ContactForm from "../ContactForm/ContactForm";

export default function AuditCta() {
  return (
    <section className={styles.ctaSection} id="contact">
      <div>
        <p className={styles.eyebrow}>Work directly with Sam</p>
        <h2>Want your current site compared against a stronger standard?</h2>
        <p>
          Send over your website and I will point out the speed, trust, SEO, and
          conversion improvements that would matter most, then we can talk through what
          to tackle first.
        </p>
      </div>

      <div className={styles.formWrap}>
        <ContactForm />
      </div>
    </section>
  );
}
