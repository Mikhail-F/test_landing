import { FooterColumnItems } from "./footerColumnItems/FooterColumnItems";
import { FooterContacts } from "./footerContacts/FooterContacts";
import styles from "./MainFooterBlock.module.sass";

export function MainFooterBlock() {
  return (
    <div className={styles.main__block}>
      <div className={styles.main__inner}>
        <FooterContacts />
        <FooterColumnItems
          title={"About US"}
          items={["About", "What We Do", "Project", "How It Work With Us"]}
        />
        <FooterColumnItems
          title={"Follow US"}
          items={["Instagram", "Facebook", "LinkedIn", "Youtube"]}
        />
      </div>
      <p className={styles.copyright}>2019 © Afrianska. All rights reserved.</p>
    </div>
  );
}
