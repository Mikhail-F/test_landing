import styles from "./ContactUsBlockLeft.module.sass";

export function ContactUsBlockLeft({ title, items }) {
  return (
    <div className={styles.contact__block}>
      <p className={styles.title}>{title}</p>
      {items.map((el) => (
        <ContactUsContent item={el} />
      ))}
    </div>
  );
}

function ContactUsContent({ item }) {
  return item.img ? (
    <div className={styles.contact__data}>
      <img
        src={item.img}
        className={styles.contact__img}
        alt="Связаться с нами"
      />
      <p className={styles.subtitle}>{item.subtitle}</p>
    </div>
  ) : (
    <p className={styles.subtitle}>{item.subtitle}</p>
  );
}
