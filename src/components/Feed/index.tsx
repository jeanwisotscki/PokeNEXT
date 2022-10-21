import React from "react";

import { PaginationButton } from "./components/PaginationButton";

import Card from "../Card";

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

let offset = 0;

function getOffset(url: string) {
  const firstSplit = url.split("?offset=");
  const secondSplit = firstSplit[1].split("&");
  const offset = secondSplit[0];

  return offset;
}

export const Feed = () => {
  const [pokemonsList, setPokemonsList] = React.useState<IPokemon[]>();
  const [nextPage, setNextPage] = React.useState<string | null>(null);
  const [prevPage, setPrevPage] = React.useState<string | null>(null);

  const handleFetchPage = async (url: string | null) => {
    if (url) {
      offset = Number(getOffset(url));

      try {
        const response = await fetch(url);
        const data: IPokemonsProps = await response.json();

        data.results.forEach((pokemon, index) => {
          pokemon.id = offset + index + 1;
        });

        setPokemonsList(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      } catch (err) {
        console.log(err);
      } finally {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  React.useEffect(() => {
    handleFetchPage(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=16`
    );
  }, []);

  return (
    <>
      <div className={styles.pokemon_container}>
        {pokemonsList?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className={styles.buttons_wrapper}>
        <PaginationButton onClick={() => handleFetchPage(prevPage)}>
          Anterior
        </PaginationButton>
        <PaginationButton onClick={() => handleFetchPage(nextPage)}>
          Próxima
        </PaginationButton>
      </div>
    </>
  );
};
