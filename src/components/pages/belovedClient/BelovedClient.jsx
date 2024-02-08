import { Footer } from "../footer/Footer";
import styles from "./BelovedClient.module.sass";
import { BelovedClientTable } from "./belovedClientTable/BelovedClientTable";

export function BelovedClient() {
  return (
    <div className={styles.beloved_main}>
      <div className={styles.beloved_inner}>
        <div className={styles.beloved_top}>
          <p className={styles.top_title}>Our Beloved Client</p>
          <p className={styles.top_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <BelovedClientTable />
      </div>
      <Footer/>
    </div>
  );
}
