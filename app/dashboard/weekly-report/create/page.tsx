'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CreateWeeklyReportPage() {
  const [weeklySummary, setWeeklySummary] = useState('');
  const [blockers, setBlockers] = useState('');

  // Data Dummy untuk Statistik Senin - Sabtu
  const weeklyStats = [
    { day: 'Sen', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Sel', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Rab', status: 'Hadir', hours: 8.5, reportSubmitted: true },
    { day: 'Kam', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Jum', status: 'Hadir', hours: 7.5, reportSubmitted: true },
    { day: 'Sab', status: 'Libur', hours: 0, reportSubmitted: false },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 pb-16">
      {/* Header & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium mb-3">
          <Link href="/dashboard" className="hover:text-zinc-300 transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <Link href="/dashboard/weekly-report" className="hover:text-zinc-300 transition-colors">
            Laporan Mingguan
          </Link>
          <span>/</span>
          <span className="text-zinc-300 font-semibold">Buat Report</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">Weekly Report - Minggu 2</h1>
        <p className="text-[13px] text-zinc-400 mt-1">
          Periode: <span className="font-mono text-zinc-200 font-medium">08 Agu 2026 - 13 Agu 2026</span>
        </p>
      </div>

      {/* SECTION 1: REKAPITULASI KEHADIRAN MINGGUAN */}
      <div className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
          <h2 className="text-sm font-bold text-white">Rekapitulasi Kehadiran Mingguan</h2>
          <span className="text-[11px] text-zinc-500 font-mono">Otomatis Terintegrasi</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-1">
          {weeklyStats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-[#18181B] p-3.5 rounded-xl border border-zinc-800/80"
            >
              <span className="text-xs font-mono font-bold text-zinc-300">{item.day}</span>
              
              <div className="w-full bg-[#121215] h-20 rounded-lg my-2 relative flex items-end overflow-hidden border border-zinc-800/60 p-1">
                <div
                  className={`w-full rounded transition-all ${
                    item.hours > 0 ? 'bg-zinc-200' : 'bg-zinc-800'
                  }`}
                  style={{ height: `${(item.hours / 9) * 100}%` }}
                />
              </div>

              <span className="text-[11px] font-mono font-semibold text-zinc-300">
                {item.hours > 0 ? `${item.hours} Jam` : '-'}
              </span>
              <span
                className={`text-[10px] mt-1 font-mono font-semibold ${
                  item.reportSubmitted ? 'text-emerald-400' : 'text-zinc-500'
                }`}
              >
                {item.reportSubmitted ? '✓ Laporan' : 'Tanpa Log'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: FORM CATATAN REFLEKSI MINGGUAN */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-5"
      >
        <h2 className="text-sm font-bold text-white border-b border-zinc-800/80 pb-3">
          Catatan Refleksi Mingguan
        </h2>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Rangkuman Pencapaian Utama Minggu Ini <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            value={weeklySummary}
            onChange={(e) => setWeeklySummary(e.target.value)}
            placeholder="Contoh: Berhasil menyelesaikan slicing 3 halaman dashboard dan memperbaiki bug routing pada sidebar."
            className="w-full px-4 py-2.5 text-xs bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-sans leading-relaxed transition-colors resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Kendala Utama / Hal yang Perlu Diperbaiki (Opsional)
          </label>
          <textarea
            rows={3}
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
            placeholder="Contoh: Sempat kesulitan memahami alur Git Stash saat berpindah branch."
            className="w-full px-4 py-2.5 text-xs bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-sans leading-relaxed transition-colors resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end items-center gap-3 pt-4 border-t border-zinc-800/80">
          <Link
            href="/dashboard/weekly-report"
            className="px-4 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-all rounded-xl"
          >
            Batal
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-sm"
          >
            Kirim Weekly Report
          </button>
        </div>
      </form>
    </div>
  );
}