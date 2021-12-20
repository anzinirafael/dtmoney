import { CardsTransactions } from "../../components/CardsTransactions";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Container, Cards, HeaderTransactionsTable } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Cards>
        <CardsTransactions
          title="Entradas"
          values="R$ 17.400,00"
          icon="income"
          type="others"
        />
        <CardsTransactions
          title="Saidas"
          values="R$ 1.259,00"
          icon="outcome"
          type="others"
        />
        <CardsTransactions
          title="Total"
          values="R$ 16.141,00"
          icon="total"
          type="total"
        />
      </Cards>
      <HeaderTransactionsTable>
        <td>Título</td>
        <td>Preço</td>
        <td>Categoria</td>
        <td>Data</td>
      </HeaderTransactionsTable>
      <TransactionsTable
        title="Desenvolvimento de site"
        price="R$ 12.000,00"
        category="Venda"
        date="13/04/2021"
        type="up"
      />
      <TransactionsTable
        title="Hamburguer"
        price="- R$ 59,00"
        category="Alimentação"
        date="10/04/2021"
        type="down"
      />
      <TransactionsTable
        title="Aluguel do apartamento"
        price="- R$ 1.200,00"
        category="Casa"
        date="27/03/2021"
        type="down"
      />
      <TransactionsTable
        title="Computador"
        price="R$ 5.400,00"
        category="Venda"
        date="15/03/2021"
        type="up"
      />
    </Container>
  );
}
