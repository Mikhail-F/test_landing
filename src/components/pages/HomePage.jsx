import { BelovedClient } from "./belovedClient/BelovedClient";
import { Header } from "./header/Header";
import { HelpClient } from "./helpClient/HelpClient";

export function HomePage() {
  return (
    <>
      <Header />
      <HelpClient/>
      <BelovedClient/>
    </>
  );
}
