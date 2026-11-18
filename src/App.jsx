import Header from "./components/Header";
import Corpo from "./components/Corpo";
import Rodape from "./components/Rodape";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Corpo />
      <Rodape />
    </main>
  );
}
