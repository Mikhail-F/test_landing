import { ButtonCustom } from "../../../../hoc/ButtonCustom";
import styles from "./ContactUsBlockRight.module.sass";

export function ContactUsBlockRight() {
  return (
    <div className={styles.block__right_inner}>
      <p className={styles.title}>SEND US MESSAGE</p>
      <div className={styles.field}>
        <label for="fullname" className={styles.field__title}>
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="Your Name"
          className={styles.field__input}
        />
      </div>
      <div className={styles.field}>
        <label for="email" className={styles.field__title}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Your Email"
          className={styles.field__input}
        />
      </div>
      <div className={styles.field}>
        <label for="message" className={styles.field__title}>
          Message
        </label>
        <input
          type="textfield"
          id="message"
          placeholder="Your Message"
          className={styles.field__input}
        />
      </div>
      <ButtonCustom
        title={"Submit"}
        onClick={() => {}}
        style={styles.contact__btn}
      />
    </div>
  );
}
