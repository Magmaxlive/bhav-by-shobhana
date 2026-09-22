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
      <head>
        <script>
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1049131614605755');
        fbq('track', 'PageView');`}
        </script>

        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1049131614605755&ev=PageView&noscript=1"
        /></noscript>

      </head>
      <body className="min-h-full flex flex-col">
        <Header/>
        {children}
        <FloatingBtn/>
        <Footer/>
        </body>
    </html>
  );
}
