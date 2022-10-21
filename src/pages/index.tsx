import React from "react";

import Image from "next/image";
import Head from "next/head";

import type { NextPage } from "next";

import { Feed } from "../components/Feed";
import SearchBar from "../components/SearchBar";

import { ThemeContext } from "../contexts/ThemeContext";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <>
      <Head>
        <title>PokeNEXT | Home</title>
      </Head>
      <div className="fadeIn">
        <div className={styles.title_container}>
          <h1>
            Poke<span>NEXT</span>
          </h1>
          <Image
            src="/images/pokeball.png"
            width={50}
            height={50}
            alt="pokeball"
          />
        </div>

        <SearchBar />

        <Feed />
      </div>
    </>
  );
};

export default Home;
