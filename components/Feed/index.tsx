import React from "react";

import styles from "./index.module.css";

import { PaginationButton } from "./components/PageButton";

import Card from "../Card";

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

function getOffset(string: string) {
  const firstSplit = string.split("?offset=");
  const secondSplit = firstSplit[1].split("&");
  const offset = secondSplit[0];

  return offset;
}

export const Feed = () => {
  const [pokemonsList, setPokemonsList] = React.useState<IPokemon[]>();
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [prevPage, setPrevPage] = React.useState<string | null>(null);

  const handleFetchPage = async (page: string | null) => {
    if (page) {
      const offset = Number(getOffset(page));

      const response = await fetch(page);
      const data: IPokemonsProps = await response.json();

      data.results.forEach((pokemon, index) => {
        pokemon.id = offset + index + 1;
      });

      setPokemonsList(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    }
  };

  React.useEffect(() => {
    handleFetchPage("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  }, []);

  return (
    <>
      <div className={styles.pokemon_container}>
        {pokemonsList?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div>
        <PaginationButton onClick={() => handleFetchPage(prevPage)}>
          Anterior
        </PaginationButton>
        <PaginationButton
          onClick={() => handleFetchPage(nextPage)}
          floatRight={true}
        >
          Próxima
        </PaginationButton>
      </div>
    </>
  );
};
