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
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Laporan Mingguan (Weekly Report)</h1>
          <p className="text-xs text-slate-500 mt-1">
            Pantau dan kirimkan rekapan aktivitas pengerjaan PKL kamu setiap minggu.
          </p>
        </div>
        <Link
          href="/dashboard/weekly-report/create"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all self-start sm:self-auto"
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
            className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-all"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <span className="bg-slate-100 text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg">
                  Minggu Ke-{item.weekNumber}
                </span>
                <span className="text-xs text-slate-400 font-medium">{item.dateRange}</span>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {item.summary}
              </p>
              {item.feedback && (
                <div className="mt-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-600">
                  <span className="font-bold text-slate-800">Catatan Pembimbing:</span> “{item.feedback}”
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 self-end md:self-center border-t md:border-t-0 pt-3 md:pt-0 border-slate-100 w-full md:w-auto justify-end">
              <Link
                href={`/dashboard/weekly-report/${item.id}`}
                className="text-xs font-semibold text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
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
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[10px] font-bold px-2 py-0.5 rounded-md">
          Disetujui
        </span>
      );
    case 'PENDING':
      return (
        <span className="bg-amber-50 text-amber-700 border border-amber-200/60 text-[10px] font-bold px-2 py-0.5 rounded-md">
          Menunggu Review
        </span>
      );
    case 'REJECTED':
      return (
        <span className="bg-rose-50 text-rose-700 border border-rose-200/60 text-[10px] font-bold px-2 py-0.5 rounded-md">
          Revisi
        </span>
      );
  }
}