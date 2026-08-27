import { Source_Serif_4 } from "next/font/google";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"], display: "swap" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
