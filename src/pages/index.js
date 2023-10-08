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
        <title>Classifit - Sito web su misura e gestionale per il tuo studio di pilates</title>
        <meta property="og:title" content="Porta il tuo studio al prossimo livello" />
        <meta property="og:url" content="https://www.classi.fit/" />
        <meta
          property="og:description"
          content="Sito web su misura e gestionale online integrato - Tutto con un'unica piattaforma"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/social-preview.png" />
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
