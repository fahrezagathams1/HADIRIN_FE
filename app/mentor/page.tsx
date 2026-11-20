'use client';

import React from 'react';
import Link from 'next/link';

export default function MentorDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">

      {/* HEADER / BREADCRUMB */}
      <div className="space-y-1.5 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="text-[13px] text-zinc-500 dark:text-zinc-400">
          Pembimbing <span className="mx-1.5 text-zinc-400 dark:text-zinc-600">/</span> Ringkasan
        </div>
        <h1 className="text-2xl font-bold text-blue-950 dark:text-blue-100 tracking-tight flex items-center gap-2">
          Selamat datang kembali, Budi Pratama, S.Kom! <span className="text-xl">👋</span>
        </h1>
        <p className="text-[13px] text-zinc-600 dark:text-zinc-400">
          Status PKL: <span className="text-zinc-900 dark:text-zinc-100 font-medium">PT A Indonesia — Pembimbing Lapangan</span>
        </p>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-600 dark:text-zinc-400">Total Siswa Bimbingan</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-blue-950 dark:text-blue-100">4 Siswa</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Aktif PKL
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-600 dark:text-zinc-400">Perlu Verifikasi</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-blue-950 dark:text-blue-100">2 Laporan</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
              Perlu Tindakan
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-600 dark:text-zinc-400">Kehadiran Hari Ini</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-blue-950 dark:text-blue-100">100%</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
              4/4 Hadir
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-600 dark:text-zinc-400">Rata-rata Evaluasi</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-blue-950 dark:text-blue-100">88 / 100</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Nilai A
            </span>
          </div>
        </div>
      </div>

      {/* TWO COLUMNS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* KIRI: LAPORAN HARIAN TERBARU */}
        <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Laporan Harian Siswa Terbaru
            </h2>
            <Link href="/mentor/verifikasi" className="text-[13px] font-medium text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1" >
              Lihat Semua
            </Link>
          </div>

          <div className="space-y-3">
            <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl p-4 flex items-center justify-between transition-colors">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Adriel Nararya <span className="text-[11px] font-normal text-zinc-500 dark:text-zinc-400 ml-1">(SMKN 1 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-700 dark:text-zinc-300">Slicing UI Next.js & Tailwind</p>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">28 Agu 2026</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">
                Setujui
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl p-4 flex items-center justify-between transition-colors">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Dina Mariana <span className="text-[11px] font-normal text-zinc-500 dark:text-zinc-400 ml-1">(SMKN 4 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-700 dark:text-zinc-300">Integrasi API Auth JWT</p>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">28 Agu 2026</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors">
                Setujui
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 flex items-center justify-between opacity-70">
              <div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">Siti Rahma <span className="text-[11px] font-normal text-zinc-500 dark:text-zinc-400 ml-1">(SMKN 2 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-700 dark:text-zinc-300">Setup Database PostgreSQL</p>
                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-1">27 Agu 2026</span>
              </div>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Disetujui
              </span>
            </div>
          </div>
        </div>

        {/* KANAN: PRESENSI HARI INI */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[12px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Presensi Hari Ini
              </h2>
              <span className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Langsung
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-100">Adriel Nararya</h3>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">07:45 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-100">Dina Mariana</h3>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">07:50 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-200 dark:border-zinc-800">
                <div>
                  <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-100">Siti Rahma</h3>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">08:00 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-[13px] font-bold text-zinc-900 dark:text-zinc-100">Budi Kurnia</h3>
                  <span className="text-[11px] text-zinc-500 dark:text-zinc-400">-</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  Izin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
