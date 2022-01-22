import { useContext} from "react";
import { TransactionsContext } from "../TransactionsContext/TransactionsProvider";
import { Container } from "./style";

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);

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