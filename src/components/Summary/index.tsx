import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>entradas</p>
          <img src={incomeImg} alt="" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>saidas</p>
          <img src={outcomeImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  );
}
