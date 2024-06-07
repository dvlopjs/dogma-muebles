import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Script from "next/script";
import ThemeRegistry from "./theme/ThemeRegistry";
import { Footer } from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Dogma Muebles",
  description:
    "Fabrica dedicada al diseño, construccion e instalacion de muebles estandares y a medida en melamina. Tomando en cuenta dos conceptos claves, la calidad y el diseño que aplicamos en todos nuestros productos. Buscamos resolver las necesidades de nuestros clientes para cada espacio de su hogar o trabajo.",
  openGraph: {
    title: "Dogma Muebles",
    description:
      "Fabrica dedicada al diseño, construccion e instalacion de muebles estandares y a medida en melamina. Tomando en cuenta dos conceptos claves, la calidad y el diseño que aplicamos en todos nuestros productos. Buscamos resolver las necesidades de nuestros clientes para cada espacio de su hogar o trabajo",
    url: "https://dogmamuebles.vercel.app/",
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
        <link rel="canonical" href="https://dogmamuebles.vercel.app/" />
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
