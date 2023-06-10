import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
const scrolledImage =
  "shadow-[15px_15px_0px_0px_#4f46e5] -translate-x-[15px] -translate-y-[15px]";
const notScrolledImage = "shadow-none";

export default function Hero() {
  const [imageClassName, setImageClassName] = useState(notScrolledImage);

  const handleScroll = (imageClassName) => {
    if (imageClassName !== scrolledImage && window.scrollY >= 100) {
      setImageClassName(scrolledImage);
    } else if (imageClassName === scrolledImage && window.scrollY < 100) {
      setImageClassName(notScrolledImage);
    }
  };
  useEffect(() => {
    window.onscroll = () => handleScroll(imageClassName);
  }, [imageClassName]);
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
          <Image
            src="/image-hero.png"
            width="1920"
            height="1080"
            className={`w-9/12 mx-auto rounded-xl ${imageClassName} transition-all duration-[600ms] ease-in-out`}
          />
        </div>
      </div>
    </>
  );
}
