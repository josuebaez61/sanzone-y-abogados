import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import PrimeSSRProvider from "@/providers/prime-ssr-provider";

import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { WhatsappButton } from "@/components/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sanzone-abogados.com"),
  title: {
    default: "Sanzone & Abogados — Estudio jurídico y contable",
    template: "%s | Sanzone & Abogados",
  },
  description:
    "Estudio jurídico y contable especializado en jubilaciones, reajustes, sucesiones, convenios internacionales, coberturas médicas y tributación.",
  keywords: [
    "estudio jurídico",
    "abogados",
    "jubilaciones",
    "reajustes",
    "sucesiones",
    "convenios internacionales",
    "coberturas médicas",
    "liquidación de impuestos",
    "tributario",
  ],
  authors: [{ name: "Sanzone & Abogados" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Sanzone & Abogados",
    title: "Sanzone & Abogados — Estudio jurídico y contable",
    description:
      "Estudio jurídico y contable especializado en seguridad social, sucesiones y tributación.",
    url: "https://www.sanzone-abogados.com",
    images: [
      {
        url: "/assets/images/sanzone-5.jpg",
        width: 1200,
        height: 630,
        alt: "Sanzone & Abogados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanzone & Abogados — Estudio jurídico y contable",
    description:
      "Especialistas en jubilaciones, reajustes, sucesiones, convenios internacionales y tributación.",
    images: ["/assets/images/sanzone-5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ colorScheme: "light" }}>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
        style={{ colorScheme: "light" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        >
          Saltar al contenido principal
        </a>
        <PrimeSSRProvider>
          <Header />
          {children}
          <Footer />
          <WhatsappButton />
        </PrimeSSRProvider>
      </body>
    </html>
  );
}
