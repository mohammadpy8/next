import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car App</h2>
          <p>choose and Buy Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Car App Project | First project by Nextjs &copy;
      </footer>
    </>
  );
};

export default Layout;
