import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="lg:flex">
      <Image
        src="/about-us.png"
        className="lg:w-1/2 w-full"
        width="640"
        height="823"
        alt="Classifit - Hai bisogno di aiuto?"
      />
      <div className="lg:w-1/2 bg-indigo-50 flex items-center justify-center lg:px-14">
        <div className="container">
          <section>
            <h1 className="font-semibold">È un piacere conoscerti</h1>
            <div className="py-4" />
            <p>
              Siamo Federico e Chiara. Uno sviluppatore e una designer di
              Brescia che si incontrano e - quasi inevitabilmente - decidono di
              creare qualcosa insieme. Forti della nostra esperienza lavorativa
              nel settore, il nostro obiettivo principale è portare valore,
              competenza, qualità e semplicità in ogni studio di pilates con cui
              abbiamo l’onore di collaborare.
            </p>
            <div className="py-9" />
            <Link href="https://www.instagram.com/app.classi.fit/" target="_blank" className="text-indigo-600">
              Instagram
            </Link>
            <br />
            <div className="py-2" />
            <Link href="https://www.facebook.com/profile.php?id=61551922481738"  target="_blank" className="text-indigo-600">
              Facebook
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
