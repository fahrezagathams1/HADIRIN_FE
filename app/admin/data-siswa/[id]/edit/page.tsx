'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// --- INLINE SVG ICONS ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

export default function AdminEditSiswaPage() {
  const params = useParams();
  const studentId = params?.id;

  // State form edit dengan Tanggal Beres
  const [formData, setFormData] = useState({
    name: 'Adriel Nararya',
    nisn: '0051234567',
    school: 'SMKN 1 Bandung',
    major: 'Rekayasa Perangkat Lunak',
    company: 'PT Tech Innovation',
    status: 'Aktif',
    startDate: '2026-07-01',
    endDate: '2026-10-31', // Added End Date
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Perubahan data siswa berhasil disimpan!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* HEADER & NAVIGASI KEMBALI */}
      <div className="space-y-1.5 border-b border-zinc-800/60 pb-6">
        <Link
          href="/admin/data-siswa"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <ArrowLeftIcon />
          <span>Kembali ke Data Siswa</span>
        </Link>
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Edit Data Siswa
        </h1>
        <p className="text-[13px] text-zinc-400">
          Perbarui informasi peserta PKL (ID: {studentId}) di dalam sistem.
        </p>
      </div>

      {/* FORM CARD */}
      <form onSubmit={handleSubmit} className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Nama Lengkap Siswa</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">NISN</label>
            <input
              type="text"
              name="nisn"
              value={formData.nisn}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Asal Sekolah</label>
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Jurusan</label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Perusahaan Mitra Penempatan</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Status PKL</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 cursor-pointer"
            >
              <option value="Aktif">Aktif</option>
              <option value="Selesai">Selesai</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        {/* TANGGAL MULAI DAN TANGGAL BERES (PERIODE PKL) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-800/60">
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Tanggal Mulai PKL</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Tanggal Beres / Selesai PKL</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        {/* FOOTER AKSI */}
        <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-end gap-3">
          <Link
            href="/admin/data-siswa"
            className="px-5 py-2.5 rounded-xl bg-[#18181B] border border-zinc-800 text-zinc-300 hover:text-white text-[13px] font-medium transition-all"
          >
            Batal
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-[13px] font-semibold transition-all shadow-sm"
          >
            Simpan Perubahan
          </button>
        </div>

      </form>

    </div>
  );
}