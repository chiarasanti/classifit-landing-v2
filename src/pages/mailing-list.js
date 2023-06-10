import Head from "next/head";

export default function MailingList() {
  return (
    <>
      <Head>
        <title>Iscriviti alla lista di attesa</title>
        <meta
          name="description"
          content="Iscriviti alla lista di attesa per provare la demo e partecipare alla realizzazione di Classifit"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-[#eef2ff] h-screen w-full flex justify-center items-center">
        <iframe
          width="1920"
          height="800"
          src="https://42758b0c.sibforms.com/serve/MUIEAJBJ0ThX-CHhzmA_YZb-wSNbmrPpldwolfQAegxQeIx3vvHTHlGOtqlRt4dD6wnD8ssrboa6KSiSHVtvf9cEUcpaDuDmxUF9YnA7Qxckk8wLVqpie63zpN87nV9T9ebo3sKnHA48voYSChJI02IrWjCb7wZ4tPe-GfkvAc2-qlur8X62KS8jIzJqY5yWOx29LL7jmaizcDqP"
          frameborder="0"
          allowfullscreen
          className="block mx-auto max-w-full"
        ></iframe>
      </div>
    </>
  );
}
