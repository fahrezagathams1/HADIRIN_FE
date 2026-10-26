'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// ==========================================
// INLINE SVG ICONS
// ==========================================
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);

// ==========================================
// TYPES & INTERFACES
// ==========================================
export type WeeklyStatus = 'DISETUJUI' | 'MENUNGGU' | 'REVISI';

export interface WeeklyComment {
  id: string;
  senderName: string;
  senderRole: 'MENTOR' | 'SISWA';
  avatarColor: string;
  message: string;
  createdAt: string;
}

export interface WeeklyReportDetail {
  id: string;
  weekLabel: string;
  dateRange: string;
  submittedAt: string;
  projectName: string;
  activities: string;
  challenges: string;
  nextPlan: string;
  status: WeeklyStatus;
}

// ==========================================
// DUMMY INITIAL DATA
// ==========================================
const INITIAL_WEEKLY_DATA: WeeklyReportDetail = {
  id: 'week-1',
  weekLabel: 'Minggu Ke-1',
  dateRange: '01 Aug - 05 Aug 2026',
  submittedAt: '05 Agustus 2026, 16:30 WIB',
  projectName: 'Sistem Presensi Hadirin v1.0',
  activities: `- Onboarding dan pengenalan alur kerja tim PKL\n- Setup environment project Next.js dan Tailwind CSS\n- Melakukan slicing komponen UI awal untuk halaman dashboard dan presensi`,
  challenges: `Sempat mengalami kendala konfigurasi package Tailwind pada awal setup, namun berhasil diselesaikan dengan membaca dokumentasi resmi.`,
  nextPlan: `- Melanjutkan pengembangan fitur Laporan Harian (Daily Report)\n- Integrasi form input dengan state management`,
  status: 'DISETUJUI',
};

const INITIAL_COMMENTS: WeeklyComment[] = [
  {
    id: 'comm-w1',
    senderName: 'Budi Santoso, S.Kom',
    senderRole: 'MENTOR',
    avatarColor: 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50',
    message: 'Kerja bagus! Lanjutkan konsistensinya di minggu depan.',
    createdAt: '06 Aug 2026, 09:15 WIB',
  },
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function WeeklyReportDetailPage() {
  const params = useParams();
  const currentId = (params?.id as string) || INITIAL_WEEKLY_DATA.id;

  // States
  const [report] = useState<WeeklyReportDetail>({
    ...INITIAL_WEEKLY_DATA,
    id: currentId,
  });
  const [comments, setComments] = useState<WeeklyComment[]>(INITIAL_COMMENTS);
  const [inputMessage, setInputMessage] = useState('');

  // Handlers
  const handleSendComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputMessage.trim()) return;

    const newComment: WeeklyComment = {
      id: `comm-${Date.now()}`,
      senderName: 'Adriel Nararya',
      senderRole: 'SISWA',
      avatarColor: 'bg-zinc-800 text-zinc-200 border border-zinc-700/80',
      message: inputMessage.trim(),
      createdAt: 'Baru saja',
    };

    setComments((prev) => [...prev, newComment]);
    setInputMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      {/* 1. HEADER & NAVIGATION */}
      <PageHeader report={report} />

      {/* 2. MAIN REPORT CONTENT */}
      <WeeklyContentCard report={report} />

      {/* 3. COMMENTS & DISCUSSION SECTION */}
      <DiscussionSection
        comments={comments}
        inputMessage={inputMessage}
        onInputChange={setInputMessage}
        onSubmit={handleSendComment}
      />
    </div>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

function PageHeader({ report }: { report: WeeklyReportDetail }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/60 pb-6">
      <div className="space-y-1.5">
        <Link
          href="/dashboard/weekly-report"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeftIcon />
          <span>Kembali ke Laporan Mingguan</span>
        </Link>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Detail {report.weekLabel} ({report.dateRange})
        </h1>
        <p className="text-[13px] text-zinc-400">
          Dikirim pada <span className="font-mono text-zinc-200">{report.submittedAt}</span> • Project:{' '}
          <span className="font-semibold text-zinc-200">{report.projectName}</span>
        </p>
      </div>

      <StatusBadge status={report.status} />
    </div>
  );
}

function StatusBadge({ status }: { status: WeeklyStatus }) {
  const badgeConfig = {
    DISETUJUI: {
      label: 'DISETUJUI',
      bg: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-400',
    },
    MENUNGGU: {
      label: 'MENUNGGU REVIEW',
      bg: 'bg-amber-950/40 border-amber-900/50 text-amber-400',
    },
    REVISI: {
      label: 'PERLU REVISI',
      bg: 'bg-rose-950/40 border-rose-900/50 text-rose-400',
    },
  };

  const current = badgeConfig[status];

  return (
    <div>
      <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[11px] font-medium border font-mono ${current.bg}`}>
        {current.label}
      </span>
    </div>
  );
}

function WeeklyContentCard({ report }: { report: WeeklyReportDetail }) {
  const isApproved = report.status === 'DISETUJUI';

  return (
    <div className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-6">
      <div className="border-b border-zinc-800/80 pb-4">
        <h2 className="text-[14px] font-bold text-white">Ringkasan Aktivitas Mingguan</h2>
        <p className="text-[12px] text-zinc-500 mt-0.5">Detail pencapaian, kendala, dan rencana pengerjaan minggu ini.</p>
      </div>

      {/* Aktivitas Utama */}
      <div className="space-y-2">
        <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Pencapaian & Aktivitas</h2>
        <div className="p-4 bg-[#18181B] rounded-xl border border-zinc-800/80 text-[13px] text-zinc-200 leading-relaxed whitespace-pre-line font-mono">
          {report.activities}
        </div>
      </div>

      {/* Kendala */}
      <div className="space-y-2">
        <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Kendala / Hambatan</h2>
        <p className="text-[13px] text-zinc-300 bg-[#18181B] p-4 rounded-xl border border-zinc-800/80 font-sans leading-relaxed">
          {report.challenges}
        </p>
      </div>

      {/* Rencana Minggu Depan */}
      <div className="space-y-2">
        <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Rencana Minggu Depan</h2>
        <div className="p-4 bg-[#18181B] rounded-xl border border-zinc-800/80 text-[13px] text-zinc-200 leading-relaxed whitespace-pre-line font-mono">
          {report.nextPlan}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-[12px] text-zinc-500">
          {isApproved
            ? 'Laporan mingguan ini telah disetujui oleh mentor.'
            : 'Anda dapat melakukan perubahan jika terdapat catatan revisi.'}
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/weekly-report"
            className="px-4 py-2 text-[12px] font-medium text-zinc-400 bg-[#18181B] hover:text-white border border-zinc-800 rounded-xl transition-all"
          >
            Kembali
          </Link>
          <button
            disabled={isApproved}
            className="px-4 py-2 text-[12px] font-medium text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800/80 disabled:cursor-not-allowed rounded-xl transition-all shadow-sm"
          >
            Edit Weekly Report
          </button>
        </div>
      </div>
    </div>
  );
}

function DiscussionSection({
  comments,
  inputMessage,
  onInputChange,
  onSubmit,
}: {
  comments: WeeklyComment[];
  inputMessage: string;
  onInputChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-5">
      <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
        <h2 className="text-[14px] font-bold text-white">Catatan & Diskusi Mentor</h2>
        <span className="px-2.5 py-1 text-[11px] font-mono bg-[#18181B] text-zinc-400 rounded-lg border border-zinc-800">
          {comments.length} Pesan
        </span>
      </div>

      {/* List Diskusi */}
      <div className="space-y-3">
        {comments.map((item) => (
          <div key={item.id} className="flex gap-3 text-[13px]">
            <div
              className={`w-8 h-8 rounded-xl ${item.avatarColor} flex items-center justify-center font-bold flex-shrink-0 text-[11px] font-mono`}
            >
              {item.senderRole === 'MENTOR' ? 'M' : 'S'}
            </div>
            <div className="space-y-1 bg-[#18181B] p-4 rounded-xl border border-zinc-800/80 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200">
                  {item.senderName} <span className="text-[11px] font-mono text-zinc-500 font-normal">({item.senderRole})</span>
                </span>
                <span className="text-[11px] text-zinc-500 font-mono">{item.createdAt}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed font-sans">{item.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form Balasan */}
      <form onSubmit={onSubmit} className="pt-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Tulis balasan atau tanggapan..."
          value={inputMessage}
          onChange={(e) => onInputChange(e.target.value)}
          className="flex-1 px-4 py-2 text-[13px] bg-[#18181B] border border-zinc-800/80 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors font-sans"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-sm"
        >
          <span>Kirim</span>
          <SendIcon />
        </button>
      </form>
    </div>
  );
}