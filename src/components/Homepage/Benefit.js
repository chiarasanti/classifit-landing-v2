import Image from "next/image";

export default function Benefit() {
  return (
    <section className="bg-[url('/background.svg')] bg-center bg-cover">
      <h1 className="text-center font-bold w-8/12 mx-auto">
        Il tuo studio, <span>senza limiti.</span> Ecco cosa puoi ottenere con
        Classifit
      </h1>
      <div className="py-12" />
      <div className="md:grid md:grid-cols-2 lg:w-10/12 mx-auto gap-x-24 gap-y-32">
        <div>
          <Image
            key="clock-icon"
            src="/clock.svg"
            width="1080"
            height="1080"
            alt="Clock Icon"
            className="w-12"
            placeholder="empty"
          />
          <div className="py-6" />
          <p className="font-bold text-black">Risparmia tempo di gestione</p>
          <div className="my-2" />
          <p>
            Concentrati su ciò che è davvero importante: le tue lezioni e la
            soddisfazione dei tuoi clienti.
          </p>
        </div>
        <div>
          <Image
            key="list-icon"
            src="/list.svg"
            width="1080"
            height="1080"
            alt="List Icon"
            className="w-12"
            placeholder="empty"
          />
          <div className="py-6" />
          <p className="font-bold text-black">
            Non perdere informazioni importanti
          </p>
          <div className="my-2" />
          <p>
            Trova la lista di tutti i pacchetti, tutte le lezioni e tutti i
            clienti - Tutto in un unico posto.
          </p>
        </div>
        <div>
          <Image
            key="heart-icon"
            src="/heart.svg"
            width="10800"
            height="1080"
            alt="Heart Icon"
            className="w-12"
            placeholder="empty"
          />
          <div className="py-6" />
          <p className="font-bold text-black">Offri un servizio migliore</p>
          <div className="my-2" />
          <p>
            I tuoi clienti potranno iscriversi alle lezioni in qualunque momento
            e in autonomia - Un servizio flessibile e senza stress.
          </p>
        </div>
        <div>
          <Image
            key="rocket-icon"
            src="/rocket.svg"
            width="1080"
            height="1080"
            alt="Rocket Icon"
            className="w-12"
            placeholder="empty"
          />
          <div className="py-6" />
          <p className="font-bold text-black">Presenza online - Potenziata!</p>
          <div className="my-2" />
          <p>
            Consolida la tua presenza online e la tua identità con i nostri
            servizi di Web Development, Graphic Design e Social Media Marketing
          </p>
        </div>
      </div>
    </section>
  );
}
