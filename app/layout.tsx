import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Inter-Bold.ttf",
      weight: "700",
      style: "bold"
    },
  ],
  variable: "--font-inter",
});

const ibmPlexSerif = localFont({
  src: [
    {
      path: "./fonts/IBMPlexSerif-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexSerif-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-ibm-plex-serif",
})

export const metadata: Metadata = {
  title: "ThebePay",
  description: "ThebePay is a modern banking platform for everyone",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
