import { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import styles from "./ModalSuccesSendForm.module.sass";
import { ButtonCustom } from "@widgets/ButtonCustom";
import { useMainState } from "@state/state";

export function ModalSuccesSendForm() {
  const changeShowModal = useMainState((state) => state.changeShowModal);

  useEffect(() => {
    disableBodyScroll(true);
    return () => {
      enableBodyScroll(true);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner}>
        <h2>Сообщение отправлено!</h2>
        <ButtonCustom
          title={"Закрыть"}
          onClick={changeShowModal}
          style={styles.close__btn}
        />
      </div>
    </div>
  );
}
