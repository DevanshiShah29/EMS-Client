import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const dmSans = DM_Sans({
  display: "swap",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Evently",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} antialiased`}
      >
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
