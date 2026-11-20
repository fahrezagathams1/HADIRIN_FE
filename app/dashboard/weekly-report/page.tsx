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
    dateRange: '01 Agu - 05 Agu 2026',
    summary: 'Onboarding, penyiapan lingkungan Next.js, dan slicing komponen UI awal.',
    status: 'APPROVED',
    feedback: 'Kerja bagus! Lanjutkan konsistensinya di minggu depan.',
  },
  {
    id: '2',
    weekNumber: 2,
    dateRange: '08 Agu - 12 Agu 2026',
    summary: 'Pengembangan modul Laporan Harian, perbaikan bug layout, dan integrasi unggah berkas.',
    status: 'PENDING',
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function WeeklyReportPage() {
  const [reports] = useState<WeeklyReportItem[]>(INITIAL_REPORTS);

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6 pb-16">
      {/* Header & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-zinc-500 dark:text-zinc-400 font-medium mb-3">
            <Link href="/dashboard" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-zinc-100 font-semibold">Laporan Mingguan</span>
          </div>

          <h1 className="text-2xl font-bold text-blue-950 dark:text-blue-100 tracking-tight">Laporan Mingguan</h1>
          <p className="text-[13px] text-zinc-600 dark:text-zinc-400 mt-1">
            Pantau dan kirimkan rekapan aktivitas pengerjaan PKL kamu setiap minggu.
          </p>
        </div>

        <Link
          href="/dashboard/weekly-report/create"
          className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 border border-blue-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors self-start sm:self-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Buat Laporan Mingguan
        </Link>
      </div>

      {/* Report List */}
      <div className="space-y-4">
        {reports.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
          >
            <div className="space-y-3 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-xs font-mono font-semibold px-3 py-1 rounded-xl">
                  Minggu Ke-{item.weekNumber}
                </span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{item.dateRange}</span>
                <StatusBadge status={item.status} />
              </div>

              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                {item.summary}
              </p>

              {item.feedback && (
                <div className="p-3.5 bg-zinc-50 dark:bg-zinc-800 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">Catatan Pembimbing:</span> “{item.feedback}”
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-center border-t md:border-t-0 pt-4 md:pt-0 border-zinc-200 dark:border-zinc-800 w-full md:w-auto justify-end">
              <Link
                href={`/dashboard/weekly-report/${item.id}`}
                className="text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-blue-600 px-4 py-2 rounded-xl transition-colors"
              >
                Lihat Detail
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
        <span className="bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          Disetujui
        </span>
      );
    case 'PENDING':
      return (
        <span className="bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
          Menunggu Tinjauan
        </span>
      );
    case 'REJECTED':
      return (
        <span className="bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 text-[11px] font-semibold px-3 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
          Revisi
        </span>
      );
  }
}
