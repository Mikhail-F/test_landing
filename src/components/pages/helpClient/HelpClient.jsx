import styles from "./HelpClient.module.sass";
import { HelpClientItem } from "./helpClientItem/HelpClientItem";
import block_1 from "@svg/block_1.svg";
import block_2 from "@svg/block_2.svg";
import block_3 from "@svg/block_3.svg";

export function HelpClient() {
  const helpClientRightBlock = [
    {
      img: block_3,
      isImgOutBlock: true,
      title: "Bring Technology To Your Comfrotable Home",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: block_1,
      isImgOutBlock: false,
      title: "Build Your Digital Product That Suitable For Your Need",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

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
          {helpClientRightBlock.map((el) => (
            <HelpClientItem
              key={el.img}
              img={el.img}
              title={el.title}
              isImgOutBlock={el.isImgOutBlock}
              subtitle={el.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
