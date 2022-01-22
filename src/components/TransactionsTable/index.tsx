import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";


interface Props {
  id: number;
  title: string;
  selectTypeButtonDeposit: "deposit" | "withdraw";
  value: number;
  category: string;
  date: number;
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
            <td className="price">{new Intl.NumberFormat(
              'pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }
            ).format(transaction.value)}</td>  
            <td className="category">{transaction.category}</td>
            <td className="date">{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}</td> 
          </Container>
      ))}
    </>
  );
}