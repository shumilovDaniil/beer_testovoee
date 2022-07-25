import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyle, { Container } from "../styles/global";
import BeerList from "../components/BeerList";
import SearchBlock from "../components/SearchBlock";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Beer shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GlobalStyle />
        <SearchBlock />
        <BeerList />
      </main>

      <footer>

      </footer>
    </Container>
  );
};

export default Home;
