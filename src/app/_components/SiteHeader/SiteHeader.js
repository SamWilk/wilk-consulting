"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/website-benefits", label: "Website benefits" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader({ variant = "light" }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className={`${styles.header} ${styles[variant]}`}>
      <Link
        className={styles.brand}
        href="/"
        aria-label="Sam Wilk Consulting home"
        onClick={handleNavClick}
      >
        Sam Wilk Consulting
      </Link>

      <button
        type="button"
        className={styles.menuButton}
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
        <span className={styles.menuBar} />
      </button>

      <nav
        id="site-nav"
        className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={handleNavClick}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
