import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const cascadiaCodeFont = localFont({
  src: "../fonts/Cascadia_Code/CascadiaCode-VariableFont_wght.ttf",
  weight: "100 900",
  display: "swap",
  variable: "--font-cascadia",
});

export const metadata: Metadata = {
  title: "Portfolio | Frontend Developer",
  description:
    "Personal portfolio of Junior+ Frontend Developer built with Next.js, Tailwind v4 and FSD architecture.",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cascadiaCodeFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-cascadia text-white">
        {children}
      </body>
    </html>
  );
}
