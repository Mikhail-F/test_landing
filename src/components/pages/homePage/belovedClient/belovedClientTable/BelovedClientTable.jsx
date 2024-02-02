import styles from "./BelovedClientTable.module.sass";
import { useNavigate } from "react-router-dom";

export function BelovedClientTable() {
  const navigate = useNavigate();

  return (
    <div className={styles.clients_table}>
      <div
        className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}
      >
        LOGO CLIENT 1
      </div>
      <div
        className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}
      >
        LOGO CLIENT 2
      </div>
      <div
        className={`${styles.block} ${styles.brdr_right} ${styles.brdr_bottom}`}
      >
        LOGO CLIENT 3
      </div>
      <div className={`${styles.block} ${styles.brdr_bottom}`}>
        LOGO CLIENT 4
      </div>
      <div className={`${styles.block} ${styles.brdr_right}`}>
        LOGO CLIENT 5
      </div>
      <div className={`${styles.block} ${styles.brdr_right}`}>
        LOGO CLIENT 6
      </div>
      <div className={`${styles.block} ${styles.brdr_right}`}>
        LOGO CLIENT 7
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`${styles.block} ${styles.more_client}`}
      >
        More Client
      </button>
    </div>
  );
}
