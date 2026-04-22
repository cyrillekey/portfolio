import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyrille Otieno | Full Stack Developer",
  description:
    "Full stack developer based in Nairobi, Kenya. Building scalable web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <ThemeProvider>
        <body className="min-h-full flex flex-col antialiased">
          <div className="grain" />
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
