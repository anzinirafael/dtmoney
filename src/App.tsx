import { useState } from "react";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { TransactionsContext, TrasactionsProvider} from "./components/TransactionsContext/TransactionsProvider";
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
    <TrasactionsProvider>
      <Modal
        RequestClose={handleCloseModal}
        Open={openModal}
      />
      <Header onClick={handleOpenModal} />
      <Dashboard />
      <GlobalStyle />
    </TrasactionsProvider>
  );
}
