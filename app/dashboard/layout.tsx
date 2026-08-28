'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ==========================================
// TYPES & NAV CONFIG
// ==========================================
interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const MAIN_MENU: MenuItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: 'Riwayat Presensi',
    href: '/dashboard/attendance',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: '+ Buat Laporan',
    href: '/dashboard/daily-report/create',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: 'Weekly Report',
    href: '/dashboard/weekly-report',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Project',
    href: '/dashboard/project',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10" />
      </svg>
    ),
  },
];

// ==========================================
// MAIN DASHBOARD LAYOUT
// ==========================================
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#09090B] flex text-zinc-100 font-sans antialiased">
      <Sidebar pathname={pathname} />
      <div className="pl-64 flex-1 flex flex-col min-h-screen">
        <main className="p-8 flex-1 bg-[#09090B]">{children}</main>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: SIDEBAR
// ==========================================
function Sidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="w-64 bg-[#18181B] border-r border-zinc-800 flex flex-col justify-between fixed h-full z-20">
      <div>
        {/* Brand Logo */}
        <div className="h-16 flex items-center px-6 border-b border-zinc-800 gap-3">
          <div className="w-8 h-8 bg-zinc-100 rounded-md flex items-center justify-center font-black text-zinc-950 text-sm">
            H
          </div>
          <div>
            <span className="text-sm font-bold text-zinc-100 tracking-tight block leading-none">
              HADIRIN<span className="text-zinc-500">.</span>
            </span>
            <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block mt-1">
              Siswa PKL
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          <p className="px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2 font-mono">
            Menu Utama
          </p>
          {MAIN_MENU.map((item) => {
            const isActive = item.href === '/dashboard' 
              ? pathname === '/dashboard' 
              : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-none ${
                  isActive
                    ? 'bg-[#27272A] text-zinc-100 font-semibold border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                }`}
              >
                <span className={isActive ? 'text-zinc-100' : 'text-zinc-400'}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Profile & Logout Footer */}
      <div className="p-4 border-t border-zinc-800 space-y-1">
        <Link
          href="/dashboard/profile"
          className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium transition-none ${
            pathname === '/dashboard/profile'
              ? 'bg-[#27272A] text-zinc-100 font-semibold border border-zinc-700/60'
              : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Profil & Pengaturan</span>
        </Link>

        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-xs font-medium text-rose-400 hover:bg-rose-950/20 hover:text-rose-300 border border-transparent hover:border-rose-900/40 transition-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}