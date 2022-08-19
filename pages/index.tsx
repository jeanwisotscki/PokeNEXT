import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";

import styles from "./Home.module.css";

import Card from "../components/Card";

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

type Props = {
  pokemons: IPokemon[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const maxPokemons = 51;
  const url = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${url}?limit=${maxPokemons}`);
  const data: IPokemonsProps = await res.json();

  // add índice aos pokemons
  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  });

  return {
    props: { pokemons: data.results },
  };
};

const Home: NextPage<{ pokemons: IPokemon[] }> = ({ pokemons }) => {
  return (
    <>
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
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
};

export default Home;
