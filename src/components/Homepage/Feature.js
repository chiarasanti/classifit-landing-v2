import Image from "next/image";

export default function Feature() {
  return (
    <section className="bg-indigo-50">
      {/* Feature 1 */}
      <div className="lg:flex justify-center items-start relative w-full gap-44">
        <div className="h-screen w-1/2 sticky top-0 items-center justify-center hidden lg:flex">
          <div>
            <h2 className="font-bold">
              Il tuo sito web <span>pubblico</span>, su misura per te
            </h2>
            <div className="py-2" />
            <p className="leading-normal">
              Ti offriamo un sito web moderno, bello e completamente
              personalizzabile, pronto all'uso per te. Puoi modificarlo e
              aggiornarlo in tempo reale, e sarà online in pochi secondi.
              Attraverso questo sito, i tuoi clienti potranno scoprire chi sei e
              iscriversi alle tue lezioni. Non sei soddisfatto del template del
              tuo sito web? Contattaci e otterrai un design personalizzato su
              misura, creato appositamente per te.
            </p>
          </div>
        </div>
        <div className="h-full lg:w-1/2 flex flex-col static justify-end items-start lg:py-[15vw] gap-48">
          <Image
            src="/site-1.svg"
            width="1920"
            height="1080"
            className="w-full mx-auto"
          />
          <Image
            src="/site-2.svg"
            width="1920"
            height="1080"
            className="w-full mx-auto"
          />
        </div>
      </div>
      {/* Feature 2 */}
      <div className="lg:flex justify-center items-start relative w-full gap-44">
        <div className="h-full lg:w-1/2 flex flex-col static justify-end items-start lg:py-[15vw] gap-48">
        <Image
            src="/platform-1.svg"
            width="1920"
            height="1080"
            className="w-full mx-auto"
          />
          <Image
            src="/platform-2.svg"
            width="1920"
            height="1080"
            className="w-full mx-auto"
          />
        </div>
        <div className="h-screen w-1/2 sticky top-0 items-center justify-center hidden lg:flex">
          <div>
            <h2 className="font-bold">
              Una <span>piattaforma di gestione</span>, tutto in un unico posto
            </h2>
            <div className="py-2" />
            <p className="leading-normal">
              Gestisci le tue lezioni tramite una comoda vista a calendario. La
              piattaforma di permette di tenere traccia degli iscritti alle
              lezioni, dei pacchetti e di tutti gli iscritti al tuo sito web.
              Non devi affidarti alla memoria o a carta e penna: trova subito
              tutte le informazioni che cerchi, in qualunque momento, in un
              sistema consistente e strutturato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
