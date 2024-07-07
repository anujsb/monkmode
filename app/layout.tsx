import type { Metadata } from "next";
import Head from 'next/head';
import "./globals.css";

export const metadata: Metadata = {
  title: "monkmode",
  description: "monkmode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=chillax@200,300,400,500,600,700,1&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
