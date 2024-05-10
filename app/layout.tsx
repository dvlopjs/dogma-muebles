import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import ThemeRegistry from "./theme/ThemeRegistry";
import { Footer } from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dogma Muebles",
  description: "Muebles de calidad a medida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeRegistry>
          <body>
            <main
              style={{
                paddingTop: 10,
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Header>
                <></>
              </Header>

              {children}
              <Footer />
            </main>
          </body>
        </ThemeRegistry>
      </AppRouterCacheProvider>
    </html>
  );
}
