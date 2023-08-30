import "@/styles/globals.css";
import { atom, useAtom } from "jotai";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";

export const isTopScrolledAtom = atom(true);

export default function App({ Component, pageProps }) {
  const [isTopScrolled, setIsTopScrolled] = useAtom(isTopScrolledAtom);

  useEffect(() => {
    const handleScroll = () => {
      if (isTopScrolled && window.scrollY > 100) {
        setIsTopScrolled(false);
      }
      if (!isTopScrolled && window.scrollY <= 50) {
        setIsTopScrolled(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isTopScrolled]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-K5BCRCHP85"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K5BCRCHP85');
        `}
      </Script>
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: "#4f46e5" }}
        buttonText="Ho capito"
        buttonStyle={{
          color: "#FFFFFF",
          backgroundColor: "#4F46E5",
          borderRadius: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        &#127850; Questo sito o servizi di terze parti potrebbero utilizzare i
        cookie per una migliore esperienza di navigazione.
      </CookieConsent>
    </>
  );
}
