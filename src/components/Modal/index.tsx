import React from "react";
import { Container } from "./style";
import ImgClose from "./../../assets/close.svg";
import ReactModal from "react-modal";

interface Props {
  Open: boolean;
  RequestClose: () => void;
}

export function Modal({ Open, RequestClose }: Props) {
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
          <img src={ImgClose} alt="Fechar Modal" />
        </button>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />
        <button className="submit" type="submit">
          Cadastrar
        </button>
      </Container>
    </ReactModal>
  );
}
