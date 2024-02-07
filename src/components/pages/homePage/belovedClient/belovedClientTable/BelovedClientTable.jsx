import styles from "./BelovedClientTable.module.sass";
import { useNavigate } from "react-router-dom";

export function BelovedClientTable() {
  const navigate = useNavigate();

  return (
    <div className={styles.clients_table}>
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <div key={el} className={styles.block}>
          LOGO CLIENT {el}
        </div>
      ))}
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
