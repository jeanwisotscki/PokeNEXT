import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PokeNEXT</title>
        <meta name="description" content="Consultas de pokemons" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </>
  );
};

export default Home;
