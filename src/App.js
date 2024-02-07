import { Route, Routes } from "react-router-dom";
import styles from "./App.module.sass";
import { HomePage } from "./components/pages/homePage/HomePage";
import { ContactUsPage } from "./components/pages/contactUsPage/ContactUsPage";
import { ModalSuccesSendForm } from "@commons/modal/ModalSuccesSendForm";
import { useMainState } from "@state/state";

function App() {
  const isShowModal = useMainState((state) => state.isShowModal);
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
      {isShowModal ? <ModalSuccesSendForm /> : null}
    </div>
  );
}

export default App;
