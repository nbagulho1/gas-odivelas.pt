import { BiLogoFacebook } from "react-icons/bi";

export default function Rodape() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-2 px-4 md:px-8 justify-between">
        <div>
          <p>{new Date().getFullYear()} Filipe Lopes - Unipessoal, Lda.</p>
          <p>SANTO ANTÓNIO DOS CAVALEIROS</p>
          <p>Nr. Contribuinte: PT - 514 486 368</p>
        </div>
        <div>
          <p>Telefone: +351 962 021 311</p>
        </div>
      </div>
    </footer>
  );
}
