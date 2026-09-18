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
    <div className="p-8 max-w-5xl mx-auto space-y-6 pb-16">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium mb-3">
            <Link href="/dashboard" className="hover:text-zinc-300 transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-zinc-300 font-semibold">Laporan Mingguan</span>
          </div>

          <h1 className="text-2xl font-bold text-white tracking-tight">Laporan Mingguan (Weekly Report)</h1>
          <p className="text-[13px] text-zinc-400 mt-1">
            Pantau dan kirimkan rekapan aktivitas pengerjaan PKL kamu setiap minggu.
          </p>
        </div>

        <Link
          href="/dashboard/weekly-report/create"
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-sm self-start sm:self-auto"
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
            className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-zinc-700/80 transition-all"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-[#18181B] text-zinc-200 border border-zinc-800 text-xs font-mono font-semibold px-3 py-1 rounded-xl">
                  Minggu Ke-{item.weekNumber}
                </span>
                <span className="text-xs text-zinc-400 font-mono">{item.dateRange}</span>
                <StatusBadge status={item.status} />
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                {item.summary}
              </p>

              {item.feedback && (
                <div className="p-3.5 bg-[#18181B] rounded-xl border border-zinc-800/80 text-xs text-zinc-300 font-sans">
                  <span className="font-semibold text-zinc-100">Catatan Pembimbing:</span> “{item.feedback}”
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-center border-t md:border-t-0 pt-4 md:pt-0 border-zinc-800/80 w-full md:w-auto justify-end">
              <Link
                href={`/dashboard/weekly-report/${item.id}`}
                className="text-xs font-semibold text-zinc-300 hover:text-white bg-[#18181B] hover:bg-zinc-800/80 px-4 py-2 rounded-xl transition-all border border-zinc-800"
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
        <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Disetujui
        </span>
      );
    case 'PENDING':
      return (
        <span className="bg-amber-950/40 text-amber-400 border border-amber-900/50 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Menunggu Review
        </span>
      );
    case 'REJECTED':
      return (
        <span className="bg-rose-950/40 text-rose-400 border border-rose-900/50 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
          Revisi
        </span>
      );
  }
}