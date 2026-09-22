import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/public/components/header";
import { Footer } from "@/public/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASCL EDITORA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
