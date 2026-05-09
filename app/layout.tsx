import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
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
      <Analytics />
      <SpeedInsights />
      <ThemeProvider>
        <body className="min-h-full flex flex-col antialiased">
          <div className="grain" />
          <Header />
          {children}
        </body>
      </ThemeProvider>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XQDCKKE8WH"
        async={true}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XQDCKKE8WH');`,
        }}
      />
    </html>
  );
}
