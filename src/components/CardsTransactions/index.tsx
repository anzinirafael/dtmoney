import React, { TouchEventHandler } from "react";
import income from "./../../assets/income.svg";
import outcome from "./../../assets/outcome.svg";
import total from "./../../assets/total.svg";
import { Container } from "./style";

interface Props {
  title: string;
  values: string;
  icon: "income" | "outcome" | "total";
  type: "total" | "others";
}

export function CardsTransactions({ values, title, icon, type }: Props) {
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
