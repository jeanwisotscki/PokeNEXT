import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/images/pokeball.png"
            width={30}
            height={30}
            alt="pokeball"
          />
          <h1>PokeNEXT</h1>
        </div>

        <ul className={styles.link_items}>
          <li>
            <Link href="/">
              <a>Página inicial</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
