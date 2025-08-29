// app/layout.tsx


import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub - Your Note Taking App",
  description: "Manage your notes efficiently with NoteHub",
};

export default function RootLayout({ 
  children,
  modal // Додаємо modal проп
}: { 
  children: React.ReactNode;
  modal: React.ReactNode; // Додаємо тип для modal
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal} {/* Додаємо modal сюди */}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}