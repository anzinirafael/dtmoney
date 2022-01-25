import { CardsTransactions } from "../../components/CardsTransactions";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Container, Cards} from "./style";

export function Dashboard() {
  return (
    <Container>
      <CardsTransactions />
      <TransactionsTable />
    </Container>
  );
}
