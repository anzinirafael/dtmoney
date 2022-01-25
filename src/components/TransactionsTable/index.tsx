import { useContext} from "react";
import { TransactionsContext } from "../TransactionsContext/TransactionsProvider";
import { Container, Content, HeaderTransactionsTable } from "./style";

export function TransactionsTable() {
  const {transactions} = useContext(TransactionsContext);

  return (
    <Container>

      <HeaderTransactionsTable>
        <li>Título</li>
        <li>Preço</li>
        <li>Categoria</li>
        <li>Data</li>
      </HeaderTransactionsTable>
      {transactions.map(transaction => (
          <Content selectTypeButtonDeposit={transaction.selectTypeButtonDeposit} key={transaction.id}>  
            <li className="title">{transaction.title}</li>
            <li className="price">{new Intl.NumberFormat(
              'pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }
            ).format(transaction.value)}</li>  
            <li className="category">{transaction.category}</li>
            <li className="date">{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.date))}</li> 
          </Content>
      ))}
    </Container>
  );
}