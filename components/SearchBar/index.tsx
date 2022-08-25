import React from "react";
import NProgress from "nprogress";
import toast, { Toaster } from "react-hot-toast";

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

      return toast.error("O número máximo de pokemons é de 1084");
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
