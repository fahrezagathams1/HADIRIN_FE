'use client';

import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);

// --- MOCK DATA ---
const initialReports = [
  {
    id: 1,
    student: 'Adriel Nararya',
    school: 'SMKN 1 Bandung',
    date: '28 Agu 2026',
    title: 'Slicing UI Next.js & Tailwind',
    description: 'Menyelesaikan slicing halaman dashboard admin dan integrasi komponen sidebar. Menggunakan Tailwind CSS untuk styling. Terdapat sedikit kendala pada responsivitas di layar mobile, tapi sudah diselesaikan.',
    link: 'https://github.com/adriel/hadirin-app',
    status: 'Pending',
  },
  {
    id: 2,
    student: 'Dina Mariana',
    school: 'SMKN 4 Bandung',
    date: '28 Agu 2026',
    title: 'Integrasi API Auth JWT',
    description: 'Membuat endpoint login dan register menggunakan Node.js dan JWT. Testing API berjalan lancar menggunakan Postman. Melampirkan dokumentasi API di repository.',
    link: 'https://github.com/dinamar/api-auth',
    status: 'Pending',
  },
  {
    id: 3,
    student: 'Siti Rahma',
    school: 'SMKN 2 Bandung',
    date: '27 Agu 2026',
    title: 'Setup Database PostgreSQL',
    description: 'Merancang Entity Relationship Diagram (ERD) dan membuat skema database untuk tabel user, roles, dan relasi presensi menggunakan Prisma ORM.',
    link: 'https://figma.com/file/erd-design',
    status: 'Approved',
  },
  {
    id: 4,
    student: 'Budi Kurnia',
    school: 'SMKN 1 Cimahi',
    date: '26 Agu 2026',
    title: 'Riset Kompetitor Aplikasi',
    description: 'Melakukan riset terhadap 3 aplikasi kompetitor sejenis. Datanya sudah saya rangkum dalam bentuk spreadsheet.',
    link: 'https://docs.google.com/spreadsheets/...',
    status: 'Rejected',
  },
];

export default function VerifikasiLaporanPage() {
  const [reports, setReports] = useState(initialReports);
  const [activeTab, setActiveTab] = useState('Pending'); // 'Pending' | 'Riwayat'

  // Fungsi Action
  const handleAction = (id: number, newStatus: string) => {
    setReports((prev) => 
      prev.map((report) => report.id === id ? { ...report, status: newStatus } : report)
    );
  };

  // Filter Data Berdasarkan Tab
  const displayedReports = reports.filter((r) => 
    activeTab === 'Pending' ? r.status === 'Pending' : r.status !== 'Pending'
  );

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER */}
      <div className="space-y-1.5 border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Pembimbing <span className="mx-1.5 text-zinc-700">/</span> Verifikasi Laporan
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Verifikasi Laporan Harian
        </h1>
        <p className="text-[13px] text-zinc-400">
          Tinjau, setujui, atau minta revisi atas logbook harian yang dikumpulkan oleh siswa bimbingan.
        </p>
      </div>

      {/* TABS NAVIGATION */}
      <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-px">
        <button 
          onClick={() => setActiveTab('Pending')}
          className={`px-5 py-2.5 text-[13px] font-medium border-b-2 transition-colors ${
            activeTab === 'Pending' 
              ? 'border-white text-white' 
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Menunggu Review ({reports.filter(r => r.status === 'Pending').length})
        </button>
        <button 
          onClick={() => setActiveTab('Riwayat')}
          className={`px-5 py-2.5 text-[13px] font-medium border-b-2 transition-colors ${
            activeTab === 'Riwayat' 
              ? 'border-white text-white' 
              : 'border-transparent text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Riwayat Verifikasi
        </button>
      </div>

      {/* LIST KARTU LAPORAN */}
      <div className="space-y-4">
        {displayedReports.length > 0 ? (
          displayedReports.map((report) => (
            <div key={report.id} className="bg-[#121215] border border-zinc-800/80 rounded-xl p-5 flex flex-col md:flex-row gap-6 transition-all hover:border-zinc-700/80">
              
              {/* Info Siswa & Tanggal (Kiri) */}
              <div className="md:w-1/4 shrink-0 border-b md:border-b-0 md:border-r border-zinc-800/80 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#18181B] border border-zinc-800 flex items-center justify-center font-bold text-zinc-300 text-xs">
                    {report.student.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-[13px] font-bold text-white leading-tight">{report.student}</h3>
                    <span className="text-[11px] text-zinc-500">{report.school}</span>
                  </div>
                </div>
                <div className="bg-[#09090B] border border-zinc-800/60 rounded-lg p-2.5 inline-block w-full">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold block mb-0.5">Tanggal Laporan</span>
                  <span className="text-[12px] text-zinc-300 font-medium">{report.date}</span>
                </div>
              </div>

              {/* Konten Laporan (Tengah) */}
              <div className="flex-1 space-y-3">
                <div>
                  <h2 className="text-[15px] font-bold text-zinc-100">{report.title}</h2>
                  <p className="text-[13px] text-zinc-400 mt-1 leading-relaxed">
                    {report.description}
                  </p>
                </div>
                
                {report.link && (
                  <a 
                    href={report.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] text-cyan-400 hover:text-cyan-300 bg-cyan-950/20 border border-cyan-900/30 px-3 py-1.5 rounded-lg transition-colors w-fit"
                  >
                    <LinkIcon />
                    Lihat Lampiran / Link
                  </a>
                )}
              </div>

              {/* Action Buttons / Status (Kanan) */}
              <div className="md:w-40 shrink-0 flex flex-col justify-center items-end gap-2 border-t md:border-t-0 md:border-l border-zinc-800/80 pt-4 md:pt-0 md:pl-6">
                {report.status === 'Pending' ? (
                  <>
                    <button 
                      onClick={() => handleAction(report.id, 'Approved')}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/60 hover:bg-emerald-900/60 transition-colors"
                    >
                      <CheckIcon />
                      Setujui
                    </button>
                    <button 
                      onClick={() => handleAction(report.id, 'Rejected')}
                      className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium bg-rose-950/20 text-rose-400 border border-rose-900/40 hover:bg-rose-900/40 transition-colors"
                    >
                      <XIcon />
                      Revisi
                    </button>
                  </>
                ) : (
                  <div className="w-full text-center">
                    <span className="text-[10px] text-zinc-500 block mb-1">Status Laporan</span>
                    {report.status === 'Approved' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold bg-emerald-950/20 text-emerald-500 border border-emerald-900/30 w-full justify-center">
                        <CheckIcon /> Disetujui
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-bold bg-rose-950/20 text-rose-500 border border-rose-900/30 w-full justify-center">
                        <XIcon /> Direvisi
                      </span>
                    )}
                  </div>
                )}
              </div>

            </div>
          ))
        ) : (
          <div className="text-center py-16 bg-[#121215] border border-zinc-800/80 rounded-xl">
            <span className="text-4xl block mb-3">🎉</span>
            <h3 className="text-zinc-200 font-bold mb-1">Semua Laporan Sudah Dicek</h3>
            <p className="text-zinc-500 text-[13px]">Belum ada laporan baru dari siswa bimbinganmu.</p>
          </div>
        )}
      </div>

    </div>
  );
}