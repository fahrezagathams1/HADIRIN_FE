import type { Metadata } from "next";
import "./globals.css";

// 1. Pengaturan Metadata untuk SEO & Tab Browser
export const metadata: Metadata = {
  title: "Hadirin - Sistem Manajemen PKL & Presensi",
  description: "Aplikasi jurnal harian, presensi, dan monitoring kegiatan PKL siswa.",
};

// 2. Root Layout Utama (Membungkus semua halaman)
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="h-full bg-slate-50 text-slate-900 antialiased font-sans selection:bg-blue-500 selection:text-white">
        {/* Konten dari page.tsx (Login / Dashboard) akan di-render di sini */}
        {children}
      </body>
    </html>
  );
}