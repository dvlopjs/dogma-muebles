import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import ThemeRegistry from "./theme/ThemeRegistry";
import { Footer } from "./components/Footer/Footer";
import Head from "next/head";

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
      <Head>
        {/* Agrega la meta etiqueta de verificación de Google Search Console */}
        <meta
          name="google-site-verification"
          content="google-site-verification=XvOJpp89aZQSzdYMXQ4N_G2dVn2goCRdB3SG5mM6yk4"
        />
      </Head>
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
          </body>
        </ThemeRegistry>
      </AppRouterCacheProvider>
    </html>
  );
}
