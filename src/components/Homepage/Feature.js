import Image from "next/image";

export default function Feature() {
  const featuresData = [
    {
      number: "01",
      title: "Il tuo studio, online",
      description:
        "Monitora e gestisci clienti, categorie, lezioni singole e ricorrenti, pacchetti, prenotazioni - Tutto in un'unica piattaforma, accessibile da qualunque dispositivo.",
    },
    {
      number: "02",
      title: "Pagina pubblica per i tuoi clienti",
      description:
        "Viene generata per te una pagina pubblica tramite cui i tuoi clienti possono visualizzare il tuo calendario, iscriversi alle lezioni e monitorare le loro iscrizioni e pacchetti.",
    },
    {
      number: "03",
      title: "Trasferimento dati",
      description:
        "Hai già uno studio avviato? Hai paura che trasferire i dati su una nuova piattaforma sia un processo troppo lungo? Ti aiutiamo a digitalizzare o trasferire tutti i tuoi dati, e ti affianchiamo nel capire come puoi utilizzare Classifit al meglio.",
    },
    {
      number: "04",
      title: "Pronti a partire!",
      description:
        "Ti aiutiamo ad annunciare e presentare il nuovo sistema ai tuoi clienti, e offriamo un servizio di supporto 24h tramite Whatsapp o chiamate per tutti i tuoi iscritti.",
    },
  ];

  const features = featuresData.map((ftr) => (
    <div key={ftr.number}>
      <p className="text-2xl font-medium text-black">
        <span className="md:mr-6">{ftr.number}</span> {ftr.title}{" "}
      </p>
      <div className="py-3" />
      <hr />
      <div className="py-3" />
      <p>{ftr.description}</p>
      <div className="py-3" />
      <hr />
      <div className="py-3" />
    </div>
  ));
  return (
    <section className="bg-indigo-50 relative">
      <div className="lg:grid lg:grid-cols-2 mx-auto max-w-[1110px] gap-52">
        <div className="container">{features}</div>
        <div className="hidden lg:block">
          <div className="bg-black w-1/2 h-1/2 absolute right-0 top-0">
            <div className="flex items-center w-full h-full max-w-[1110px]">
              <Image
                src="/agenda-1.png"
                width="1080"
                height="1080"
                className="w-[550px]"
                alt="Classifit - Piattaforma di amministrazione"
              />
            </div>
          </div>
          <div className="bg-slate-50 w-1/2 h-1/2 absolute right-0 bottom-0">
            <div className="flex items-center w-full h-full max-w-[1110px]">
              <Image
                src="/website-1.png"
                width="1080"
                height="1080"
                className="w-[550px]"
                alt="Classifit - sito auto generato"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
