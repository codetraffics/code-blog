import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Code-Blog",
    template: "%s - Code-Blog",
  },
  description:
    "Get brief introduction to software development, including what it is and who benefits from it.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <Link href={"/"}>
        <h4>Code-Blog</h4>
      </Link>
    </header>
  );

  const footer = (
    <footer>
      <p>Made With Love</p>
    </footer>
  );
  return (
    <html lang="en">
      <body className={inter.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
