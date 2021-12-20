import { useState } from "react";
import { Header } from "./components/Header";
import { ModalContainer } from "./components/Modal/style";
import { Modal } from "./components/Modal";
import { GlobalStyle } from "./Global/global";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Modal
        onClick={handleCloseModal}
        RequestClose={handleCloseModal}
        Open={openModal}
      />
      <Header onClick={handleOpenModal} />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
