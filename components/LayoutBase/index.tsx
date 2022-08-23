import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";
import SearchBar from "../SearchBar";

interface ILayoutBaseProps {
  children: React.ReactNode;
}

const LayoutBase: React.FC<ILayoutBaseProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Consultas de pokemons" />
        <link rel="icon" href="/images/favicon.ico" />

        <title>PokeNEXT</title>
      </Head>
      <Header />
      <SearchBar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutBase;
