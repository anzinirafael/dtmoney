import React,{ FormEvent, useState } from "react";
import { Container, CheckBoxButtons, RadioBox, ContainerForms } from "./style";
import income from "./../../assets/income.svg";
import outcome from "./../../assets/outcome.svg";
import ImgClose from "./../../assets/close.svg";
import ReactModal from "react-modal";
import { api } from "../../services/api";


interface Props {
  isOpen: boolean;
  RequestClose: () => void;
}

export function Modal({ isOpen, RequestClose}: Props) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [selectTypeButtonDeposit, setSelectTypeButtonDeposit] =
    useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const id = parseInt("10000000000000000", Math.random() * 10);
    const data = {
      id,
      title,
      value,
      category,
      selectTypeButtonDeposit,
    };
    console.log(data);
    api.post('/transactions', data)
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={RequestClose}
      overlayClassName="react-overlay-modal"
      className="react-modal"
      ariaHideApp={false}
    >
      <Container>
        <button className="close" onClick={RequestClose} type="button">
          <img src={ImgClose} alt="Fechar Modal" />
        </button>
        <ContainerForms onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
          />
          <CheckBoxButtons>
            <RadioBox
              type="button"
              onClick={() => {
                setSelectTypeButtonDeposit("deposit");
              }}
              isActive={selectTypeButtonDeposit === "deposit"}
              activeColor="green"
            >
              <img src={income} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => {
                setSelectTypeButtonDeposit("withdraw");
              }}
              isActive={selectTypeButtonDeposit === "withdraw"}
              activeColor="red"
            >
              <img src={outcome} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </CheckBoxButtons>
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
          <button className="submit" type="submit">
            Cadastrar
          </button>
        </ContainerForms>
      </Container>
    </ReactModal>
  );
}
