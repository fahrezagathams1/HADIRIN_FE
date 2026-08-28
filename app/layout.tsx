import './globals.css';

export const metadata = {
  title: 'Hadirin',
  description: 'Sistem Presensi & Laporan PKL',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-[#09090B] text-zinc-100 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}