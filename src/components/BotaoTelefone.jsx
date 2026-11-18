import { BiPhone } from "react-icons/bi";

export default function BotaoTelefone({ telefone }) {
  // Remove tudo o que não for número (espaços, traços, sinais de +)
  const numeroLimpo = telefone.replace(/\D/g, "");

  // Codifica a mensagem para formato seguro de URL
  const urlTelefone = `tel:${numeroLimpo}`;

  return (
    <a
      href={urlTelefone}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
    >
      <BiPhone className="inline-block mr-2" />
      Pedir Gás por Telefone
    </a>
  );
}
