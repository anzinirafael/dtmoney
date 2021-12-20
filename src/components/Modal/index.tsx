import React from "react";
import { Container, ModalContainer } from "./style";
import income from './../../assets/income.svg';
import outcome from './../../assets/outcome.svg';
import close from './../../assets/close.svg';

interface Props{  
  onClick: () => void;
  Open: boolean;
  RequestClose: () => void;
}

export function Modal({onClick, Open, RequestClose} : Props) {
  return (
    <ModalContainer isOpen={Open} onRequestClose={RequestClose}>
      <Container>
        <div>
          <button className="close" onClick={onClick}>
            <img src={close} alt="" />
          </button>
        </div>
        <section>
          <h1>Cadastrar transação</h1>
          <input type="text" placeholder="Nome" />
          <br/>
          <input type="text" placeholder="Preço" />
          <div className="buttons">
            <button className="income">
              <img src={income} alt="Icon income" />
              <p>Entrada</p>
            </button>
            <button className="outcome">
              <img src={outcome} alt="Icon outcome" />
              <p>Saída</p>
            </button>
          </div>
          <input type="text" placeholder="Categoria" />
          <br />
          <button className="submit">Cadastrar</button>
        </section>
        </Container>
      </ModalContainer>
  );
}
