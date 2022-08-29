import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";

interface ILayoutBaseProps {
  children: React.ReactNode;
}

const LayoutBase: React.FC<ILayoutBaseProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="description" content="Consultas de pokemons" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutBase;
