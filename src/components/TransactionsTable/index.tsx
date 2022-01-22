import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Props {
  id: number;
  title: string;
  selectTypeButtonDeposit: "deposit" | "withdraw";
  value: string;
  category: string;
  date: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Props[]>([]);

  useEffect(() => {
    api.get("/transactions")
    .then((response) => setTransactions(response.data.transactions));
  }, []);
  return (
    <>
      {transactions.map(transaction => (
          <Container selectTypeButtonDeposit={transaction.selectTypeButtonDeposit} key={transaction.id}>  
            <td className="title">{transaction.title}</td>
            <td className="price">{transaction.value}</td>  
            <td className="category">{transaction.category}</td>
            <td className="date">{transaction.date}</td> 
          </Container>
      ))}
    </>
  );
}