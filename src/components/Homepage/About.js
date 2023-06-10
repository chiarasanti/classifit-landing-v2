import Image from "next/image";

export default function About() {
  return (
    <section className="bg-indigo-600 text-white text-center rounded-t-[40px] relative pb-56">
      <Image src="/signup.svg" width="1920" height="1080" className="w-52 absolute left-20 top-20" />
      <div className="w-[80%] mx-auto">
        <p className="font-bold text-white">Perché Classifit?</p>
        <div className="py-8" />
        <h1>
          Classifit può rivoluzionare
          il tuo studio: genera per te un sito web tramite cui i tuoi clienti
          possono iscriversi alle lezioni, e ti fornisce una piattaforma di
          amministrazione per gestire lezioni, pacchetti e tutti i tuoi
          iscritti.
        </h1>
      </div>
      <Image src="/user.svg" width="1080" height="1080" className="w-56 absolute right-20 bottom-20" />
    </section>
  );
}
