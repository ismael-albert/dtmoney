import { Summary } from "../Summary";
import { TransactionsTable } from "../Transactiontable";
import { Container } from "./styles";
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}
