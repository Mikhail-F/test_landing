import styles from "./Footer.module.sass";
import { MainFooterBlock } from "../../../commons/mainFooterBlock/MainFooterBlock";
import { TopFooterBlock } from "./topFooterBlock/TopFooterBlock";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <TopFooterBlock />
      <span className={styles.divider} />
      <MainFooterBlock />
    </footer>
  );
}
