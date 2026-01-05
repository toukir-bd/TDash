import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Dashboard OV System",
  description: "Fully customizable dashboard for reusable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
