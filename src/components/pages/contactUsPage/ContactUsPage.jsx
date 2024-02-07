import { MainFooterBlock } from "@commons/mainFooterBlock/MainFooterBlock";
import { HeaderNav } from "@commons/headerNav/HeaderNav";
import styles from "./ContactUsPage.module.sass";
import { ContactUsBanner } from "./contactUsBanner/ContactUsBanner";
import { ContactUs } from "./contactUs/ContactUs";
import { YMaps, Map } from '@pbe/react-yandex-maps';

export function ContactUsPage() {
  return (
    <>
      <HeaderNav />
      <ContactUsBanner />
      <ContactUs />
      <YMaps>
        <div className={styles.map}>
          <Map className={styles.kkk} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
      </YMaps>
      <footer className={styles.footer}>
        <MainFooterBlock />
      </footer>
    </>
  );
}
