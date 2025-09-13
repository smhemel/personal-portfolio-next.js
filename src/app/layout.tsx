import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S M HEMEL",
  description: "Portfolio of S M Hemel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className} suppressHydrationWarning={true}>
        <ThemeProvider enableSystem={true}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
