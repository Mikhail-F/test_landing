import styles from "./ContactUs.module.sass";
import contact_us from "../../../../assets/images/contact_us.png";
import { ContactUsBlockLeft } from "./contactUsBlockLeft/ContactUsBlockLeft";
import phoneImg from "../../../../assets/images/ic_phone.png";
import { ContactUsBlockRight } from "./contactUsBlockRight/ContactUsBlockRight";

export function ContactUs() {
  return (
    <div className={styles.main}>
      <div className={styles.main__contact_block}>
        <div className={styles.contact__left}>
          <img src={contact_us} className={styles.contact__us_img} />
          <ContactUsBlockLeft
            title={"ADDRESS"}
            items={[
              {
                subtitle:
                  "Id convallis placerat sit sed duis id amet volutpat quam a, pharetra.",
              },
            ]}
          />
          <ContactUsBlockLeft
            title={"PHONE"}
            items={[
              {
                img: phoneImg,
                subtitle: "+62-812-7313-4321",
              },
              {
                img: phoneImg,
                subtitle: "+62-817-000-1234",
              },
            ]}
          />
          <ContactUsBlockLeft
            title={"ONLINE SERVICE"}
            items={[
              {
                img: phoneImg,
                subtitle: "www.afrianska.com",
              },
              {
                img: phoneImg,
                subtitle: "hello.afrian@gmail.com",
              },
            ]}
          />
        </div>
        <div className={styles.contact__right}>
          <ContactUsBlockRight/>
        </div>
      </div>
    </div>
  );
}
