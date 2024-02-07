import { FooterColumnItems } from "./footerColumnItems/FooterColumnItems";
import { FooterContacts } from "./footerContacts/FooterContacts";
import styles from "./MainFooterBlock.module.sass";

export function MainFooterBlock() {
  const footerRightRowItemsData = [
    {
      title: "About US",
      items: ["About", "What We Do", "Project", "How It Work With Us"],
    },
    {
      title: "Follow US",
      items: ["Instagram", "Facebook", "LinkedIn", "Youtube"],
    },
  ];

  return (
    <div className={styles.main__block}>
      <div className={styles.main__inner}>
        <FooterContacts />
        {footerRightRowItemsData.map((el) => (
          <FooterColumnItems key={el.title} title={el.title} items={el.items} />
        ))}
      </div>
      <p className={styles.copyright}>2019 © Afrianska. All rights reserved.</p>
    </div>
  );
}
