import Cabecalho from "./components/Cabecalho0";
import Inicio from "./components/Inicio";
import Produtos from "./components/Produtos";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Inicio />
        <Produtos />
      </main>
      <Rodape />
    </>
  );
}
