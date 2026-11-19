import './globals.css';
import { ThemeProvider } from './components/theme-provider';

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
    <html lang="id" suppressHydrationWarning>
      <body className="bg-[#F4F4F5] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}