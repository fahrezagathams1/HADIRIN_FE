'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- INLINE SVG ICONS ---
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

export default function AdminDetailSiswaSlidePage() {
  const params = useParams();
  const studentId = params?.id;

  // Mock data siswa admin berdasarkan ID
  const student = {
    name: 'Adriel Nararya',
    nisn: '0051234567',
    school: 'SMKN 1 Bandung',
    major: 'Rekayasa Perangkat Lunak',
    company: 'PT Tech Innovation',
    startDate: '1 Jul 2026',
    status: 'Aktif',
    email: 'adriel.nararya@smkn1bandung.sch.id',
    phone: '+62 812-3456-7890',
    mentor: 'Budi Santoso, S.Kom',
    attendanceRate: '98%',
  };

  return (
    <div className="relative min-h-screen bg-[#F4F4F5] text-zinc-900 p-6 lg:p-10">

      {/* Konten Latar Belakang (Dashboard Admin di belakang slide) */}
      <div className="max-w-6xl mx-auto space-y-6 opacity-30 pointer-events-none">
        <div className="h-8 w-64 bg-zinc-200 rounded-lg" />
        <div className="h-96 w-full bg-white border border-zinc-200 rounded-2xl" />
      </div>

      {/* OVERLAY GELAP DI LUAR PANEL */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity" />

      {/* PANEL SLIDE-OVER DARI KANAN */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white border-l border-zinc-200 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">

        {/* HEADER PANEL */}
        <div className="px-6 py-5 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-900 border border-blue-800 flex items-center justify-center font-bold text-white">
              {student.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-[15px] font-bold text-zinc-900">{student.name}</h2>
              <p className="text-[12px] text-zinc-500 font-mono">NISN: {student.nisn}</p>
            </div>
          </div>

          {/* Tombol Tutup / Kembali */}
          <Link
            href="/admin/data-siswa"
            className="p-2 rounded-xl bg-white border border-zinc-300 text-zinc-400 hover:text-zinc-900 hover:border-zinc-400 transition-colors"
          >
            <XIcon />
          </Link>
        </div>

        {/* BODY KONTEN PANEL (Bisa Di-scroll) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Status & Instansi */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-zinc-200 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Status PKL</span>
              <div className="text-[13px] font-semibold text-emerald-700">{student.status}</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-zinc-200 space-y-1">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Tanggal Mulai</span>
              <div className="text-[13px] font-semibold text-zinc-900 font-mono">{student.startDate}</div>
            </div>
          </div>

          {/* Sekolah & Perusahaan Mitra */}
          <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-4">
            <h3 className="text-[13px] font-bold text-zinc-900 border-b border-zinc-200 pb-2">Penempatan & Akademik</h3>
            <div className="space-y-3 text-[13px]">
              <div className="flex justify-between">
                <span className="text-zinc-500">Asal Sekolah:</span>
                <span className="text-zinc-900 font-medium">{student.school}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Jurusan:</span>
                <span className="text-zinc-900 font-medium">{student.major}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Perusahaan Mitra:</span>
                <span className="text-zinc-900 font-semibold text-blue-700">{student.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Pembimbing Lapangan:</span>
                <span className="text-zinc-900">{student.mentor}</span>
              </div>
            </div>
          </div>

          {/* Informasi Kontak */}
          <div className="bg-white p-5 rounded-xl border border-zinc-200 space-y-4">
            <h3 className="text-[13px] font-bold text-zinc-900 border-b border-zinc-200 pb-2">Informasi Kontak</h3>
            <div className="space-y-2 text-[13px]">
              <div className="flex justify-between">
                <span className="text-zinc-500">Email:</span>
                <span className="text-zinc-900 font-mono">{student.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">No. Telepon:</span>
                <span className="text-zinc-900 font-mono">{student.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Tingkat Kehadiran:</span>
                <span className="text-emerald-700 font-mono font-medium">{student.attendanceRate}</span>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER PANEL (AKSI) */}
        <div className="px-6 py-4 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between gap-3">
          <Link
            href="/admin/data-siswa"
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-zinc-300 hover:bg-zinc-50 text-zinc-700 text-center text-[13px] font-medium transition-all"
          >
            Tutup
          </Link>
          <Link
            href={`/admin/data-siswa/${studentId}/edit`}
            className="w-full px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 border border-blue-800 text-white text-center text-[13px] font-medium transition-all shadow-sm"
          >
            Edit Data Siswa
          </Link>
        </div>

      </div>

    </div>
  );
}
