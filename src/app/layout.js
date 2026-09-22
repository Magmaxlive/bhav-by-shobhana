import { Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
    style: ["normal", "italic"],

  display: "swap",
});

export const metadata = {
  title: "BHAV — Padma Bhushan Shobana live in Auckland | 17 October 2026",
  description: "BHAV, Bharathanin Aindham Vedham. Padma Bhushan Shobana live at Bruce Mason Centre, Takapuna, Auckland. Saturday 17 October 2026, 6:00 PM. Book on Ticketmaster.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <FloatingBtn/>
        <Footer/>
        </body>
    </html>
  );
}
