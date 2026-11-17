import GasGarrafa from "../assets/gas-garrafa.png";
export default function Header() {
  return (
    <section className="relative w-full h-3/12 flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <img
        src={GasGarrafa}
        alt="Garrafa Galp Gás"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
      {/* Sobreposição Escura (Overlay) para melhorar o contraste do texto */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conteúdo (Texto e Botões) */}
      <div className="relative z-10 max-w-6xl mx-auto sm:p-8 p-16 text-center text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-6">
          Gás ao domicílio em Odivelas
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl sm:p-8 p-16 text-gray-200 mb-8 max-w-2xl mx-auto font-light">
          Receba a sua garrafa de gás, com toda a comodidade, na sua residência.
          Aceitamos Multibanco!
        </p>
      </div>
    </section>
  );
}
