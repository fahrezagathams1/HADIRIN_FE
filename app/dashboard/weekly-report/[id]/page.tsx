'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// ==========================================
// TYPES & INTERFACES
// ==========================================
export type WeeklyStatus = 'APPROVED' | 'PENDING' | 'REJECTED';

export interface WeeklyCommentItem {
  id: string;
  senderName: string;
  senderRole: 'MENTOR' | 'SISWA';
  avatarColor: string;
  message: string;
  createdAt: string;
}

export interface WeeklyReportDetail {
  id: string;
  weekNumber: number;
  dateRange: string;
  submittedAt: string;
  summary: string;
  challenges?: string;
  planNextWeek?: string;
  status: WeeklyStatus;
  feedback?: string;
}

// ==========================================
// DUMMY INITIAL DATA
// ==========================================
const INITIAL_WEEKLY_DATA: WeeklyReportDetail = {
  id: '1',
  weekNumber: 1,
  dateRange: '01 Aug - 05 Aug 2026',
  submittedAt: '05 Aug 2026, 16:30 WIB',
  summary: 'Onboarding, setup environment Next.js, dan slicing komponen UI awal untuk dashboard admin serta modul siswa.',
  challenges: 'Sempat mengalami sedikit kendala pada konfigurasi Tailwind CSS dan pengaturan routing awal.',
  planNextWeek: 'Melanjutkan pengembangan modul Daily Report dan integrasi API backend.',
  status: 'PENDING',
  feedback: 'Kerja bagus! Lanjutkan konsistensinya di minggu depan.',
};

const INITIAL_COMMENTS: WeeklyCommentItem[] = [
  {
    id: 'comm-1',
    senderName: 'Budi Santoso, S.Kom',
    senderRole: 'MENTOR',
    avatarColor: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    message: 'Kerja bagus! Lanjutkan konsistensinya di minggu depan.',
    createdAt: '05 Aug 2026, 17:00 WIB',
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
  const [comments, setComments] = useState<WeeklyCommentItem[]>(INITIAL_COMMENTS);
  const [inputMessage, setInputMessage] = useState('');

  // Handlers untuk kirim pesan/diskusi
  const handleSendComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputMessage.trim()) return;

    const newComment: WeeklyCommentItem = {
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
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8 pb-16">
      {/* 1. HEADER & NAVIGATION */}
      <PageHeader report={report} />

      {/* 2. MAIN REPORT DETAILS */}
      <WeeklyReportContentCard report={report} />

      {/* 3. COMMENTS & DISCUSSION SECTION */}
      <WeeklyDiscussionSection
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

/** Header Halaman & Navigasi */
function PageHeader({ report }: { report: WeeklyReportDetail }) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-zinc-800/60 pb-6">
      <div className="text-[13px] text-zinc-500">
        <Link href="/dashboard/weekly-report" className="hover:text-zinc-300 transition-colors">
          Laporan Mingguan
        </Link>
        <span className="mx-1.5 text-zinc-700">/</span> Detail Laporan Mingguan
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Rekap Laporan Minggu Ke-{report.weekNumber}
          </h1>
          <p className="text-[13px] text-zinc-400 mt-1">
            Periode: <span className="text-zinc-200">{report.dateRange}</span> • Dikirim pada{' '}
            <span className="text-zinc-200">{report.submittedAt}</span>
          </p>
        </div>

        <WeeklyStatusBadge status={report.status} />
      </div>
    </div>
  );
}

/** Badge Status Weekly Report */
function WeeklyStatusBadge({ status }: { status: WeeklyStatus }) {
  const badgeConfig = {
    APPROVED: {
      label: 'Disetujui',
      bg: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-400',
      dot: 'bg-emerald-400',
    },
    PENDING: {
      label: 'Menunggu Review',
      bg: 'bg-amber-950/40 border-amber-900/50 text-amber-400',
      dot: 'bg-amber-400',
    },
    REJECTED: {
      label: 'Revisi',
      bg: 'bg-rose-950/40 border-rose-900/50 text-rose-400',
      dot: 'bg-rose-400',
    },
  };

  const current = badgeConfig[status];

  return (
    <div>
      <span className={`px-3 py-1.5 text-[12px] font-semibold border rounded-xl flex items-center gap-2 ${current.bg}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
        {current.label}
      </span>
    </div>
  );
}

/** Kartu Detail Laporan Mingguan */
function WeeklyReportContentCard({ report }: { report: WeeklyReportDetail }) {
  const isApproved = report.status === 'APPROVED';

  return (
    <div className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden">
      {/* CARD HEADER */}
      <div className="px-6 py-4 border-b border-zinc-800/80">
        <h2 className="text-[14px] font-bold text-white">
          Informasi & Rekap Mingguan
        </h2>
        <p className="text-[11px] text-zinc-500 mt-1">
          Rincian progres, kendala, dan rencana pengerjaan PKL kamu.
        </p>
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 space-y-6">
        {/* Ringkasan Aktivitas */}
        <div className="space-y-2">
          <label className="block text-[12px] text-zinc-400 font-medium">
            Ringkasan Aktivitas Mingguan
          </label>
          <div className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl text-zinc-100 font-sans leading-relaxed">
            {report.summary}
          </div>
        </div>

        {/* Kendala / Hambatan */}
        {report.challenges && (
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Kendala / Hambatan
            </label>
            <div className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl text-zinc-300 font-sans leading-relaxed">
              {report.challenges}
            </div>
          </div>
        )}

        {/* Rencana Minggu Depan */}
        {report.planNextWeek && (
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Rencana Minggu Depan
            </label>
            <div className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl text-zinc-300 font-sans leading-relaxed">
              {report.planNextWeek}
            </div>
          </div>
        )}
      </div>

      {/* ACTION FOOTER */}
      <div className="px-6 py-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-[12px] text-zinc-500">
          {isApproved
            ? 'Laporan mingguan ini telah disetujui oleh pembimbing.'
            : 'Anda dapat memperbarui laporan jika ada catatan revisi.'}
        </p>

        {isApproved ? (
          <button
            disabled
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 text-zinc-600 border border-zinc-800/60 cursor-not-allowed text-[12px] font-semibold"
          >
            Edit Laporan Mingguan
          </button>
        ) : (
          <Link
            href={`/dashboard/weekly-report/${report.id}/edit`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-all text-[12px] font-semibold"
          >
            Edit Laporan Mingguan
          </Link>
        )}
      </div>
    </div>
  );
}

/** Section Diskusi & Catatan Pembimbing */
function WeeklyDiscussionSection({
  comments,
  inputMessage,
  onInputChange,
  onSubmit,
}: {
  comments: WeeklyCommentItem[];
  inputMessage: string;
  onInputChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden">
      {/* CARD HEADER */}
      <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
        <div>
          <h2 className="text-[14px] font-bold text-white">Catatan & Diskusi Pembimbing</h2>
          <p className="text-[11px] text-zinc-500 mt-1">Umpan balik dan diskusi terkait laporan mingguan.</p>
        </div>
        <span className="px-2.5 py-1 text-[11px] font-mono bg-[#18181B] text-zinc-400 rounded-lg border border-zinc-800">
          {comments.length} Diskusi
        </span>
      </div>

      <div className="p-6 space-y-6">
        {/* List Diskusi */}
        <div className="space-y-3">
          {comments.map((item) => (
            <div key={item.id} className="flex gap-3 text-[13px]">
              <div
                className={`w-8 h-8 rounded-xl ${item.avatarColor} flex items-center justify-center font-bold flex-shrink-0 text-[11px] font-mono`}
              >
                {item.senderRole === 'MENTOR' ? 'M' : 'S'}
              </div>
              <div className="space-y-1 bg-[#18181B] p-4 rounded-xl border border-zinc-800 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">
                    {item.senderName} <span className="text-[10px] font-mono text-zinc-500 font-normal">({item.senderRole})</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">{item.createdAt}</span>
                </div>
                <p className="text-zinc-300 leading-relaxed font-sans">{item.message}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form Balasan */}
        <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
          <input
            type="text"
            placeholder="Tulis balasan atau tanggapan laporan mingguan..."
            value={inputMessage}
            onChange={(e) => onInputChange(e.target.value)}
            className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors font-sans"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 transition-all text-[12px] font-semibold whitespace-nowrap"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}