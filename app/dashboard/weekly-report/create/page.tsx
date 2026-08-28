'use client';

import React, { useState } from 'react';

export default function CreateWeeklyReportPage() {
  const [weeklySummary, setWeeklySummary] = useState('');
  const [blockers, setBlockers] = useState('');

  // Data Dummy untuk Statistik Senin - Sabtu (Bisa diambil otomatis dari database)
  const weeklyStats = [
    { day: 'Sen', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Sel', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Rab', status: 'Hadir', hours: 8.5, reportSubmitted: true },
    { day: 'Kam', status: 'Hadir', hours: 8, reportSubmitted: true },
    { day: 'Jum', status: 'Hadir', hours: 7.5, reportSubmitted: true },
    { day: 'Sab', status: 'Libur', hours: 0, reportSubmitted: false },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Weekly Report - Minggu 2</h1>
        <p className="text-xs font-mono text-zinc-400 mt-1">
          Periode: 08 Agu 2026 - 13 Agu 2026
        </p>
      </div>

      {/* SECTION 1: GRAFIK & STATISTIK OTOMATIS (SENIN - SABTU) */}
      <div className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 space-y-4">
        <h2 className="text-sm font-bold text-zinc-100">Rekapitulasi Kehadiran Mingguan</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-2">
          {weeklyStats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-[#09090B] p-3 rounded-md border border-zinc-800/80">
              <span className="text-xs font-mono font-bold text-zinc-300">{item.day}</span>
              <div className="w-full bg-zinc-900 h-16 rounded my-2 relative flex items-end overflow-hidden border border-zinc-800/50">
                <div 
                  className={`w-full transition-all ${item.hours > 0 ? 'bg-zinc-200' : 'bg-zinc-800'}`}
                  style={{ height: `${(item.hours / 9) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-mono font-semibold text-zinc-400">
                {item.hours > 0 ? `${item.hours} Jam` : '-'}
              </span>
              <span className={`text-[9px] mt-1 font-mono font-bold ${item.reportSubmitted ? 'text-emerald-400' : 'text-zinc-600'}`}>
                {item.reportSubmitted ? '✓ Laporan' : 'Tanpa Log'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: FORM CATATAN EVALUASI DARI SISWA */}
      <form onSubmit={(e) => e.preventDefault()} className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 space-y-5">
        <h2 className="text-sm font-bold text-zinc-100">Catatan Refleksi Mingguan</h2>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Rangkuman Pencapaian Utama Minggu Ini
          </label>
          <textarea
            rows={3}
            value={weeklySummary}
            onChange={(e) => setWeeklySummary(e.target.value)}
            placeholder="Contoh: Berhasil menyelesaikan slicing 3 halaman dashboard dan memperbaiki bug routing pada sidebar."
            className="w-full px-3.5 py-2.5 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 placeholder:text-zinc-600 transition-none font-sans resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Kendala Utama / Hal yang Perlu Diperbaiki (Opsional)
          </label>
          <textarea
            rows={2}
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
            placeholder="Contoh: Sempat kesulitan memahami alur Git Stash saat berpindah branch."
            className="w-full px-3.5 py-2.5 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 placeholder:text-zinc-600 transition-none font-sans resize-none"
          />
        </div>

        <div className="flex justify-end pt-2 border-t border-zinc-800/60">
          <button
            type="submit"
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-none"
          >
            Kirim Weekly Report
          </button>
        </div>
      </form>
    </div>
  );
}