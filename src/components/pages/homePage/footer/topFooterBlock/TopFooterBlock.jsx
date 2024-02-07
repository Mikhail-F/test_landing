import { ButtonCustom } from "../../../../widgets/ButtonCustom"
import styles from "./TopFooterBlock.module.sass";

export function TopFooterBlock() {
  return (
    <div className={styles.top__block}>
      <div className={styles.top__inner}>
        <p className={styles.top__title}>Intersted to woek with our team?</p>
        <p className={styles.top__subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <ButtonCustom
        style={styles.talk__block_btn}
        title={"Let’s Talk"}
        onClick={() => {}}
      />
    </div>
  );
}
