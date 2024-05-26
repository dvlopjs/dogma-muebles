import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Script from "next/script";
import ThemeRegistry from "./theme/ThemeRegistry";
import { Footer } from "./components/Footer/Footer";
import Head from "next/head";
import ScrollToTop from "./utils/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Dogma Muebles",
//   description: "Muebles de calidad a medida.",
// };
export const metadata: Metadata = {
  title: "Dogma Muebles",
  description: "Muebles de calidad a medida.",
  openGraph: {
    title: "Dogma Muebles",
    description: "Muebles de calidad a medida.",
    url: "https://dogmamuebles.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="5f3r-UFBUKbELdCPwBANUrsM6q4wwGBPKkBd7XcBD20"
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L96XXJJFZQ"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-L96XXJJFZQ')`}
        </Script>
      </head>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeRegistry>
          <body>
            <main
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Header>
                <></>
              </Header>

              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </body>
        </ThemeRegistry>
      </AppRouterCacheProvider>
    </html>
  );
}
