import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T-MINUS Keypad",
  description: "Keypad for T-MINUS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-digital text-white antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
