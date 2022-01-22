import income from "./../../assets/income.svg";
import outcome from "./../../assets/outcome.svg";
import total from "./../../assets/total.svg";
import { Container } from "./style";
import {useContext} from 'react';
import { TransactionsContext } from "../TransactionsContext/TransactionsProvider";

interface Props {
  title: string;
  values: string;
  icon: "income" | "outcome" | "total";
  type: "total" | "others";
}

export function CardsTransactions({ values, title, icon, type }: Props) {
  const transactions = useContext(TransactionsContext);
  console.log(transactions)
  function returnIconCards(icon: string) {
    if (icon === "income") {
      return income;
    } else if (icon === "outcome") {
      return outcome;
    } else if (icon === "total") {
      return total;
    }
  }
  return (
    <Container type={type}>
      <header>
        <h1>{title}</h1>
        <img src={returnIconCards(icon)} alt="Cards Transactions" />
      </header>
      <strong>{values}</strong>
    </Container>
  );
}
