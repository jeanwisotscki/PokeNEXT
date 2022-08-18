import Image from "next/image";

import styles from "./index.module.css";

const Sobre = () => {
  return (
    <div>
      <h2>Sobre o projeto</h2>
      <p>
        Desenvolvido como projeto de estudo, usando majoritariamente o framework
        Next.js e a linguagem Typescript.
      </p>
      <Image
        src="/images/charizard.png"
        width="100%"
        height="100%"
        alt="pokemon charizard"
      />
    </div>
  );
};

export default Sobre;
