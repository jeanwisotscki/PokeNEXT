import Image from "next/image";

import styles from "./index.module.css";

const Sobre = () => {
  return (
    <div className={`fadeIn ${styles.sobre}`}>
      <h2>Sobre o projeto</h2>
      <p>
        Desenvolvido como projeto de estudo, usando majoritariamente o framework
        Next.js e a linguagem Typescript.
      </p>
      <div className={styles.img_container}>
        <Image
          src="/images/charizard.png"
          width="300"
          height="300"
          alt="pokemon charizard"
        />
      </div>
    </div>
  );
};

export default Sobre;
