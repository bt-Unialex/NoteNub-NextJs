import css from "./SidebarNotes.module.css";
import Link from "next/link";
import { getCategories } from "@/lib/api";

const NotesSidebar = async () => {
  const categories = await getCategories();

  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category.id} className={css.menuItem}>
          <Link href={`/notes/filter/${category.id}`} className={css.menuLink}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesSidebar;
