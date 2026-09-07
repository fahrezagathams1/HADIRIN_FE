'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// --- INLINE SVG ICONS ---
const LayoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const CheckSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function MentorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Untuk mendeteksi halaman mana yang sedang aktif

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
              <span className="text-[9px] text-zinc-500 font-medium">PEMBIMBING PKL</span>
            </div>
          </div>

          {/* MENU UTAMA */}
          <div className="space-y-1.5">
            <span className="px-3 text-[10px] text-zinc-600 font-bold uppercase tracking-wider block mb-3">
              Menu Utama
            </span>
            {[
              { id: '/mentor', label: 'Dashboard', icon: LayoutIcon },
              { id: '/mentor/siswa', label: 'Siswa Bimbingan', icon: UsersIcon },
              { id: '/mentor/verifikasi', label: 'Verifikasi Laporan', icon: CheckSquareIcon },
              { id: '/mentor/presensi', label: 'Rekap Presensi', icon: ClockIcon },
              { id: '/mentor/penilaian', label: 'Penilaian Evaluasi', icon: StarIcon },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.id; 
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
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-200 text-sm font-normal rounded-xl hover:bg-zinc-900/50 transition-colors">
            <UserIcon />
            Profil & Pengaturan
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2 text-rose-500 hover:text-rose-400 text-sm font-medium rounded-xl hover:bg-zinc-900/50 transition-colors">
            <div className="w-6 h-6 rounded-full bg-[#18181B] border border-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
              B
            </div>
            Logout
          </button>
        </div>
      </aside>

      {/* TEMPAT UNTUK KONTEN HALAMAN BERUBAH-UBAH */}
      <main className="flex-1 overflow-y-auto bg-[#09090B]">
        {children}
      </main>
    </div>
  );
}