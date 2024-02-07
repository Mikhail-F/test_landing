import { useState } from "react";
import { ButtonCustom } from "../../../../widgets/ButtonCustom";
import styles from "./ContactUsBlockRight.module.sass";
import Modal from "react-modal";

export function ContactUsBlockRight() {
  const [showModal, setShowModal] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className={styles.block__right_inner}>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Форма отправлена</h2>
        <button
          onClick={() => setShowModal(false)}
          style={{
            marginTop: "20px",
            fontSize: "16px",
            background: "$back-btn-color",
            boxShadow: "5px 10px 20px rgba(53, 110, 173, 0.2)",
            borderRadius: "10px",
            outline: "none",
            border: "none",
            height: "56px",
            padding: " 15px 48px",
            color: "$white",
            cursor: " pointer",
            minWidth: "165px",
          }}
        >
          Закрыть
        </button>
      </Modal>
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
        onClick={() => setShowModal(true)}
        style={styles.contact__btn}
      />
    </div>
  );
}
