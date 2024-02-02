import { useNavigate } from "react-router-dom";
import illustrationHeader from "../../../../../assets/images/illustration.png";
import { ButtonCustom } from "../../../../hoc/ButtonCustom";
import styles from "./HeaderBlock.module.sass";

export function HeaderBlock() {
  const navigate = useNavigate()
  return (
    <div className={styles.block}>
      <div className={styles.left_block}>
        <p className={styles.left_block_title}>
          New Automation Tool for Your Home
        </p>
        <p className={styles.left_block_subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <ButtonCustom
          style={styles.left_block_btn}
          title={"See Our Project"}
          onClick={() => {navigate("/contactUs")}}
        />
      </div>
      <img
        className={styles.right_block}
        src={illustrationHeader}
        alt="Иллюстрация"
      />
    </div>
  );
}
