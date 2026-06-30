import styles from "./SocialHighlights.module.css";
import { profile } from "../../_data/portfolio";

const socialLinks = [
  {
    name: "GitHub",
    handle: "Code, side projects, and recent repository work",
    href: profile.github,
    icon: "gh",
  },
  {
    name: "Live Portfolio",
    handle: "Original single-page resume site",
    href: profile.portfolio,
    icon: "sw",
  },
  {
    name: "Calendly",
    handle: "Quick path to a conversation",
    href: profile.calendly,
    icon: "30",
  },
];

export default function SocialHighlights() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Proof and contact</p>
        <h2>Give visitors a simple path to verify the work behind the site.</h2>
        <p>
          Alongside the consulting site, these links make it easy to review shipped
          projects, the original resume portfolio, and a direct booking path.
        </p>
      </div>

      <div className={styles.linkGrid}>
        {socialLinks.map((link) => (
          <a
            className={styles.socialCard}
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.icon} aria-hidden="true">
              {link.icon}
            </span>
            <span>
              <strong>{link.name}</strong>
              <small>{link.handle}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
