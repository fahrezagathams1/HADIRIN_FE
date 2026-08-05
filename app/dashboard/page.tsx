'use client';

import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      
      {/* BREADCRUMB & HEADER TITLE */}
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-slate-700 font-medium">Overview</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome back, Adriel Nararya! 👋
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Status PKL: <span className="font-semibold text-slate-800">PT A Indonesia</span> — Divisi Digital Service
        </p>
      </div>

      {/* 4 CARDS STATISTIK UTAMA */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-slate-500">Total Kehadiran</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-slate-900">14 Hari</h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
              95% Valid
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-slate-500">Laporan Harian</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-slate-900">42 / 45</h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
              Disetujui
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-slate-500">Progress Project</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-slate-900">78%</h3>
            <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
              On Track
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
          <p className="text-xs font-semibold text-slate-500">Nilai Evaluasi</p>
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold text-slate-900">88 / 100</h3>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
              Grade A
            </span>
          </div>
        </div>

      </div>

      {/* GRID KONTEN SISI BAWAH */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* KOLOM KIRI */}
        <div className="space-y-6">
          
          {/* PRESENSI HARI INI */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Presensi Hari Ini
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Hadir
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <p className="text-slate-400 font-medium">Jam Masuk</p>
                <p className="text-slate-800 font-bold text-sm mt-0.5">07:45 WIB</p>
              </div>
              <div>
                <p className="text-slate-400 font-medium">Lokasi GPS</p>
                <p className="text-slate-800 font-semibold mt-0.5">Office Area (Valid)</p>
              </div>
            </div>
          </div>

          {/* LAPORAN HARIAN TERBARU */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Laporan Harian Terbaru
              </h3>
              <button className="text-xs font-semibold text-blue-600 hover:underline">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-2.5">
              
              {/* Item 1 */}
              <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100 text-xs">
                <div>
                  <p className="font-semibold text-slate-800">Slicing UI Next.js & Tailwind</p>
                  <p className="text-slate-400 text-[11px]">24 Jul 2026</p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold text-[11px] rounded-md">
                  Disetujui
                </span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-3 bg-slate-50/80 rounded-lg border border-slate-100 text-xs">
                <div>
                  <p className="font-semibold text-slate-800">Integrasi API Auth JWT</p>
                  <p className="text-slate-400 text-[11px]">23 Jul 2026</p>
                </div>
                <span className="px-2.5 py-1 bg-amber-100 text-amber-800 font-semibold text-[11px] rounded-md">
                  Menunggu Review
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* KOLOM KANAN */}
        <div className="space-y-6">
          
          {/* MENTOR PEMBIMBING */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-3">
              Mentor Pembimbing
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center font-bold text-slate-700 text-sm">
                  BP
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Budi Pratama, S.Kom</h4>
                  <p className="text-[11px] text-slate-500">Senior UI/UX Designer</p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-all shadow-sm">
                Chat Mentor
              </button>
            </div>
          </div>

          {/* TIMELINE AKTIVITAS */}
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-3">
              Timeline Aktivitas
            </h3>

            <div className="relative pl-5 border-l-2 border-slate-200 space-y-4 text-xs">
              
              <div className="relative">
                <span className="w-3 h-3 bg-blue-600 rounded-full absolute -left-[27px] top-0.5 ring-4 ring-white"></span>
                <p className="font-semibold text-slate-800">10:00 WIB - Laporan 24 Jul Disetujui</p>
                <p className="text-slate-400 text-[11px]">Mentor menyetujui jurnal laporan harian kamu.</p>
              </div>

              <div className="relative">
                <span className="w-3 h-3 bg-emerald-500 rounded-full absolute -left-[27px] top-0.5 ring-4 ring-white"></span>
                <p className="font-semibold text-slate-800">07:45 WIB - Presensi Masuk Berhasil</p>
                <p className="text-slate-400 text-[11px]">Absensi harian tercatat di area kantor.</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}