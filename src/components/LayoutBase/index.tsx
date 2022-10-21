import React from "react";

import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";
import { ThemeButton } from "../ThemeButton";

import { ThemeContext } from "../../contexts/ThemeContext";

interface ILayoutBaseProps {
  children: React.ReactNode;
}

const LayoutBase: React.FC<ILayoutBaseProps> = ({ children }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <>
      <Head>
        <meta name="description" content="Consultas de pokemons" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <div className={isDarkTheme ? "dark" : "light"}>
        <Header />
        <main className="main-container">{children}</main>
        <ThemeButton />
        <Footer />
      </div>
    </>
  );
};

export default LayoutBase;
