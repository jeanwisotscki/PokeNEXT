import React from "react";

import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Loading from "../../components/Loading";

import styles from "./index.module.css";

interface IPokeTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface IPoke {
  id: number;
  name: string;
  weight: number;
  height: number;
  types: IPokeTypes[];
}

const Pokemon = () => {
  const router = useRouter();
  const id = router.query.pokemonId;

  const [pokemon, setPokemon] = React.useState<IPoke>();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const paddedId = (pokeId: number) => {
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

  const handleFetchPokemon = async (url: string) => {
    if (url) {
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(url);
        const data: any = await response.json();

        const poke = {
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          types: data.types,
        };

        setIsLoading(false);
        setPokemon(poke);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  React.useEffect(() => {
    if (id) {
      handleFetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>PokeNEXT | {pokemon?.name.toUpperCase()}</title>
      </Head>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h3 style={{ color: "#fff", textAlign: "center" }}>
          Ops... Não encontrei nada sobre esse pokemon 🤷{" "}
        </h3>
      ) : (
        pokemon && (
          <div className={`fadeIn ${styles.pokemon_container}`}>
            <h1 className={styles.pokemon_name}>{pokemon.name}</h1>
            <Image
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId(
                pokemon.id
              )}.png`}
              width={200}
              height={200}
              alt="imagem do pokemon"
              priority
            />
            <div className={styles.pokemon_id}>
              <p>#{pokemon.id}</p>
            </div>
            <div>
              <h3>Tipos:</h3>
              <div className={styles.types_container}>
                {pokemon.types.map((item: IPokeTypes, index: number) => (
                  <span
                    key={index}
                    className={`${styles.type} ${
                      styles["type_" + item.type.name]
                    }`}
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
        )
      )}
    </>
  );
};

export default Pokemon;
