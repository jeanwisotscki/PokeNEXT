import styles from "./index.module.css";

const SearchBar = () => {
  return (
    <form className={styles.form}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Nome ou número do pokemon"
      />
      <button>pesquisar</button>
    </form>
  );
};

export default SearchBar;
