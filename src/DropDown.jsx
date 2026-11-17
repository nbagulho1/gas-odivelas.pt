import { useState } from "react";

export default function Dropdown() {
  const [aberto, setAberto] = useState(false);

  const opcoes = ["Perfil", "Definições", "Terminar sessão"];

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setAberto(!aberto)}
        aria-expanded={aberto}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Opções
        <span aria-hidden="true">▾</span>
      </button>

      {aberto && (
        <ul className="absolute right-0 z-10 mt-2 w-48 rounded-md border border-gray-200 bg-white py-1 shadow-lg">
          {opcoes.map((opcao) => (
            <li key={opcao}>
              <button
                type="button"
                onClick={() => setAberto(false)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              >
                {opcao}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
