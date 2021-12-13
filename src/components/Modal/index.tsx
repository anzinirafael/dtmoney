import React from "react";
import { Container } from "./style";
import income from './../../assets/income.svg';
import outcome from './../../assets/outcome.svg';
import close from './../../assets/close.svg';

export function Modal() {
  return (
    <Container>
      <button className="close"> <img src={close} alt="Icon close"/> </button>  
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
      <button>Cadastrar</button>
    </Container>
  );
}
