import Link from "next/link";
import styles from "./shared.module.css";

export default function SiteHeader({ variant = "light" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.brand} href="/" aria-label="Local Site Lift home">
        Local Site Lift
      </Link>
      <nav className={styles.navLinks} aria-label="Main navigation">
        <Link href="/website-benefits">Website benefits</Link>
        <Link href="/local-seo-benefits">SEO benefits</Link>
        <Link href="/#contact">Book a call</Link>
      </nav>
    </header>
  );
}
