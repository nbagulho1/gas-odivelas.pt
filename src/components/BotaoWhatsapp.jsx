import { BiLogoWhatsapp } from "react-icons/bi";

export default function BotaoWhatsApp({ telefone, mensagem }) {
  // Remove tudo o que não for número (espaços, traços, sinais de +)
  const numeroLimpo = telefone.replace(/\D/g, "");

  // Codifica a mensagem para formato seguro de URL
  const textoCodificado = encodeURIComponent(mensagem);

  const urlWhatsApp = `https://wa.me/${numeroLimpo}?text=${textoCodificado}`;

  return (
    <a
      href={urlWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-lg shadow-lg transition duration-300"
    >
      <BiLogoWhatsapp className="inline-block mr-2" />
      Pedir Gás no WhatsApp
    </a>
  );
}
