import React from "react";

import Link from "next/link";
import Image from "next/image";

import { ThemeContext } from "../../contexts/ThemeContext";

import styles from "./index.module.css";

interface IPokemon {
  name: string;
  url: string;
  id: null | undefined | number;
}

const Card: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  const { isDarkTheme } = React.useContext(ThemeContext);

  const paddedId = (pokeId: null | undefined | number) => {
    /** 
      o id que temos para fazer o fetch vem no formato '1', '2'...
      a API das imagens faz o fetch com o id no formato '001', '002'...

      essa função muda o formato do nosso id para o formato que a API faz o fetch

      Ex.:
      paddedId(1) retorna 001
      paddedId(15) retorna 015
      paddedId(517) retorna 517
    */

    return (pokeId + "").padStart(3, "0");
  };

  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div
        className={`${styles.card} ${
          isDarkTheme ? styles.dark : styles.light
        } `}
      >
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId(
            pokemon.id
          )}.png`}
          width={120}
          height={120}
          alt="imagem do pokemon"
          priority
        />
        <p className={styles.id}>#{pokemon.id}</p>
        <h2 className={styles.title}>{pokemon.name}</h2>
        <button className={styles.btn}>Detalhes</button>
      </div>
    </Link>
  );
};

export default Card;
