import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>PokeNEXT </strong>
        &copy; 2022
      </p>
      <span>
        Desenvolvido por{" "}
        <a
          style={{ color: "#659ef4" }}
          href="https://github.com/jeanwisotscki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jean Wisotscki
        </a>
      </span>
    </footer>
  );
};

export default Footer;
