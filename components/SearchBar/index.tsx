import React from "react";
import NProgress from "nprogress";
import toast, { Toaster } from "react-hot-toast";

import styles from "./index.module.css";

const SearchBar = () => {
  const [value, setValue] = React.useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    NProgress.start();

    if (value && +value > 0 && +value <= 905) {
      window.location.href = `/pokemon/${value}`;
      setValue("");
      NProgress.done();

      return;
    }

    if (value && +value > 905) {
      setValue("");
      NProgress.done();

      return toast.error("Número de pokemons existentes é de 905");
    }

    if (value && +value < 0) {
      setValue("");
      NProgress.done();

      return toast.error("Somente números positivos");
    }

    NProgress.done();

    return toast.error("Preencha o campo antes de pesquisar");
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
      <div>
        <Toaster />
      </div>
    </form>
  );
};

export default SearchBar;
