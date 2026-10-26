'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- INLINE SVG ICONS ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

export default function DetailSiswaDanEvaluasiPage() {
  const params = useParams();
  const studentId = params?.id;

  // Active Tab State ('overview' atau 'evaluasi')
  const [activeTab, setActiveTab] = useState<'overview' | 'evaluasi'>('overview');

  // Form States untuk Evaluasi
  const [nilaiTeknis, setNilaiTeknis] = useState('85');
  const [nilaiDisiplin, setNilaiDisiplin] = useState('90');
  const [catatan, setCatatan] = useState('');

  // Mock data siswa berdasarkan ID
  const student = {
    id: studentId,
    name: 'Adriel Nararya',
    school: 'SMKN 1 Bandung',
    role: 'Frontend Developer',
    period: 'Jul 2026 - Okt 2026',
    status: 'Aktif',
    progress: 78,
    email: 'adriel.nararya@smkn1bandung.sch.id',
    phone: '+62 812-3456-7890',
    totalReports: 42,
    attendanceRate: '98%',
  };

  const handleSaveEvaluation = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Evaluasi berhasil disimpan!');
  };

  return (
    <div className="max-w-5xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER & NAVIGASI KEMBALI */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/60 pb-6">
        <div className="space-y-1.5">
          <Link
            href="/mentor/siswa"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <ArrowLeftIcon />
            <span>Kembali ke Daftar Siswa</span>
          </Link>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            {student.name}
          </h1>
          <p className="text-[13px] text-zinc-400">
            {student.role} • <span className="text-zinc-200">{student.school}</span>
          </p>
        </div>

        {/* TAB SWITCHER (OVERVIEW vs EVALUASI) */}
        <div className="flex items-center bg-[#121215] border border-zinc-800/80 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-[12px] font-medium rounded-lg transition-all ${
              activeTab === 'overview'
                ? 'bg-zinc-800 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Profil & Progres
          </button>
          <button
            onClick={() => setActiveTab('evaluasi')}
            className={`px-4 py-2 text-[12px] font-medium rounded-lg transition-all ${
              activeTab === 'evaluasi'
                ? 'bg-white text-zinc-950 shadow-sm font-semibold'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Form Evaluasi
          </button>
        </div>
      </div>

      {/* KONTEN BERDASARKAN TAB YANG DIPILIH */}
      {activeTab === 'overview' ? (
        /* TAB 1: PROFIL & PROGRES SISWA */
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[11px] text-zinc-500 font-mono uppercase">Status PKL</span>
              <div className="text-[14px] font-bold text-emerald-400">{student.status}</div>
            </div>
            <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[11px] text-zinc-500 font-mono uppercase">Periode</span>
              <div className="text-[14px] font-bold text-zinc-200 font-mono">{student.period}</div>
            </div>
            <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 space-y-1">
              <span className="text-[11px] text-zinc-500 font-mono uppercase">Tingkat Kehadiran</span>
              <div className="text-[14px] font-bold text-emerald-400 font-mono">{student.attendanceRate}</div>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-[#121215] p-6 rounded-xl border border-zinc-800/80 space-y-3">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-bold text-white">Progres Keseluruhan</span>
              <span className="font-mono font-bold text-emerald-400">{student.progress}%</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${student.progress}%` }} />
            </div>
          </div>

          {/* Detail Kontak */}
          <div className="bg-[#121215] p-6 rounded-xl border border-zinc-800/80 space-y-4">
            <h3 className="text-[14px] font-bold text-white border-b border-zinc-800 pb-3">Informasi Kontak & Aktivitas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
              <div>
                <span className="text-zinc-500 block text-[11px] font-mono uppercase">Email</span>
                <span className="text-zinc-200 font-mono">{student.email}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px] font-mono uppercase">No. Telepon / WhatsApp</span>
                <span className="text-zinc-200 font-mono">{student.phone}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[11px] font-mono uppercase">Total Laporan Dikirim</span>
                <span className="text-zinc-200 font-mono">{student.totalReports} Laporan</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* TAB 2: FORM EVALUASI DI DALAM [ID] */
        <form onSubmit={handleSaveEvaluation} className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <h2 className="text-[14px] font-bold text-white">Input Penilaian & Catatan Mentor</h2>
            <p className="text-[12px] text-zinc-500 mt-0.5">Nilai performa kerja siswa bimbingan selama periode berjalan.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Nilai Kinerja Teknis (0-100)</label>
              <input
                type="number"
                value={nilaiTeknis}
                onChange={(e) => setNilaiTeknis(e.target.value)}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Nilai Kedisiplinan & Presensi (0-100)</label>
              <input
                type="number"
                value={nilaiDisiplin}
                onChange={(e) => setNilaiDisiplin(e.target.value)}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Catatan & Masukan Evaluasi</label>
            <textarea
              rows={4}
              placeholder="Tuliskan ulasan progres atau catatan perbaikan untuk siswa..."
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl p-4 text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 font-sans leading-relaxed"
            />
          </div>

          <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className="px-4 py-2.5 text-[12px] font-medium text-zinc-400 bg-[#18181B] hover:text-white border border-zinc-800 rounded-xl transition-all"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-[12px] font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-sm"
            >
              Simpan Evaluasi
            </button>
          </div>
        </form>
      )}

    </div>
  );
}