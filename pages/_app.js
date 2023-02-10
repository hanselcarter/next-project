import NavBar from "../components/NavBar";
import Head from "next/head";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>

      <Component {...pageProps} />
    </>
  );
};

export default App;
