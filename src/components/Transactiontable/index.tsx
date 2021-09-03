import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de web</td>
            <td>R$1200</td>
            <td>Desenvol</td>
            <td>20/23/1233</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web</td>
            <td>R$1200</td>
            <td>Desenvol</td>
            <td>20/23/1233</td>
          </tr>
          <tr>
            <td>Desenvolvimento de web</td>
            <td>R$1200</td>
            <td>Desenvol</td>
            <td>20/23/1233</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
