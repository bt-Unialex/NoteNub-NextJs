import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NoteHub - Personal Note Management App",
    template: "%s | NoteHub",
  },
  description:
    "A modern and efficient application for managing personal notes with search functionality and organized structure. Create, organize, and find your notes easily.",
  keywords: [
    "notes",
    "productivity",
    "organization",
    "personal",
    "management",
    "task management",
    "note taking",
  ],
  authors: [{ name: "Unialex" }],
  creator: "Unialex",
  publisher: "NoteHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://notehub.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://notehub.com",
    siteName: "NoteHub",
    title: "NoteHub - Personal Note Management App",
    description:
      "A modern and efficient application for managing personal notes with search functionality and organized structure. Create, organize, and find your notes easily.",
    images: [
      {
        url: "/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub - Personal Note Management App",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@notehub",
    creator: "@notehub",
    title: "NoteHub - Personal Note Management App",
    description:
      "A modern and efficient application for managing personal notes with search functionality and organized structure.",
    images: ["/notehub-og-meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#4a5568" },
  ],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <Header />
          <main>{children}</main>
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}
