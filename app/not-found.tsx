import Link from "next/link";
import css from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found - NoteHub",
  description:
    "The page you are looking for does not exist or was moved. Navigate back to NoteHub.",
  openGraph: {
    title: "Page not found - NoteHub",
    description:
      "The page you are looking for does not exist or was moved. Navigate back to NoteHub.",
    url: "/not-found",
    images: [{ url: "/notehub-og-meta.jpg" }],
  },
};

const NotFound = () => {
  return (
    <div>
      <h2 className={css.title}>404 - Page not found</h2>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;

// with redirection

// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// const NotFound = () => {
//   const router = useRouter();

//   useEffect(() => {
//     // Редірект через 3 секунди
//     const timer = setTimeout(() => router.push('/'), 3000);
//     return () => clearTimeout(timer);
//   }, [router]);

//   return (
//     <div>
//       <h1>404 - Сторінку не знайдено</h1>
//       <p>Вас буде перенаправлено на головну через кілька секунд…</p>
//     </div>
//   );
// };

// export default NotFound
