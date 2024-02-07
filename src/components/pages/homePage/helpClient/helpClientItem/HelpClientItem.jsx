import styles from "./HelpClientItem.module.sass";
import arrow_right from "../../../../../assets/images/ic_arrow_forward_24px.png";
import { useNavigate } from "react-router-dom";

export function HelpClientItem({
  img,
  isImgOutBlock = false,
  title,
  subtitle,
}) {
  const navigate = useNavigate();

  return (
    <div className={styles.item}>
      <div className={styles.wrap_img}>
        <img
          src={img}
          className={
            isImgOutBlock
              ? styles.class_name_out_block_img
              : styles.class_name_img
          }
        />
      </div>
      <div className={styles.wrapper}>
        <h4 className={styles.content_wrapper_title}>{title}</h4>
        <h5 className={styles.content_wrapper_subtitle}>{subtitle}</h5>
        <button onClick={() => navigate("/")} className={styles.btn}>
          <p className={styles.btn_title}>Learn more </p>
          <img src={arrow_right} />
        </button>
      </div>
    </div>
  );
}
