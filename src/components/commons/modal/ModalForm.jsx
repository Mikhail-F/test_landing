import { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./ModalForm.module.sass";
import { useMainState } from "@state/state";
import ContactUsForm from "@widgets/contactUsForm/ContactUsForm";

export function ModalForm() {
  const isSuccessSendContactForm = useMainState(
    (state) => state.isSuccessSendContactForm
  );

  const changeShowModal = useMainState((state) => state.changeShowModal);
  const changeSuccessSendContactForm = useMainState(
    (state) => state.changeSuccessSendContactForm
  );

  useEffect(() => {
    disableBodyScroll(true);
    return () => {
      enableBodyScroll(true);
      changeSuccessSendContactForm(false);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <div className={styles.modal__top}>
          <h2 className={styles.modal__title}>
            {isSuccessSendContactForm ? "Your message successfully sent" : "SEND US MESSAGE"}
          </h2>
          <div
            className={styles.modal__close}
            onClick={() => changeShowModal(false)}
          >
            X
          </div>
        </div>
        {!isSuccessSendContactForm && <ContactUsForm />}
      </div>
    </div>
  );
}
