import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <h1>CarSale</h1>
        </Link>
        <p>Choose & and buy your car</p>
      </header>

      {children}

      <footer className={styles.footer}>
        <span>
          Made with <span className={styles.heart}>♥ </span>
          in Iran<sup>&copy;</sup>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
