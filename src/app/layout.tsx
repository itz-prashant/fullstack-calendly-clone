import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";


const noto = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
})

export const metadata: Metadata = {
  title: "Calendly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
