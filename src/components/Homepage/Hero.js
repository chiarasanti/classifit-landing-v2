import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="text-center bg-indigo-600 text-white">
        <div className="max-w-[1110px] mx-auto">
          <section>
            <div className="lg:w-[70%] mx-auto">
              <h1 className="font-semibold lg:text-7xl mt-6">
                Un modo migliore di gestire il tuo studio
              </h1>
              <div className="my-8" />
              <p className="font-light text-white/60">
                Gestisci lezioni, pacchetti, clienti e potenzia la tua presenza
                online - Tutto con la stessa piattaforma
              </p>
              <div className="py-6" />
              <p className="text-white font-light text-sm">
                *Possiamo gestire solo cinque istruttori al mese.{" "}
                <strong>Sarai tu il prossimo?</strong>
              </p>
              <div className="py-3" />
              <Link
                href="https://calendly.com/classifit/presentazione-classifit"
                target="_blank"
                className="button inline-block"
              >
                <div className="flex gap-2 hover:gap-4 transition-all duration-200 ease-in-out">
                  <span className="text-black text-base">
                    Prenota una chiamata
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <Image
              src="/mockup-hero.png"
              width="1920"
              height="1080"
              className="w-full mt-24"
            ></Image>
          </section>
        </div>
      </div>
    </>
  );
}
