export default function Header() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <img
        src="https://unsplash.com"
        alt="Escritório moderno e luminoso"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Sobreposição Escura (Overlay) para melhorar o contraste do texto */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo (Texto e Botões) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Transforma as tuas ideias em realidade digital
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
          Criamos soluções rápidas, modernas e adaptadas a qualquer ecrã para
          impulsionar o teu negócio online.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#comecar"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Começar Agora
          </a>
          <a
            href="#saber-mais"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/30 transition duration-300"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
}
