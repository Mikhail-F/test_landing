import { Route, Routes } from "react-router-dom";
import styles from "./App.module.sass";
import { HomePage } from "./components/pages/homePage/HomePage";
import { ContactUsPage } from "./components/pages/contactUsPage/ContactUsPage";

function App() {
  return (
    <div className={styles.App}>
      <Routes location={"/test_landing"}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
