import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

interface IPokemon {
  name: string;
  url: string;
  id: null | undefined | number;
}

export const getStaticProps = async () => {
  const maxPokemons = 251;
  const url = "https://pokeapi.co/api/v2/pokemon";

  const res = await fetch(`${url}?limit=${maxPokemons}`);
  const data = await res.json();

  // add índice dos pokemons
  data.results.forEach((pokemon: IPokemon, index: number) => {
    pokemon.id = index + 1;
  });

  return {
    props: { pokemons: data.results },
  };
};

interface IPokemonsProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

const Home: NextPage<IPokemon[]> = ({ pokemons }: IPokemon[]) => {
  return (
    <>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.id} - {pokemon.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
