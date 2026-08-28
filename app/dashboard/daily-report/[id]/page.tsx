'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

// ==========================================
// TYPES & INTERFACES
// ==========================================
export type ReportStatus = 'APPROVED' | 'REVISI' | 'PENDING';

export interface CommentItem {
  id: string;
  senderName: string;
  senderRole: 'MENTOR' | 'SISWA';
  avatarColor: string;
  message: string;
  createdAt: string;
}

export interface DailyReportDetail {
  id: string;
  title: string;
  date: string;
  submittedAt: string;
  projectName: string;
  logbook: string;
  notes?: string;
  documentationUrl: string;
  status: ReportStatus;
}

// ==========================================
// DUMMY INITIAL DATA
// ==========================================
const INITIAL_REPORT_DATA: DailyReportDetail = {
  id: 'rep-101',
  title: 'Slicing UI Dashboard Admin dan Modul Siswa',
  date: '07 Agustus 2026',
  submittedAt: '08:15 WIB',
  projectName: 'Sistem Presensi Hadirin v1.0',
  logbook: `- Menyelesaikan tampilan Form Laporan Harian\n- Membuat halaman Riwayat Presensi\n- Menyusun layout Profil dan Pengaturan\n- Mengatasi bug double sidebar pada dashboard`,
  notes: 'Kendala jaringan internet sempat lambat di pagi hari.',
  documentationUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
  status: 'REVISI',
};

const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'comm-1',
    senderName: 'Budi Santoso, S.Kom',
    senderRole: 'MENTOR',
    avatarColor: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    message: 'Mohon tambahkan screenshot kendala jaringan atau detail pengerjaan komponennya ya.',
    createdAt: '07 Aug 2026, 10:30 WIB',
  },
];

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function DailyReportDetailPage() {
  const params = useParams();
  const currentReportId = (params?.id as string) || INITIAL_REPORT_DATA.id;

  // States
  const [report] = useState<DailyReportDetail>({
    ...INITIAL_REPORT_DATA,
    id: currentReportId,
  });
  const [comments, setComments] = useState<CommentItem[]>(INITIAL_COMMENTS);
  const [inputMessage, setInputMessage] = useState('');

  // Handlers
  const handleSendComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (!inputMessage.trim()) return;

    const newComment: CommentItem = {
      id: `comm-${Date.now()}`,
      senderName: 'Adriel Nararya',
      senderRole: 'SISWA',
      avatarColor: 'bg-zinc-800 text-zinc-200 border border-zinc-700',
      message: inputMessage.trim(),
      createdAt: 'Baru saja',
    };

    setComments((prev) => [...prev, newComment]);
    setInputMessage('');
  };

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      {/* 1. HEADER & NAVIGATION */}
      <PageHeader report={report} />

      {/* 2. MAIN REPORT DETAILS */}
      <ReportContentCard report={report} />

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

/** Header Halaman & Navigasi */
function PageHeader({ report }: { report: DailyReportDetail }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <Link
          href="/dashboard/attendance"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-zinc-100 mb-2 transition-none"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Riwayat Presensi
        </Link>
        <h1 className="text-xl font-bold text-zinc-100 tracking-tight">{report.title}</h1>
        <p className="text-xs font-mono text-zinc-400 mt-1">
          Dikirim pada <span className="font-semibold text-zinc-200">{report.date} ({report.submittedAt})</span> • Project:{' '}
          <span className="font-semibold text-zinc-200">{report.projectName}</span>
        </p>
      </div>

      <StatusBadge status={report.status} />
    </div>
  );
}

/** Badge Status Laporan */
function StatusBadge({ status }: { status: ReportStatus }) {
  const badgeConfig = {
    APPROVED: {
      label: 'Disetujui',
      bg: 'bg-emerald-950/40 border-emerald-800/50 text-emerald-400',
      dot: 'bg-emerald-400',
    },
    REVISI: {
      label: 'Perlu Revisi',
      bg: 'bg-amber-950/40 border-amber-800/50 text-amber-400',
      dot: 'bg-amber-400',
    },
    PENDING: {
      label: 'Menunggu Review',
      bg: 'bg-zinc-800/60 border-zinc-700 text-zinc-300',
      dot: 'bg-zinc-400',
    },
  };

  const current = badgeConfig[status];

  return (
    <div>
      <span className={`px-3 py-1.5 text-xs font-mono font-bold border rounded-md flex items-center gap-2 ${current.bg}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
        {current.label}
      </span>
    </div>
  );
}

/** Kartu Detail Laporan Harian */
function ReportContentCard({ report }: { report: DailyReportDetail }) {
  const isApproved = report.status === 'APPROVED';

  return (
    <div className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 space-y-6">
      {/* Logbook Activities */}
      <div className="space-y-2">
        <h2 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Aktivitas & Logbook</h2>
        <div className="p-4 bg-[#09090B] rounded-md border border-zinc-800/80 text-xs text-zinc-200 leading-relaxed whitespace-pre-line font-mono">
          {report.logbook}
        </div>
      </div>

      {/* Kendala / Catatan Tambahan */}
      {report.notes && (
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Kendala / Catatan Tambahan</h2>
          <p className="text-xs text-zinc-300 bg-[#09090B] p-3 rounded-md border border-zinc-800/80 font-sans">
            {report.notes}
          </p>
        </div>
      )}

      {/* Dokumentasi Bukti PKL */}
      <div className="space-y-2">
        <h2 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">Dokumentasi Kegiatan</h2>
        <div className="relative overflow-hidden rounded-md border border-zinc-800 max-w-md h-64 bg-[#09090B]">
          <Image
            src={report.documentationUrl}
            alt="Dokumentasi Laporan"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
        <p className="text-[11px] font-mono text-zinc-500">
          {isApproved
            ? 'Laporan ini telah disetujui dan tidak dapat diubah lagi.'
            : 'Anda dapat mengedit laporan ini jika mentor meminta revisi.'}
        </p>

        <button
          disabled={isApproved}
          className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800/60 disabled:cursor-not-allowed rounded-md transition-none"
        >
          Edit Laporan Harian
        </button>
      </div>
    </div>
  );
}

/** Section Komentar & Diskusi */
function DiscussionSection({
  comments,
  inputMessage,
  onInputChange,
  onSubmit,
}: {
  comments: CommentItem[];
  inputMessage: string;
  onInputChange: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <div className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 space-y-5">
      <h2 className="text-sm font-bold text-zinc-100 border-b border-zinc-800/80 pb-3 flex items-center gap-2">
        <span>Catatan & Diskusi Mentor</span>
        <span className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 text-zinc-400 rounded border border-zinc-800">
          {comments.length}
        </span>
      </h2>

      {/* List Diskusi */}
      <div className="space-y-3">
        {comments.map((item) => (
          <div key={item.id} className="flex gap-3 text-xs">
            <div
              className={`w-7 h-7 rounded-md ${item.avatarColor} flex items-center justify-center font-bold flex-shrink-0 text-[10px] font-mono`}
            >
              {item.senderRole === 'MENTOR' ? 'M' : 'S'}
            </div>
            <div className="space-y-1 bg-[#09090B] p-3 rounded-md border border-zinc-800 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-zinc-200">
                  {item.senderName} <span className="text-[10px] font-mono text-zinc-500 font-normal">({item.senderRole})</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-500">{item.createdAt}</span>
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
          placeholder="Tulis balasan atau penjelasan revisi..."
          value={inputMessage}
          onChange={(e) => onInputChange(e.target.value)}
          className="flex-1 px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 placeholder:text-zinc-600 transition-none font-sans"
        />
        <button
          type="submit"
          className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-md transition-none"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}