
import type { Metadata } from "next";
import Header from "../component/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday Recipes",
  description: "Discover delicious recipes for everyday cooking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#faf9f6" }}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
