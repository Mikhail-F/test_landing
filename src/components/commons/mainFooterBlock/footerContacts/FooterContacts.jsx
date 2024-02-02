import styles from "./FooterContacts.module.sass";

export function FooterContacts() {
  return (
    <div className={styles.block__item}>
      <h2 className={styles.title_block_main}>
        <div className={styles.nav_circle}>
          <span className={styles.circle_inner_text}>A</span>
        </div>
        Afrianska
      </h2>
      <div className={styles.block__contact}>
        <p className={styles.block__contact_left}>A.</p>
        <p className={styles.block__contact_right}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className={styles.block__contact}>
        <p className={styles.block__contact_left}>T.</p>
        <p className={styles.block__contact_right}>+62-812-7313-4321</p>
      </div>
      <div className={styles.block__contact}>
        <p className={styles.block__contact_left}>E.</p>
        <p className={styles.block__contact_right}>hello.afrian@gmail.com</p>
      </div>
    </div>
  );
}
