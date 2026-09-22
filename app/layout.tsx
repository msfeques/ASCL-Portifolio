import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/public/components/header";
import { Footer } from "@/public/components/footer";


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
