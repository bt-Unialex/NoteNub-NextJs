// components/Header/Header.tsx

import Link from "next/link";
import css from "./Header.module.css";
import { getCategories } from "@/lib/api";
import TagsMenu from "../TagsMenu/TagsMenu";

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.headerLink}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li className={css.navigationItem}>
            <TagsMenu categories={categories} />
          </li>
          <li className={css.navigationItem}>
            <Link href="/profile" className={css.navigationLink}>
              Profile
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/about" className={css.navigationLink}>
              About
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/sign-in" className={css.navigationLink}>
              Login
            </Link>
          </li>
          <li className={css.navigationItem}>
            <Link href="/sign-up" className={css.navigationLink}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
