import Image from "next/image";
import platform1 from "../../../public/platform-1.png";
import platform2 from "../../../public/platform-2.png";
import site1 from "../../../public/site-1.png";
import site2 from "../../../public/site-2.png";

export default function Feature() {
  return (
    <section className="bg-indigo-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Feature 1 */}
        <div className="lg:flex justify-center items-start relative w-full lg:gap-44">
          <div className="lg:h-screen lg:w-1/2 lg:sticky top-0 items-center justify-center lg:flex">
            <div>
              <h2 className="font-bold">
                Il tuo sito web <span>pubblico</span>, su misura per te
              </h2>
              <div className="py-2" />
              <p className="leading-normal">
                Per te viene generato in pochi minuti un sito web moderno, bello
                e completamente personalizzabile. Puoi modificarlo e aggiornarlo
                in tempo reale, e sarà online in pochi secondi. Attraverso
                questo sito, i tuoi clienti potranno scoprire chi sei e
                iscriversi alle tue lezioni. Non sei soddisfatto del template
                del tuo sito web? Contattaci e otterrai un design personalizzato
                su misura, creato appositamente per te.
              </p>
            </div>
          </div>
          <div className="h-full lg:w-1/2 flex flex-col static justify-end items-start lg:py-48 lg:gap-48 gap-16 mt-16 lg:mt-0">
            <Image
              src={site1}
              placeholder="blur"
              priority={true}
              quality={75}
              alt=""
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <Image
              src={site2}
              placeholder="blur"
              priority={true}
              quality={75}
              alt=""
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col lg:flex-row justify-center items-start relative w-full lg:gap-44">
          <div className="lg:h-full lg:w-1/2 flex flex-col static justify-end items-start lg:py-48 lg:gap-48 gap-16 mt-16 lg:mt-0">
            <Image
              src={platform1}
              placeholder="blur"
              priority={true}
              quality={75}
              alt=""
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <Image
              src={platform2}
              placeholder="blur"
              priority={true}
              quality={75}
              alt=""
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:h-screen lg:w-1/2 lg:sticky top-0 items-center justify-center lg:flex order-first lg:order-last mt-24 lg:mt-0">
            <div>
              <h2 className="font-bold">
                Una <span>piattaforma di gestione</span>, tutto in un unico
                posto
              </h2>
              <div className="py-2" />
              <p className="leading-normal">
                Gestisci le tue lezioni tramite una comoda vista a calendario.
                La piattaforma ti permette di tenere traccia degli iscritti alle
                lezioni, dei pacchetti e di tutti gli utenti del tuo sito web.
                Non devi affidarti alla memoria o a carta e penna: trova subito
                le informazioni che cerchi, in qualunque momento, in un sistema
                consistente e strutturato.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
