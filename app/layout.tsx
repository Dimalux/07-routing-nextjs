// app/layout.tsx



// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/Header/Header";
// import Footer from "@/components/Footer/Footer";
// import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "NoteHub - Your Note Taking App",
//   description: "Manage your notes efficiently with NoteHub",
// };

// export default function RootLayout({
//   children,
//   modal // Додаємо modal проп
// }: {
//   children: React.ReactNode;
//   modal: React.ReactNode; // Додаємо тип для modal
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <TanStackProvider>
//           <Header />
//           <main>
//             {children}
//             {modal}
//           </main>
//           <Footer />
//         </TanStackProvider>
//       </body>
//     </html>
//   );
// }






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
  modal,
  sidebar 
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  // sidebar: React.ReactNode; 
  sidebar?: React.ReactNode; // ← Зробити опціональним


}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside style={{ width: '250px', background: '#f5f5f5', padding: '20px' }}>
              {sidebar}
            </aside>
            <main style={{ flex: 1, padding: '20px' }}>
              {children}
            </main>
          </div>
          {modal}
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}