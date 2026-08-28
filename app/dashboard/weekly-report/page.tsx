'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ==========================================
// TYPES
// ==========================================
interface WeeklyReportItem {
  id: string;
  weekNumber: number;
  dateRange: string;
  summary: string;
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
  feedback?: string;
}

const INITIAL_REPORTS: WeeklyReportItem[] = [
  {
    id: '1',
    weekNumber: 1,
    dateRange: '01 Aug - 05 Aug 2026',
    summary: 'Onboarding, setup environment Next.js, dan slicing komponen UI awal.',
    status: 'APPROVED',
    feedback: 'Kerja bagus! Lanjutkan konsistensinya di minggu depan.',
  },
  {
    id: '2',
    weekNumber: 2,
    dateRange: '08 Aug - 12 Aug 2026',
    summary: 'Pengembangan modul Daily Report, perbaikan bug layout, dan integrasi file upload.',
    status: 'PENDING',
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function WeeklyReportPage() {
  const [reports] = useState<WeeklyReportItem[]>(INITIAL_REPORTS);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Laporan Mingguan (Weekly Report)</h1>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            Pantau dan kirimkan rekapan aktivitas pengerjaan PKL kamu setiap minggu.
          </p>
        </div>
        <Link
          href="/dashboard/weekly-report/create"
          className="inline-flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-950 text-xs font-semibold px-4 py-2 rounded-md transition-none self-start sm:self-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Buat Weekly Report
        </Link>
      </div>

      {/* Report List */}
      <div className="space-y-4">
        {reports.map((item) => (
          <div
            key={item.id}
            className="bg-[#18181B] p-5 rounded-lg border border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 transition-none"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                  Minggu Ke-{item.weekNumber}
                </span>
                <span className="text-xs text-zinc-400 font-mono">{item.dateRange}</span>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans pt-1">
                {item.summary}
              </p>
              {item.feedback && (
                <div className="mt-2 p-3 bg-[#09090B] rounded-md border border-zinc-800/80 text-[11px] text-zinc-400 font-mono">
                  <span className="font-bold text-zinc-200">Catatan Pembimbing:</span> “{item.feedback}”
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-center border-t md:border-t-0 pt-3 md:pt-0 border-zinc-800/80 w-full md:w-auto justify-end">
              <Link
                href={`/dashboard/weekly-report/${item.id}`}
                className="text-xs font-mono font-semibold text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/60 px-3 py-1.5 rounded-md transition-none border border-zinc-800"
              >
                Lihat Detail →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: STATUS BADGE
// ==========================================
function StatusBadge({ status }: { status: WeeklyReportItem['status'] }) {
  switch (status) {
    case 'APPROVED':
      return (
        <span className="bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
          Disetujui
        </span>
      );
    case 'PENDING':
      return (
        <span className="bg-amber-950/60 text-amber-400 border border-amber-800/60 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
          Menunggu Review
        </span>
      );
    case 'REJECTED':
      return (
        <span className="bg-rose-950/60 text-rose-400 border border-rose-800/60 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
          Revisi
        </span>
      );
  }
}