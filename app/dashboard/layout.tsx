'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- INLINE SVG ICONS ---
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 16 14"/></svg>
);
const FilePlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><line x1="12" x2="12" y1="18" y2="12"/><line x1="9" x2="15" y1="15" y2="15"/></svg>
);
const FileTextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
);
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#09090B] text-zinc-100 font-sans overflow-hidden">
      
      {/* SIDEBAR PERMANEN */}
      <aside className="w-[260px] border-r border-zinc-800/60 bg-[#09090B] flex flex-col justify-between p-4 shrink-0 overflow-y-auto">
        <div className="space-y-8">
          {/* LOGO */}
          <div className="flex items-center gap-3 px-2 pt-2">
            <div className="w-8 h-8 bg-white text-black font-black flex items-center justify-center rounded text-sm">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold text-white tracking-widest leading-tight">HADIRIN.</span>
              <span className="text-[9px] text-zinc-500 font-medium uppercase">SISWA PKL</span>
            </div>
          </div>

          {/* MENU UTAMA */}
          <div className="space-y-1.5">
            <span className="px-3 text-[10px] text-zinc-600 font-bold uppercase tracking-wider block mb-3">
              Menu Utama
            </span>
            {[
              { id: '/dashboard', label: 'Dashboard', icon: LayoutIcon },
              { id: '/dashboard/attendance', label: 'Riwayat Presensi', icon: ClockIcon },
              { id: '/dashboard/daily-report/create', label: '+ Buat Laporan', icon: FilePlusIcon },
              { id: '/dashboard/weekly-report', label: 'Weekly Report', icon: FileTextIcon },
              { id: '/dashboard/project', label: 'Project', icon: FolderIcon },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = item.id === '/dashboard' 
                ? pathname === '/dashboard' 
                : pathname.startsWith(item.id);

              return (
                <Link
                  key={item.id}
                  href={item.id}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                    isActive
                      ? 'bg-[#18181B] border border-zinc-800 text-zinc-100 font-medium shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 font-normal border border-transparent'
                  }`}
                >
                  <Icon />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* BOTTOM MENU */}
        <div className="space-y-1 mb-2">
          <Link 
            href="/dashboard/profile" 
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-xl transition-colors ${
              pathname === '/dashboard/profile'
                ? 'bg-[#18181B] border border-zinc-800 text-zinc-100 font-medium shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50 font-normal border border-transparent'
            }`}
          >
            <UserIcon />
            Profil & Pengaturan
          </Link>
          <Link
            href="/"
            className="w-full flex items-center gap-3 px-3 py-2 text-rose-500 hover:text-rose-400 text-sm font-medium rounded-xl hover:bg-zinc-900/50 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-[#18181B] border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
              A
            </div>
            Logout
          </Link>
        </div>
      </aside>

      {/* TEMPAT UNTUK KONTEN HALAMAN BERUBAH-UBAH */}
      <main className="flex-1 overflow-y-auto bg-[#09090B]">
        {children}
      </main>
    </div>
  );
}