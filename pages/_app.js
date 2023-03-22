import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
