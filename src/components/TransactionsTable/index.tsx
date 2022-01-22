import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Props {
  id: number;
  title: string;
  selectTypeButtonDeposit: "deposit" | "withdraw";
  value: string;
  category: string;
  date: Date;
}

export function TransactionsTable({
  id,
  title,
  selectTypeButtonDeposit,
  value,
  category,
  date,
}: Props) {
  const [addTransactions, setAddTransactions] = useState<Props[]>([]);

  useEffect(() => {
    api.get("/transactions")
    .then((response) => setAddTransactions(response.data.addTransactions));
  }, []);
  return (
    <>
      {addTransactions.map(transaction => {
        return(
          <Container selectTypeButtonDeposit={transaction.selectTypeButtonDeposit} key={transaction.id}>
            <tr>
              <td className="title">{transaction.title}</td>
              <td className="price">{transaction.value}</td>  
              <td className="category">{transaction.category}</td>
              <td className="date">{transaction.date}</td> 
            </tr>
          </Container>
        );
      })}
    </>
  );
}