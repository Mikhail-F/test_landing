import styles from "./HelpClient.module.sass";
import { HelpClientItem } from "./helpClientItem/HelpClientItem";
import block_1 from "../../../../assets/images/block_1.png";
import block_2 from "../../../../assets/images/block_2.png";
import block_3 from "../../../../assets/images/block_3.png";

export function HelpClient() {
  return (
    <div className={styles.help_client}>
      <div className={styles.help_client_inner}>
      <div className={styles.column_left}>
        <h3 className={styles.description}>
          What we do to help
          <br />
          our client grow in
          <br />
          digital era,
        </h3>
        <div className={styles.block_wrapper}>
          <HelpClientItem
            img={block_2}
            title={"Make Your business To Be Better Famous In Internet"}
            subtitle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          />
        </div>
      </div>
      <div>
        <HelpClientItem
          img={block_3}
          isImgOutBlock={true}
          title={"Bring Technology To Your Comfrotable Home"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
        <HelpClientItem
          img={block_1}
          title={"Build Your Digital Product That Suitable For Your Need"}
          subtitle={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        />
      </div>
    </div>
    </div>
  );
}
