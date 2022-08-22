import Image from "next/image";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

import styles from "./index.module.css";

interface IPokemon {
  name: string;
  url: string;
  id: null | undefined | number;
}

interface IPokemonsProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export const getStaticPaths = async () => {
  const maxPokemons = 51;
  const url = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${url}?limit=${maxPokemons}`);
  const data: IPokemonsProps = await res.json();

  // params
  const paths = data.results.map((_, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  pokemon: Response;
};
interface Params extends ParsedUrlQuery {
  pokemonId: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const id = context.params!.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();

  return {
    props: { pokemon },
  };
};

interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

const Pokemon = ({ pokemon }: any) => {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.pokemon_name}>{pokemon.name}</h1>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt="imagem do pokemon"
      />
      <div className={styles.pokemon_id}>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipos:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item: IPokemonType, index: number) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h3>Altura:</h3>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h3>Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
