import styles from "./shared.module.css";

export default function WebsitePreview() {
  return (
    <div className={styles.sitePreview} aria-label="Example modern contractor website preview">
      <div className={styles.previewTopbar}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.previewHero}>
        <p>904 Coastal Pressure Washing</p>
        <h2>Driveways, siding, and patios cleaned this week.</h2>
        <button>Request a free quote</button>
      </div>
      <div className={styles.previewStats}>
        <div>
          <strong>4.9</strong>
          <span>Google rating</span>
        </div>
        <div>
          <strong>24hr</strong>
          <span>quote response</span>
        </div>
        <div>
          <strong>JAX</strong>
          <span>service area</span>
        </div>
      </div>
    </div>
  );
}
