"use client";

import { useRouter } from "next/router";
import { useWindowSize } from "../hooks/windowSizeHook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import styles from "../styles/navbar.module.scss";

export default function NavBar() {
  const pathname = usePathname();
  const windowSize = useWindowSize();

  return (
    <nav className={styles.navbar}>
      <Link className={pathname === "/" ? styles.active : ""} href={"/"}>
        {windowSize <= 700 ? <AiFillHome className={styles.icons} /> : "Home"}
      </Link>

      <Link
        className={pathname.includes("favorites") ? styles.active : ""}
        href={"/favouritesPage"}
      >
        {windowSize <= 700 ? (
          <AiFillHeart className={styles.icons} />
        ) : (
          "Favourite Posts"
        )}
      </Link>
    </nav>
  );
}
