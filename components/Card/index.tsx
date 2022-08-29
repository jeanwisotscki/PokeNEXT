import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

interface IPokemon {
  name: string;
  url: string;
  id: null | undefined | number;
}

const Card: React.FC<{ pokemon: IPokemon }> = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className={styles.card}>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
          width={120}
          height={120}
          alt="imagem do pokemon"
          priority
        />
        <p className={styles.id}>#{pokemon.id}</p>
        <h3 className={styles.title}>{pokemon.name}</h3>
        <button className={styles.btn}>Detalhes</button>
      </div>
    </Link>
  );
};

export default Card;
