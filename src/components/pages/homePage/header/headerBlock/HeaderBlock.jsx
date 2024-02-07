import illustrationHeader from "@images/illustration.png";
import styles from "./HeaderBlock.module.sass";

export function HeaderBlock() {
  return (
    <div className={styles.block}>
      <div className={styles.left_block}>
        <h1 className={styles.left_block_title}>
          New Automation Tool for Your Home
        </h1>
        <p className={styles.left_block_subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          tristique vulputate ultrices ut mauris tellus at. Posuere sollicitudin
          odio tellus elit.
        </p>
        <a href="/contactUs" className={styles.left_block_btn}>
          See Our Project
        </a>
      </div>
      <img
        className={styles.right_block}
        src={illustrationHeader}
        alt="Иллюстрация"
      />
    </div>
  );
}
