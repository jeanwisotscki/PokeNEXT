import React from "react";

import styles from "./index.module.css";

const SearchBar = () => {
  const [value, setValue] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value && +value <= 1154) {
      setValue("");
      return (window.location.href = `/pokemon/${value}`);
    }

    if (value && +value > 1154) {
      setValue("");
      return alert("O número máximo de pokemons é de 1154");
    }

    return alert("Preencha o campo corretamente");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="search">Pesquisar pokemon</label>
      <input
        type="number"
        name="search"
        id="search"
        placeholder="Número do pokemon"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Pesquisar</button>
    </form>
  );
};

export default SearchBar;
