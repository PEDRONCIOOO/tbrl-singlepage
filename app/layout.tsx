import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { LanguageProvider } from "@/context/LanguageContext";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap", // Melhora o LCP (Largest Contentful Paint)
});

export const metadata: Metadata = {
  title: "tBRL - Stablecoin Brasileira | Conectando Pix à Web3",
  description: "O tBRL é a stablecoin 100% lastreada em real que conecta o Pix à Web3, oferecendo liquidez instantânea para exchanges, fintechs e corporações.",
  keywords: "tBRL, stablecoin, Pix, Web3, blockchain, tokenização, real brasileiro, criptomoeda, fintech",
  openGraph: {
    title: "tBRL - A Stablecoin Brasileira que conecta Pix à Web3",
    description: "Liquidez instantânea com 100% de lastro em real. Integração simples via API para exchanges, fintechs e corporações globais.",
    url: "https://tbrl.com.br",
    siteName: "tBRL",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "tBRL - Stablecoin Brasileira | Conectando Pix à Web3",
    description: "Tokenização do Real Brasileiro com 100% de lastro e integração com Pix",
  },
  alternates: {
    canonical: "https://tbrl.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}