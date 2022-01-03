import React, { useState } from "react";
import { Container, CheckBoxButtons, RadioBox } from "./style";
import income from "./../../assets/income.svg";
import outcome from "./../../assets/outcome.svg";
import ImgClose from "./../../assets/close.svg";
import ReactModal from "react-modal";

interface Props {
  Open: boolean;
  RequestClose: () => void;
}

export function Modal({ Open, RequestClose }: Props) {
  const [selectTypeButtonDeposit, setSelectTypeButtonDeposit] = useState('deposit');

  return (
    <ReactModal
      isOpen={Open}
      onRequestClose={RequestClose}
      overlayClassName="react-overlay-modal"
      className="react-modal"
    >
      <Container>
        <button 
        className="close"
        onClick={RequestClose}
        type="button">
          <img src={ImgClose} alt="Fechar Modal"/>
        </button>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <CheckBoxButtons>
          <RadioBox type="button" 
          onClick={() => { setSelectTypeButtonDeposit('deposit') }}
          isActive={selectTypeButtonDeposit === 'deposit'}
          >
            <img src={income} alt="Entrada" /> 
            <span>Entrada</span>           
          </RadioBox>
          <RadioBox type="button" 
          onClick={() => { setSelectTypeButtonDeposit('withdraw') }}
          isActive={selectTypeButtonDeposit === 'withdraw'}
          >
            <img src={outcome} alt="Saída" /> 
            <span>Saída</span>           
          </RadioBox>
        </CheckBoxButtons>
        <input type="text" placeholder="Categoria" />
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
    </ReactModal>
  );
}
