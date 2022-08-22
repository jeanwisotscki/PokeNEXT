import styles from "./index.module.css";

const Loading = () => {
  return (
    <section className={styles.section}>
      <div className={styles.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Loading;
