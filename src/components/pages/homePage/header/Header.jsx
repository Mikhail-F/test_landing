import styles from "./Header.module.sass";
import { HeaderBlock } from "./headerBlock/HeaderBlock";
import { HeaderNav } from "@commons/headerNav/HeaderNav";

export function Header() {
  return (
    <header className={styles.header}>
       <HeaderNav/>
       <HeaderBlock/>
    </header>
  );
}
