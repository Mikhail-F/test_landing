import styles from "./ContactUsBanner.module.sass";

export function ContactUsBanner() {
  return (
    <header className={styles.header}>
      <p className={styles.title}>Contact Us</p>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
    </header>
  );
}
