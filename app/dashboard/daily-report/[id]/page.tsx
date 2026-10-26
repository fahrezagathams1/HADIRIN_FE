'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    avatarColor: 'bg-amber-950/40 text-amber-400 border border-amber-900/50',
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
      avatarColor: 'bg-zinc-800 text-zinc-200 border border-zinc-700/80',
      message: inputMessage.trim(),
      createdAt: 'Baru saja',
    };

    setComments((prev) => [...prev, newComment]);
    setInputMessage('');
  };

  return (
    // Menggunakan max-w-6xl dan p-8 lg:p-10 agar ukurannya selebar halaman form & presensi
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
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
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/60 pb-6">
      <div className="space-y-1.5">
        {/* Breadcrumb disamakan formatnya */}
        <div className="text-[13px] text-zinc-500">
          Siswa <span className="mx-1.5 text-zinc-700">/</span> Laporan Harian <span className="mx-1.5 text-zinc-700">/</span> Detail
        </div>
        
        <h1 className="text-2xl font-bold text-white tracking-tight">{report.title}</h1>
        
        <p className="text-[13px] text-zinc-400">
          Dikirim pada <span className="font-mono text-zinc-200">{report.date} ({report.submittedAt})</span> • Project:{' '}
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
      label: 'DISETUJUI',
      bg: 'bg-emerald-950/40 border-emerald-900/50 text-emerald-400',
    },
    REVISI: {
      label: 'PERLU REVISI',
      bg: 'bg-amber-950/40 border-amber-900/50 text-amber-400',
    },
    PENDING: {
      label: 'MENUNGGU REVIEW',
      bg: 'bg-zinc-900 border-zinc-800 text-zinc-300',
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

/** Kartu Detail Laporan Harian */
function ReportContentCard({ report }: { report: DailyReportDetail }) {
  const isApproved = report.status === 'APPROVED';

  return (
    <div className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-6">
      <div className="border-b border-zinc-800/80 pb-4">
        <h2 className="text-[14px] font-bold text-white">Detail Informasi Laporan</h2>
        <p className="text-[12px] text-zinc-500 mt-0.5">Berikut adalah rincian aktivitas dan dokumentasi kegiatan PKL Anda.</p>
      </div>

      {/* Logbook Activities */}
      <div className="space-y-2">
        <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Aktivitas & Logbook</h2>
        <div className="p-4 bg-[#18181B] rounded-xl border border-zinc-800/80 text-[13px] text-zinc-200 leading-relaxed whitespace-pre-line font-mono">
          {report.logbook}
        </div>
      </div>

      {/* Kendala / Catatan Tambahan */}
      {report.notes && (
        <div className="space-y-2">
          <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Kendala / Catatan Tambahan</h2>
          <p className="text-[13px] text-zinc-300 bg-[#18181B] p-4 rounded-xl border border-zinc-800/80 font-sans leading-relaxed">
            {report.notes}
          </p>
        </div>
      )}

      {/* Dokumentasi Bukti PKL */}
      <div className="space-y-2">
        <h2 className="text-[12px] font-medium text-zinc-400 uppercase tracking-wider">Dokumentasi Kegiatan</h2>
        <div className="relative overflow-hidden rounded-xl border border-zinc-800/80 max-w-md h-64 bg-[#18181B]">
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
      <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <p className="text-[12px] text-zinc-500">
          {isApproved
            ? 'Laporan ini telah disetujui dan tidak dapat diubah lagi.'
            : 'Anda dapat mengedit laporan ini jika mentor meminta revisi.'}
        </p>

        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/daily-report"
            className="px-4 py-2 text-[12px] font-medium text-zinc-400 bg-[#18181B] hover:text-white border border-zinc-800 rounded-xl transition-all"
          >
            Kembali
          </Link>
          <button
            disabled={isApproved}
            className="px-4 py-2 text-[12px] font-medium text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800/80 disabled:cursor-not-allowed rounded-xl transition-all shadow-sm"
          >
            Edit Laporan Harian
          </button>
        </div>
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
          placeholder="Tulis balasan atau penjelasan revisi..."
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