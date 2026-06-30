import Link from "next/link";
import styles from "./SiteHeader.module.css";

export default function SiteHeader({ variant = "light" }) {
  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link className={styles.brand} href="/" aria-label="Sam Wilk Consulting home">
        Sam Wilk Consulting
      </Link>
      <nav className={styles.navLinks} aria-label="Main navigation">
        <Link href="/about">About</Link>
        <Link href="/website-benefits">Website benefits</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
