import income from "./../../assets/income.svg";
import outcome from "./../../assets/outcome.svg";
import total from "./../../assets/total.svg";
import { Container, Content } from "./style";
import {useContext, useState} from 'react';
import { TransactionsContext } from "../TransactionsContext/TransactionsProvider";

interface Props {
  type: "total" | "others";
}

export function CardsTransactions() {
  const {transactions} = useContext(TransactionsContext);
  const totalDeposit = transactions.reduce((acc, transaction) => {
    if (transaction.selectTypeButtonDeposit === 'deposit'){
      return acc + transaction.value; 
    }
    return acc;
  }, 0);
  const totalWithdraw = transactions.reduce((acc, transaction) => {
    if (transaction.selectTypeButtonDeposit === 'withdraw'){
      return acc + transaction.value; 
    }
    return acc;
  }, 0);
  const totalValues = totalDeposit - totalWithdraw;
  return (
    <Container>
      <Content type="others">
        <header>
          <h1>Entradas</h1>
          <img src={income} alt="Cards Transactions" />
        </header>
        <strong>{new Intl.NumberFormat(
              'pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }
            ).format(totalDeposit)}</strong>
      </Content>
      <Content type="others">
        <header>
          <h1>Saídas</h1>
          <img src={outcome} alt="Cards Transactions" />
        </header>
        <strong>{"- " + new Intl.NumberFormat(
              'pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }
            ).format(totalWithdraw)}</strong>
      </Content>
      <Content type="total">
        <header>
          <h1>Total</h1>
          <img src={total} alt="Cards Transactions" />
        </header>
        <strong>{new Intl.NumberFormat(
              'pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }
            ).format(totalValues)}</strong>
      </Content>
    </Container>
  );
}
