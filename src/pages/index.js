import About from "@/components/Homepage/About";
import Benefit from "@/components/Homepage/Benefit";
import CTA from "@/components/Homepage/CTA";
import Feature from "@/components/Homepage/Feature";
import Hero from "@/components/Homepage/Hero";
import Roadmap from "@/components/Homepage/Roadmap";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Classifit - Un modo migliore di gestire il tuo studio
        </title>
        <meta
          name="description"
          content="Potenzia la tua presenza online e gestisci lezioni, pacchetti e clienti - Tutto con la stessa piattaforma. La piattaforma perfetta per il tuo studio di fitness."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Benefit />
      <Roadmap />
      <CTA />
      <Footer />
    </>
  );
}
