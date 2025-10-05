import css from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={css.footer}>
      <p className={css.wrap}>
        Created <time dateTime="2025">2025</time>
      </p>
    </footer>
  );
}
