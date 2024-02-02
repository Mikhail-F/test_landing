import styles from "./HeaderNav.module.sass";

export function HeaderNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_circle}>
        <span className={styles.circle_inner_text}>A</span>
      </div>
      <div className={styles.burger_menu}>
        <span className={styles.burger_item}></span>
        <span className={styles.burger_item}></span>
        <span className={styles.burger_item}></span>
      </div>
    </div>
  );
}
