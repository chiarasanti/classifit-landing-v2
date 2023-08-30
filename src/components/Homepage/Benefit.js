export default function Benefit() {
  return (
    <section>
      <div className="max-w-[1110px] mx-auto">
        <div className="text-center">
          <p className="font-medium uppercase text-indigo-600 text-sm">
            Cosa ottieni
          </p>
          <div className="py-4" />
          <h1 className="lg:w-8/12 mx-auto">
            Il tuo studio, senza limiti.
          </h1>
        </div>
        <div className="py-12" />
        <div className="lg:grid lg:grid-cols-2 mx-auto gap-x-12 gap-y-12">
          <div className="bg-slate-50 py-10 px-12">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M2.1875 17.5C2.1875 9.04314 9.04314 2.1875 17.5 2.1875V2.1875C25.9569 2.1875 32.8125 9.04314 32.8125 17.5V17.5C32.8125 25.9569 25.9569 32.8125 17.5 32.8125V32.8125C9.04314 32.8125 2.1875 25.9569 2.1875 17.5V17.5Z"
                  fill="#4F46E5"
                />
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.4553 26.0543L16.4062 18.005L16.4062 6.5358L18.5937 6.5358L18.5937 17.0989L26.0021 24.5075L24.4553 26.0543Z"
                    fill="#C7D2FE"
                  />
                </g>
              </g>
            </svg>
            <div className="mt-8" />
            <p className="font-bold text-black">Risparmia tempo di gestione</p>
            <div className="my-2" />
            <p>
              Concentrati su ciò che è davvero importante: le tue lezioni e la
              soddisfazione dei tuoi clienti.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 bg-slate-50 py-10 px-12">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.1875"
                y="19.6875"
                width="13.125"
                height="13.125"
                fill="#4F46E5"
              />
              <g>
                <rect
                  x="2.1875"
                  y="2.1875"
                  width="13.125"
                  height="13.125"
                  rx="6.5625"
                  fill="#4F46E5"
                />
              </g>
              <rect
                x="2.1875"
                y="2.1875"
                width="13.125"
                height="13.125"
                rx="6.5625"
                fill="#C7D2FE"
              />
              <rect
                x="19.6875"
                y="2.1875"
                width="13.125"
                height="13.125"
                fill="#4F46E5"
              />
              <rect
                x="19.6875"
                y="19.6875"
                width="13.125"
                height="13.125"
                fill="#4F46E5"
              />
            </svg>
            <div className="my-8" />
            <p className="font-bold text-black">
              Non perdere informazioni importanti
            </p>
            <div className="my-2" />
            <p>
              Trova la lista di tutti i pacchetti, tutte le lezioni e tutti i
              clienti - Tutto in un unico posto.
            </p>
          </div>
          <div className="mt-12 lg:mt-0 bg-slate-50 py-10 px-12">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_442_6152)">
                <rect
                  x="2.1875"
                  width="30.625"
                  height="30.625"
                  rx="15.3125"
                  fill="#4F46E5"
                />
                <g>
                  <circle cx="17.5" cy="10.9375" r="4.375" fill="#C7D2FE" />
                </g>
                <g>
                  <rect
                    x="10.9375"
                    y="17.5"
                    width="13.125"
                    height="24.0625"
                    rx="2"
                    fill="#C7D2FE"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_442_6152">
                  <rect width="35" height="35" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="my-8" />
            <p className="font-bold text-black">Offri un servizio migliore</p>
            <div className="my-2" />
            <p>
              I tuoi clienti potranno iscriversi alle lezioni in qualunque
              momento e in autonomia
            </p>
          </div>
          <div className="mt-12 lg:mt-0 bg-slate-50 py-10 px-12">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.1875 6.375C2.1875 5.27043 3.08293 4.375 4.1875 4.375H30.8125C31.9171 4.375 32.8125 5.27043 32.8125 6.375V30.625H2.1875V6.375Z"
                fill="#4F46E5"
              />
              <g>
                <rect y="26.25" width="35" height="4.375" fill="#C7D2FE" />
              </g>
            </svg>
            <div className="my-8" />
            <p className="font-bold text-black">
              Presenza online - Potenziata!
            </p>
            <div className="my-2" />
            <p>
              Classifit genera per te una pagina pubblica per consolidare la tua
              presenza online
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
