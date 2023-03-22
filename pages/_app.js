import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Heading>Ideas-App</Heading>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
