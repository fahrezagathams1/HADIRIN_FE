'use client';

import React from 'react';

export default function MentorDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER / BREADCRUMB */}
      <div className="space-y-1.5 border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Pembimbing <span className="mx-1.5 text-zinc-700">/</span> Overview
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          Welcome back, Budi Pratama, S.Kom! <span className="text-xl">👋</span>
        </h1>
        <p className="text-[13px] text-zinc-400">
          Status PKL: <span className="text-zinc-200 font-medium">PT A Indonesia — Pembimbing Lapangan</span>
        </p>
      </div>

      {/* 4 STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-400">Total Siswa Bimbingan</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-white">4 Siswa</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-950/50 text-emerald-400 border border-emerald-900/50">
              Aktif PKL
            </span>
          </div>
        </div>

        <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-400">Perlu Verifikasi</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-white">2 Laporan</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-amber-950/50 text-amber-400 border border-amber-900/50">
              Perlu Action
            </span>
          </div>
        </div>

        <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-400">Kehadiran Hari Ini</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-[#18181B] text-zinc-300 border border-zinc-700/50">
              4/4 Hadir
            </span>
          </div>
        </div>

        <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 flex flex-col justify-between min-h-[110px]">
          <span className="text-[13px] text-zinc-400">Rata-rata Evaluasi</span>
          <div className="flex items-end justify-between mt-2">
            <span className="text-2xl font-bold text-white">88 / 100</span>
            <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-950/50 text-emerald-400 border border-emerald-900/50">
              Grade A
            </span>
          </div>
        </div>
      </div>

      {/* TWO COLUMNS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* KIRI: LAPORAN HARIAN TERBARU */}
        <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6 flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">
              Laporan Harian Siswa Terbaru
            </h2>
            <button className="text-[13px] font-medium text-cyan-400 hover:text-cyan-300">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-3">
            <div className="bg-[#09090B] border border-zinc-800/80 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">Adriel Nararya <span className="text-[11px] font-normal text-zinc-500 ml-1">(SMKN 1 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-300">Slicing UI Next.js & Tailwind</p>
                <span className="text-[11px] text-zinc-500 block mt-1">28 Agu 2026</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/60 hover:bg-emerald-900/60 transition-colors">
                Setujui
              </button>
            </div>

            <div className="bg-[#09090B] border border-zinc-800/80 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">Dina Mariana <span className="text-[11px] font-normal text-zinc-500 ml-1">(SMKN 4 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-300">Integrasi API Auth JWT</p>
                <span className="text-[11px] text-zinc-500 block mt-1">28 Agu 2026</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/60 hover:bg-emerald-900/60 transition-colors">
                Setujui
              </button>
            </div>

            <div className="bg-[#09090B] border border-zinc-800/80 rounded-xl p-4 flex items-center justify-between opacity-70">
              <div>
                <h3 className="text-sm font-bold text-white mb-0.5">Siti Rahma <span className="text-[11px] font-normal text-zinc-500 ml-1">(SMKN 2 Bandung)</span></h3>
                <p className="text-[13px] text-zinc-300">Setup Database PostgreSQL</p>
                <span className="text-[11px] text-zinc-500 block mt-1">27 Agu 2026</span>
              </div>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium text-blue-400 border border-blue-900/60">
                Disetujui
              </span>
            </div>
          </div>
        </div>

        {/* KANAN: PRESENSI HARI INI */}
        <div className="space-y-6">
          <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">
                Presensi Hari Ini
              </h2>
              <span className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-900/40">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Realtime
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                <div>
                  <h3 className="text-[13px] font-bold text-white">Adriel Nararya</h3>
                  <span className="text-[11px] text-zinc-500">07:45 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                <div>
                  <h3 className="text-[13px] font-bold text-white">Dina Mariana</h3>
                  <span className="text-[11px] text-zinc-500">07:50 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
                <div>
                  <h3 className="text-[13px] font-bold text-white">Siti Rahma</h3>
                  <span className="text-[11px] text-zinc-500">08:00 WIB</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">
                  Hadir
                </span>
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <h3 className="text-[13px] font-bold text-white">Budi Kurnia</h3>
                  <span className="text-[11px] text-zinc-500">-</span>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-medium bg-amber-950/40 text-amber-400 border border-amber-900/50">
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