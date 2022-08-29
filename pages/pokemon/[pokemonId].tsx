import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./index.module.css";

import Loading from "../../components/Loading";

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
