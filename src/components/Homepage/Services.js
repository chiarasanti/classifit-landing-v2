import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-[#222220]">
      <div className="container">
        <h1 className="font-semibold text-white">Cosa possiamo fare per te?</h1>
        <div className="py-9" />
        <div className="lg:flex align-center gap-4">
          <div className="bg-white h-72 md:h-52 lg:h-72 lg:w-1/3 relative p-6 lg:p-12">
            <p className="text-base text-black/60">
              Progettazione e realizzazione di un sito web personalizzato per
              potenziare il tuo brand e la tua presenza online.
            </p>
            <div className="py-2 lg:py-8" />
            <h2 className="font-semibold absolute bottom-12">
              Web development
            </h2>
          </div>
          <div className="bg-white h-72 md:h-52 lg:h-72 lg:w-1/3 relative p-6 lg:p-12 mt-4 lg:mt-0">
            <p className="text-base text-black/60">
              Piattaforma di gestione che ti permette di monitorare con facilità
              lezioni, pacchetti e iscritti. Se integrata al tuo sito consente
              ai clienti di iscriversi alle lezioni.
            </p>
            <div className="py-2 lg:py-8" />
            <h2 className="font-semibold absolute bottom-12">
              Gestionale online
            </h2>
          </div>
          <div className="bg-white h-72 md:h-52 lg:h-72 lg:w-1/3 relative p-6 lg:p-12 mt-4 lg:mt-0">
            <p className="text-base text-black/60">
              Supporto 1-on-1 per te e per i tuoi clienti tramite chiamata o
              WhatsApp. Assistenza tecnica per il trasferimento dei tuoi dati al
              nuovo sistema informatico.
            </p>
            <div className="py-2 lg:py-8" />
            <h2 className="font-semibold absolute bottom-12">
              Supporto 24/24h
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
