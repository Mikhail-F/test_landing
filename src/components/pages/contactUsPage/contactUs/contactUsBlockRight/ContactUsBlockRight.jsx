import styles from "./ContactUsBlockRight.module.sass";
import Form from "./Form";

export function ContactUsBlockRight() {
  return (
    <div className={styles.block__right_inner}>
      <p className={styles.title}>SEND US MESSAGE</p>
      <Form />
    </div>
  );
}
