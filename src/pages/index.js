import Hero from "@/components/Homepage/Hero";
import Images from "@/components/Homepage/Images";
import Services from "@/components/Homepage/Services";
import AboutUs from "@/components/Layout/AboutUs";
import Footer from "@/components/Layout/Footer";
import Guarantee from "@/components/Layout/Guarantee";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Classifit - Porta il tuo studio al prossimo livello
        </title>
        <meta
          name="description"
          content="Potenzia la tua presenza online e gestisci lezioni, pacchetti e clienti - Tutto con la stessa piattaforma. La piattaforma perfetta per il tuo studio di fitness."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <Images />
      <Services />
      <Guarantee />
      <AboutUs />
      <Footer />
    </>
  );
}
