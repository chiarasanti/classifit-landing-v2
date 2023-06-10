import { useEffect, useRef, useState } from "react";

export default function Roadmap() {
  const {
    targetRef: firstBadgeRef,
    isHalfwayVisible: firstBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();
  const {
    targetRef: secondBadgeRef,
    isHalfwayVisible: secondBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();
  const {
    targetRef: thirdBadgeRef,
    isHalfwayVisible: thirdBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();
  const {
    targetRef: fourthBadgeRef,
    isHalfwayVisible: fourthBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();
  const {
    targetRef: fifthBadgeRef,
    isHalfwayVisible: fifthBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();
  const {
    targetRef: sixthBadgeRef,
    isHalfwayVisible: sixthBadgeIsHalfwayVisible,
  } = useIsHalfwayVisible();

  return (
    <section className="bg-indigo-600 text-center text-white">
      <div className="max-w-[1440px] mx-auto">
        <p className="font-bold text-white">Tabella di marcia</p>
        <div className="py-6" />
        <h1 className="lg:w-8/12 mx-auto font-bold">
          Creiamo insieme il prodotto migliore per il tuo studio
        </h1>
        <div className="py-10" />
        <div className="relative">
          <div className="w-[1px] h-full absolute top-0 bottom-0 left-1/2 bg-white/50" />
          <div className="w-4 h-4 rounded-full -translate-x-1/2 text-7xl bg-indigo-50 sticky left-1/2 top-1/2" />
          <div
            className="pt-6 flex justify-center items-center"
            ref={firstBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                firstBadgeIsHalfwayVisible
                  ? "line-through border-[#34D399]"
                  : "pl-10 border-transparent"
              }`}
              style={{
                transform: firstBadgeIsHalfwayVisible
                  ? ""
                  : "translate(calc(50% - 25px))",
              }}
            >
              {firstBadgeIsHalfwayVisible && "✅"} Creazione del prodotto di
              base
            </div>
            <div
              className={`badge border-2 block transition-all duration-[400ms] ease-in-out md:hidden px-4 ${
                firstBadgeIsHalfwayVisible
                  ? "line-through border-[#34D399]"
                  : "border-transparent"
              }`}
            >
              Creazione del prodotto di base
            </div>
          </div>
          <div
            className="mt-12 flex justify-center items-center"
            ref={secondBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                secondBadgeIsHalfwayVisible
                  ? "line-through border-[#34D399]"
                  : "pr-10 border-transparent"
              }`}
              style={{
                transform: secondBadgeIsHalfwayVisible
                  ? ""
                  : "translate(calc(-50% + 25px))",
              }}
            >
              {secondBadgeIsHalfwayVisible && "✅"} Creazione sito di
              presentazione
            </div>
            <div
              className={`badge border-2 block transition-all duration-[400ms] ease-in-out md:hidden px-4 ${
                secondBadgeIsHalfwayVisible
                  ? "line-through border-[#34D399]"
                  : "border-transparent"
              }`}
            >
              Creazione sito di presentazione
            </div>
          </div>
          <div
            className="mt-12 flex justify-center items-center"
            ref={thirdBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                thirdBadgeIsHalfwayVisible ? "" : "pl-10 border-transparent"
              }`}
              style={{
                transform: "translate(calc(50% - 25px))",
              }}
            >
              Uscita della demo gratuita
            </div>
            <div className="badge block md:hidden px-4">
              Uscita della demo gratuita
            </div>
          </div>
          <div
            className="mt-12 flex justify-center items-center"
            ref={fourthBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                fourthBadgeIsHalfwayVisible ? "" : "pr-10 border-transparent"
              }`}
              style={{
                transform: "translate(calc(-50% + 25px))",
              }}
            >
              Raccolta dei tuoi feedback
            </div>
            <div className="badge block md:hidden px-4">
              Raccolta dei tuoi feedback
            </div>
          </div>
          <div
            className="mt-12 flex justify-center items-center"
            ref={fifthBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                fifthBadgeIsHalfwayVisible ? "" : "pl-10 border-transparent"
              }`}
              style={{
                transform: "translate(calc(50% - 25px))",
              }}
            >
              Implementazione nuove funzionalità e migliorie
            </div>
            <div className="badge block md:hidden px-4">
              Implementazione nuove funzionalità e migliorie
            </div>
          </div>
          <div
            className="mt-12 pb-10 flex justify-center items-center"
            ref={sixthBadgeRef}
          >
            <div
              className={`badge border-2 px-4 hidden md:block transition-all duration-[400ms] ease-in-out ${
                sixthBadgeIsHalfwayVisible ? "" : "pr-10 border-transparent"
              }`}
              style={{
                transform: "translate(calc(-50% + 25px))",
              }}
            >
              <span className="mr-2">&#128640;</span> Lancio del prodotto
              finale!
            </div>
            <div className="badge block md:hidden px-4">
              <span className="mr-2">&#128640;</span> Lancio del prodotto
              finale!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useIsHalfwayVisible() {
  const targetRef = useRef(null);
  const [isHalfwayVisible, setIsHalfwayVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHalfwayVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0.1, // Imposta la soglia al 50%
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return { targetRef, isHalfwayVisible };
}
