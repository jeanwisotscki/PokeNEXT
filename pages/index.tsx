import type { NextPage } from "next";
import Image from "next/image";

import styles from "./Home.module.css";

import { Feed } from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="fadeIn">
      <div className={styles.title_container}>
        <h1>
          Poke<span>NEXT</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width={50}
          height={50}
          alt="pokeball"
        />
      </div>

      <Feed />
    </div>
  );
};

export default Home;
