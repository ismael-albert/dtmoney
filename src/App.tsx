import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Globalstyles } from "./styles/global";
export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Globalstyles />
    </>
  );
}
