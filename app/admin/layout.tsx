'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NotificationBell from './components/NotificationBell';

// --- INLINE SVG ICONS (Lucide Style - 18x18) ---
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { id: '/admin', label: 'Dashboard', icon: LayoutIcon },
    { id: '/admin/data-siswa', label: 'Data Siswa', icon: UsersIcon },
    { id: '/admin/industri', label: 'Mitra Industri', icon: BuildingIcon },
    { id: '/admin/rekap', label: 'Rekap & Ekspor', icon: FileTextIcon },
  ];

  return (
    <div className="flex h-screen bg-[#F4F4F5] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans overflow-hidden">
      {/* SIDEBAR PERMANEN */}
      <aside className="w-[260px] border-r border-blue-950 bg-blue-900 flex flex-col justify-between p-4 shrink-0 overflow-y-auto">
        <div className="space-y-8">
          {/* LOGO */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-8 h-8 bg-white text-blue-900 font-black flex items-center justify-center rounded text-sm">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-white tracking-widest leading-tight">HADIRIN.</span>
              <span className="text-[9px] text-blue-200 font-medium uppercase">PANEL ADMIN</span>
            </div>
          </div>

          {/* MENU UTAMA */}
          <div className="space-y-1.5">
            <span className="px-3 text-[10px] text-blue-200 font-bold uppercase tracking-wider block mb-3">
              Menu Utama
            </span>
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                    isActive
                      ? 'bg-white dark:bg-zinc-900 text-blue-900 dark:text-blue-200 font-medium shadow-sm border border-transparent'
                      : 'text-blue-100 hover:text-white hover:bg-white/10 font-normal border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon />
                    <span>{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MENU */}
        <div className="space-y-1 mb-2">
          <Link
            href="/admin/profil"
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm transition-colors rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
              pathname === '/admin/profil'
                ? 'bg-white dark:bg-zinc-900 text-blue-900 dark:text-blue-200 font-medium shadow-sm border border-transparent'
                : 'text-blue-100 hover:text-white hover:bg-white/10 font-normal border border-transparent'
            }`}
          >
            <UserIcon />
            Profil & Pengaturan
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-rose-300 hover:text-rose-200 text-sm font-medium rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
              A
            </div>
            Keluar
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col h-full overflow-hidden bg-[#F4F4F5] dark:bg-zinc-950">
        {/* TOP NAVBAR */}
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-8 flex items-center justify-between shrink-0">
          {/* SEARCH BAR */}
          <div className="w-80 relative">
            <input
              type="text"
              placeholder="Cari siswa, NISN, atau instansi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl focus:outline-none focus:border-blue-500 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 font-normal"
            />
            <div className="absolute left-3 top-2.5 text-zinc-400 dark:text-zinc-500">
              <SearchIcon />
            </div>
          </div>

          {/* AKUN & NOTIFIKASI ADMIN */}
          <div className="flex items-center gap-4">
            <NotificationBell />

            <div aria-hidden="true" className="h-5 w-px bg-zinc-200 dark:bg-zinc-700" />

            <Link href="/admin/profil" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-blue-900 border border-blue-800 rounded-xl flex items-center justify-center text-white text-xs font-bold">
                AD
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 block leading-none">Admin Utama</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mt-1">admin@hadirin.id</span>
              </div>
            </Link>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-8 bg-[#F4F4F5] dark:bg-zinc-950">
          {children}
        </main>
      </div>
    </div>
  );
}
