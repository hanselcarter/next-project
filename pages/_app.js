import NavBar from "../components/NavBar";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <header>
        <NavBar />
      </header>

      <Component {...pageProps} />
    </>
  );
};

export default App;
