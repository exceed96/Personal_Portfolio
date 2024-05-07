import "./App.css";
import { useEffect } from "react";
import Container from "./components/Util/Container";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ModalContainer from "components/Util/ModalContainer";
import { useModalState } from "store/Modal";

function App() {
  const { modalName } = useModalState();

  useEffect(() => {
    if (modalName !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalName]);

  return (
    <>
      {modalName && <ModalContainer />}
      <Header />
      <Container>
        <Main />
      </Container>
    </>
  );
}

export default App;
