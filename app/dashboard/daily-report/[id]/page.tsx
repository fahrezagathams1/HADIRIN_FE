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
    avatarColor: 'bg-amber-600',
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
      avatarColor: 'bg-indigo-600',
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Riwayat Presensi
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">{report.title}</h1>
        <p className="text-xs text-slate-500 mt-1">
          Dikirim pada <span className="font-semibold text-slate-700">{report.date} ({report.submittedAt})</span> • Project:{' '}
          <span className="font-semibold text-indigo-600">{report.projectName}</span>
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
      bg: 'bg-emerald-50 border-emerald-200 text-emerald-700',
      dot: 'bg-emerald-500',
    },
    REVISI: {
      label: 'Perlu Revisi',
      bg: 'bg-amber-50 border-amber-200 text-amber-700',
      dot: 'bg-amber-500',
    },
    PENDING: {
      label: 'Menunggu Review',
      bg: 'bg-slate-100 border-slate-200 text-slate-700',
      dot: 'bg-slate-400',
    },
  };

  const current = badgeConfig[status];

  return (
    <div>
      <span className={`px-3 py-1.5 text-xs font-bold border rounded-xl flex items-center gap-1.5 ${current.bg}`}>
        <span className={`w-2 h-2 rounded-full ${current.dot}`} />
        {current.label}
      </span>
    </div>
  );
}

/** Kartu Detail Laporan Harian */
function ReportContentCard({ report }: { report: DailyReportDetail }) {
  const isApproved = report.status === 'APPROVED';

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      {/* Logbook Activities */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Aktivitas & Logbook</h2>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-800 leading-relaxed whitespace-pre-line font-mono">
          {report.logbook}
        </div>
      </div>

      {/* Kendala / Catatan Tambahan */}
      {report.notes && (
        <div className="space-y-2">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Kendala / Catatan Tambahan</h2>
          <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
            {report.notes}
          </p>
        </div>
      )}

      {/* Dokumentasi Bukti PKL */}
      <div className="space-y-2">
        <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dokumentasi Kegiatan</h2>
        <div className="relative overflow-hidden rounded-xl border border-slate-200 max-w-md h-64">
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
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <p className="text-[11px] text-slate-400">
          {isApproved
            ? 'Laporan ini telah disetujui dan tidak dapat diubah lagi.'
            : 'Anda dapat mengedit laporan ini jika mentor meminta revisi.'}
        </p>

        <button
          disabled={isApproved}
          className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed rounded-xl transition-all shadow-sm"
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
    <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
      <h2 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-3 flex items-center gap-2">
        <span>Catatan & Diskusi Mentor</span>
        <span className="px-2 py-0.5 text-[10px] bg-slate-100 text-slate-600 rounded-full">{comments.length}</span>
      </h2>

      {/* List Diskusi */}
      <div className="space-y-4">
        {comments.map((item) => (
          <div key={item.id} className="flex gap-3 text-xs">
            <div
              className={`w-8 h-8 rounded-full ${item.avatarColor} text-white flex items-center justify-center font-bold flex-shrink-0 text-[10px]`}
            >
              {item.senderRole === 'MENTOR' ? 'M' : 'S'}
            </div>
            <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800">
                  {item.senderName} <span className="text-[10px] text-slate-400 font-normal">({item.senderRole})</span>
                </span>
                <span className="text-[10px] text-slate-400">{item.createdAt}</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{item.message}</p>
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
          className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800"
        />
        <button
          type="submit"
          className="px-4 py-2.5 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-all shadow-sm"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}