import { Route, Routes } from "react-router-dom";
import styles from "./App.module.sass";
import { HomePage } from "./components/pages/HomePage";
import { ModalForm } from "@commons/modal/ModalForm";
import { useMainState } from "@state/state";

function App() {
  const isShowModal = useMainState((state) => state.isShowModal);
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {isShowModal ? <ModalForm /> : null}
    </div>
  );
}

export default App;
