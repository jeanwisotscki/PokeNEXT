import React from "react";
import NProgress from "nprogress";

import styles from "./index.module.css";

const SearchBar = () => {
  const [value, setValue] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    NProgress.start();

    if (value && +value <= 1154) {
      setValue("");
      NProgress.done();

      return (window.location.href = `/pokemon/${value}`);
    }

    if (value && +value > 1154) {
      setValue("");
      NProgress.done();

      return alert("O número máximo de pokemons é de 1154");
    }

    NProgress.done();

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
