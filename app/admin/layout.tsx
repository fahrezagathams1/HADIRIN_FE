// app/admin/layout.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      name: 'Data Siswa',
      href: '/admin/data-siswa',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      name: 'Verifikasi Laporan',
      href: '/admin/verifikasi',
      badge: '12',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'Mitra Industri',
      href: '/admin/industri',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Rekap & Export',
      href: '/admin/rekap',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] flex text-zinc-100 font-sans">

      {/* SIDEBAR: ABU-ABU GELAP MATTE (#18181B) */}
      <aside className="w-64 bg-[#18181B] border-r border-zinc-800 flex flex-col justify-between fixed h-full z-20">
        <div>
          {/* LOGO */}
          <div className="h-16 flex items-center px-6 border-b border-zinc-800 gap-3">
            <div className="w-8 h-8 bg-zinc-100 rounded-md flex items-center justify-center font-black text-zinc-900 text-sm">
              H
            </div>
            <div>
              <span className="text-sm font-black text-zinc-100 tracking-wider uppercase block leading-none">
                HADIRIN
              </span>
              <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase block mt-1">
                Panel Admin
              </span>
            </div>
          </div>

          {/* MENU NAVIGASI */}
          <nav className="p-4 space-y-1.5">
            <p className="px-3 text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Menu Utama
            </p>
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-md text-xs font-bold transition-none ${isActive
                      ? 'bg-[#27272A] text-white border-l-2 border-white'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                    }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-black bg-zinc-800 text-zinc-300 border border-zinc-700 rounded">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* LOGOUT */}
        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-3.5 py-2 rounded-md text-xs font-bold text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-none"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="pl-64 flex-1 flex flex-col min-h-screen">

        {/* TOP NAVBAR */}
        <header className="h-16 bg-[#18181B] border-b border-zinc-800 px-8 flex items-center justify-between sticky top-0 z-10">

          {/* SEARCH BAR */}
          <div className="w-96 relative">
            <input
              type="text"
              placeholder="Cari siswa, NISN, atau sekolah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 placeholder:text-zinc-500 font-medium"
            />
            <svg className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* AKUN ADMIN */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-zinc-400 hover:text-zinc-100 rounded-md transition-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" />
              </svg>
            </button>

            <div className="h-5 w-px bg-zinc-800"></div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-md flex items-center justify-center text-zinc-100 text-xs font-bold">
                AD
              </div>
              <div className="text-left">
                <span className="text-xs font-bold text-zinc-100 block leading-none">Admin Utama</span>
                <span className="text-[10px] text-zinc-400 block mt-1">admin@hadirin.id</span>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="p-8 flex-1 bg-[#09090B]">{children}</main>
      </div>

    </div>
  );
}