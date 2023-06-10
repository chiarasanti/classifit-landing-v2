export default function Roadmap() {
  return (
    <section className="bg-indigo-600 text-center text-white">
      <p className="font-bold text-white">Tabella di marcia</p>
      <div className="py-6" />
      <h1 className="w-8/12 mx-auto font-bold">
        Creiamo insieme il prodotto migliore per il tuo studio
      </h1>
      <div className="py-10" />
      <div className="relative py-8">
        <div className="w-[1px] h-full absolute top-0 bottom-0 left-1/2 bg-white/50" />
        <div className="flex justify-center items-center">
          <div
            className="badge badge-right line-through"
            style={{
              transform: "translate(calc(50% - 25px))",
            }}
          >
            Creazione del prodotto di base
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div
            className="badge badge-left line-through"
            style={{
              transform: "translate(calc(-50% + 25px))",
            }}
          >
            Creazione sito di presentazione
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div
            className="badge badge-right"
            style={{
              transform: "translate(calc(50% - 25px))",
            }}
          >
            Uscita della demo gratuita
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div
            className="badge badge-left"
            style={{
              transform: "translate(calc(-50% + 25px))",
            }}
          >
            Raccolta dei tuoi feedback
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div
            className="badge badge-right"
            style={{
              transform: "translate(calc(50% - 25px))",
            }}
          >
            Implementazione nuove funzionalità e migliorie
          </div>
        </div>
        <div className="mt-12 flex justify-center items-center">
          <div
            className="badge badge-left"
            style={{
              transform: "translate(calc(-50% + 25px))",
            }}
          >
            <span className="mr-2">&#128640;</span> Lancio del prodotto finale!
          </div>
        </div>
      </div>
    </section>
  );
}
