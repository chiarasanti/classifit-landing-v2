import "@/styles/globals.css";
import Head from "next/head";
import CookieConsent from "react-cookie-consent";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <CookieConsent
        style={{ background: "#4f46e5" }}
        buttonText="Ho capito"
        buttonStyle={{ color: "#FFFFFF", backgroundColor: "#4F46E5", borderRadius: "8px", paddingLeft: "16px", paddingRight: "16px" }}
      >
        &#127850; Questo sito o servizi di terze parti potrebbero utilizzare i
        cookie per una migliore esperienza di navigazione.
      </CookieConsent>
    </>
  );
}
