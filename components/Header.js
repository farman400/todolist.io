import Link from "next/link";
import styles from './button.module.css';

export default function Navbar() {
  return (
    <div>
      <header className={`text-gray-600 body-font ${styles.container}`} style={{ backgroundColor: "#5046e4" }}>
        <div className={`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ${styles.navbar}`}>
          <Link href="/">
            <div className={`flex title-font font-medium items-left md:justify-start justify-center text-gray-900 ${styles.logo}`}>
              <img src="android-chrome-192x192.png" alt="Logo" width="75" height="75" />
              <span className={`ml-3 text-xl ${styles.logoText}`}></span>
            </div>
          </Link>
          <nav className={`md:ml-auto flex flex-wrap items-center text-base justify-center ${styles.navLinks}`}>
            <Link href={"/"}>
              <button className={` ${styles.navLink} ${styles.button}`}><b>Home</b></button>
            </Link>
            <Link href={"/about"}>
              <button className={` ${styles.navLink} ${styles.button}`}><b>About</b></button>
            </Link>
            <Link href={"/todos"}>
              <button className={` ${styles.navLink} ${styles.button}`}><b>My Todos</b></button>
            </Link>
            <Link href="/contact">
            <button className={` ${styles.navLink} ${styles.button}`}><b>Contact Us</b></button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
