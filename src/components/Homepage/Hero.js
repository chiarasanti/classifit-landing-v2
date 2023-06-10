import { isTopScrolledAtom } from "@/pages/_app";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";

const scrolledImage =
  "shadow-[15px_15px_0px_0px_#4f46e5] -translate-x-[15px] -translate-y-[15px]";
const notScrolledImage = "shadow-none";

export default function Hero() {
  const [isTopScrolled] = useAtom(isTopScrolledAtom);

  return (
    <>
      <div className="py-36 text-center relative bg-[url('/background.svg')] bg-center bg-cover lg:bg-contain 2xl:bg-cover px-4 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:w-[60%] mx-auto">
            <h1 className="font-bold lg:text-7xl mt-6">
              Un modo migliore di gestire il tuo studio
            </h1>
            <div className="py-4" />
            <p>
              Potenzia la tua presenza online e gestisci lezioni, pacchetti e
              clienti - Tutto con la stessa piattaforma
            </p>
            <div className="py-6" />
            <Link href="/mailing-list" target="_blank" className="button">
              Prova la demo gratuita
            </Link>
          </div>
          <div className="py-12" />
          <div className="relative">
            <Image
              src="/hero-1.svg"
              width="1920"
              height="1080"
              className={`hidden lg:block w-72 absolute left-12 z-40 transition-all delay-300 duration-[600ms] ease-in-out ${
                isTopScrolled ? "bottom-[60px]" : "bottom-[250px]"
              }`}
            />
            <Image
              src="/image-hero.png"
              width="1920"
              height="1080"
              className={`w-9/12 mx-auto rounded-xl ${
                isTopScrolled ? notScrolledImage : scrolledImage
              } transition-all duration-[600ms] delay-100 ease-in-out`}
            />
            <Image
              src="/hero-2.svg"
              width="1080"
              height="1920"
              className={`hidden lg:block w-48 absolute right-24 z-40 transition-all delay-300 duration-[600ms] ease-in-out ${
                isTopScrolled ? "bottom-[200px]" : "bottom-[-30px]"
              }`}
            />
          </div>
        </div>
      </div>
    </>
  );
}
