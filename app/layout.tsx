import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import ThemeRegistry from "./theme/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
                paddingBottom: 10,
              }}
            >
              <Header>
                <></>
              </Header>

              {children}
            </main>
          </body>
        </ThemeRegistry>
      </AppRouterCacheProvider>
    </html>
  );
}
