import styles from "./FooterColumnItems.module.sass";

export function FooterColumnItems({ title, items }) {
  return (
    <div key={title} className={styles.contacts__block}>
      <h3 className={styles.title}>{title}</h3>
      {items.map((el) => contactItem(el))}
    </div>
  );

  function contactItem(text) {
    return <a key={text} href={"/"} className={styles.item}>{text}</a>;
  }
}
