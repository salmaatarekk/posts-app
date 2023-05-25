"use client";

import { useRouter } from "next/router";
import { useWindowSize } from "../hooks/windowSizeHook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillHeart, AiFillHome } from "react-icons/ai";
import styles from "../styles/navbar.module.scss";
import { constants } from "../types/constants";

export default function NavBar() {
  const pathname = usePathname();
  const windowSize = useWindowSize();

  return (
    <nav className={styles.navbar}>
      <Link className={pathname === "/" ? styles.active : ""} href={"/"}>
        {windowSize <= constants.window.maxMobileWindowSize ? (
          <AiFillHome className={styles.icons} />
        ) : (
          "Home"
        )}
      </Link>

      <Link
        className={pathname.includes("favouritesPage") ? styles.active : ""}
        href={"/favouritesPage"}
      >
        {windowSize <= constants.window.maxMobileWindowSize ? (
          <AiFillHeart className={styles.icons} />
        ) : (
          "Liked"
        )}
      </Link>
    </nav>
  );
}
