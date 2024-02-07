import React from "react";
import { useForm } from "react-hook-form";
import { useMainState } from "@state/state";
import styles from "./ContactUsBlockRight.module.sass";
import { ButtonCustom } from "@widgets/ButtonCustom";

export default function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const changeShowModal = useMainState((state) => state.changeShowModal);

  function sendForm(data) {
    changeShowModal();
    reset();
  }

  return (
    <form onSubmit={handleSubmit(sendForm)} className={styles.form__block}>
      <div className={styles.field}>
        <label className={styles.field__title}>Full Name</label>
        <input
          placeholder="Your Name"
          className={styles.field__input}
          {...register("name", { required: true })}
        />
        <p className={styles.input__error_text}>
          {errors.name?.type === "required" && "Your name is required"}
        </p>
      </div>

      <div className={styles.field}>
        <label className={styles.field__title}>Email</label>
        <input
          placeholder="Your Email"
          className={styles.field__input}
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          })}
        />
        <p className={styles.input__error_text}>
          {errors.email?.type === "required" && "Your Email is required"}
          {errors.email?.type === "pattern" && "Entered email is wrong format"}
        </p>
      </div>

      <div className={styles.field}>
        <label className={styles.field__title}>Message</label>
        <textarea
          placeholder="Your Message"
          className={styles.textarea__input}
          {...register("message", { required: true })}
        />
        <p className={styles.input__error_text}>
          {errors.message?.type === "required" && "Your message is required"}
        </p>
      </div>
      <ButtonCustom
        title={"Submit"}
        onClick={() => {}}
        style={styles.contact__btn}
      />
    </form>
  );
}
