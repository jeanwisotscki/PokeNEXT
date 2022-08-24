import React from "react";
import Card from "../Card";
import { PaginationButton } from "./components/PageButton";

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

export const Feed = () => {
  const [data, setData] = React.useState<IPokemonsProps>();

  React.useEffect(() => {
    const handleFetch = async () => {
      const maxPokemons = 20;
      const url = "https://pokeapi.co/api/v2/pokemon";

      const res = await fetch(`${url}?limit=${maxPokemons}`);
      const data: IPokemonsProps = await res.json();

      // add índice aos pokemons
      data.results.forEach((pokemon, index) => {
        pokemon.id = index + 1;
      });

      setData(data);
    };
    handleFetch();
  }, []);

  return (
    <>
      <div className={styles.pokemon_container}>
        {data?.results.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <PaginationButton text="< Anterior" />
      <PaginationButton text="Próxima >" floatRight={true} />
    </>
  );
};
