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
        <h1 className="text-2xl font-bold text-slate-900">Weekly Report - Minggu 2</h1>
        <p className="text-xs text-slate-500 mt-1">
          Periode: 08 Agu 2026 - 13 Agu 2026
        </p>
      </div>

      {/* SECTION 1: GRAFIK & STATISTIK OTOMATIS (SENIN - SABTU) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-800">Rekapitulasi Kehadiran Mingguan</h2>
        
        <div className="grid grid-cols-6 gap-2 pt-2">
          {weeklyStats.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-600">{item.day}</span>
              <div className="w-full bg-slate-200 h-16 rounded-lg my-2 relative flex items-end overflow-hidden">
                <div 
                  className={`w-full transition-all ${item.hours > 0 ? 'bg-blue-600' : 'bg-slate-300'}`}
                  style={{ height: `${(item.hours / 9) * 100}%` }}
                />
              </div>
              <span className="text-[10px] font-semibold text-slate-500">
                {item.hours > 0 ? `${item.hours} Jam` : '-'}
              </span>
              <span className={`text-[9px] mt-1 font-bold ${item.reportSubmitted ? 'text-emerald-600' : 'text-slate-400'}`}>
                {item.reportSubmitted ? '✓ Laporan' : 'Tanpa Log'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: FORM CATATAN EVALUASI DARI SISWA */}
      <form className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-800">Catatan Refleksi Mingguan</h2>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Rangkuman Pencapaian Utama Minggu Ini
          </label>
          <textarea
            rows={3}
            value={weeklySummary}
            onChange={(e) => setWeeklySummary(e.target.value)}
            placeholder="Contoh: Berhasil menyelesaikan slicing 3 halaman dashboard dan memperbaiki bug routing pada sidebar."
            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Kendala Utama / Hal yang Perlu Diperbaiki (Opsional)
          </label>
          <textarea
            rows={2}
            value={blockers}
            onChange={(e) => setBlockers(e.target.value)}
            placeholder="Contoh: Sempat kesulitan memahami alur Git Stash saat berpindah branch."
            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm"
          >
            Kirim Weekly Report
          </button>
        </div>
      </form>
    </div>
  );
}