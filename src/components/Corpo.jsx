import cards from "../../data/cards.json";
export default function Corpo() {
  return (
    <section className="relative w-full h-3/12 flex grow items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto sm:p-8 p-16 text-center text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 border-2 border-amber-500 rounded-lg"
            >
              <h3 className="text-lg min-h-[3rem] font-bold mb-4">
                {card.title}
              </h3>
              <div className="flex p-2 md:p-4 justify-center">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="mb-4 h-24 rounded"
                />
              </div>
              <p className="text-gray-200">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
