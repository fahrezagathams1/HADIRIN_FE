'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- INLINE SVG ICONS ---
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

export default function CreateSiswaPage() {
  const [formData, setFormData] = useState({
    name: '',
    nisn: '',
    school: '',
    major: '',
    company: '',
    status: 'Pending',
    startDate: '',
    endDate: '', // Ditambahkan field tanggal beres
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Data siswa baru berhasil ditambahkan!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      
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
          Tambah Siswa Baru
        </h1>
        <p className="text-[13px] text-zinc-400">
          Tambahkan data siswa baru yang akan mengikuti program Praktek Kerja Lapangan.
        </p>
      </div>

      {/* FORM CARD */}
      <form onSubmit={handleSubmit} className="bg-[#121215] p-6 lg:p-8 rounded-xl border border-zinc-800/80 space-y-6">
        
        {/* DATA IDENTITAS */}
        <div className="space-y-4">
          <h3 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">Data Identitas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Nama Lengkap *</label>
              <input
                type="text"
                name="name"
                placeholder="Contoh: Adriel Nararya"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">NISN *</label>
              <input
                type="text"
                name="nisn"
                placeholder="Contoh: 0051234567"
                value={formData.nisn}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                required
              />
            </div>
          </div>
        </div>

        {/* DATA SEKOLAH */}
        <div className="space-y-4 pt-4 border-t border-zinc-800/60">
          <h3 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">Data Sekolah</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Asal Sekolah *</label>
              <input
                type="text"
                name="school"
                placeholder="Contoh: SMKN 1 Bandung"
                value={formData.school}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Jurusan *</label>
              <input
                type="text"
                name="major"
                placeholder="Contoh: Rekayasa Perangkat Lunak"
                value={formData.major}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                required
              />
            </div>
          </div>
        </div>

        {/* DATA PKL & PERIODE */}
        <div className="space-y-4 pt-4 border-t border-zinc-800/60">
          <h3 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">Data Penempatan PKL</h3>
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Perusahaan Mitra *</label>
            <input
              type="text"
              name="company"
              placeholder="Contoh: PT Tech Innovation"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Tanggal Mulai PKL *</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[12px] font-medium text-zinc-300">Tanggal Beres / Selesai PKL *</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 font-mono focus:outline-none focus:border-zinc-600"
                required
              />
            </div>
          </div>
        </div>

        {/* STATUS SISWA */}
        <div className="space-y-4 pt-4 border-t border-zinc-800/60">
          <h3 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">Status Siswa</h3>
          <div className="space-y-2">
            <label className="text-[12px] font-medium text-zinc-300">Status *</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full bg-[#18181B] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 cursor-pointer"
            >
              <option value="Pending">Pending</option>
              <option value="Aktif">Aktif</option>
              <option value="Selesai">Selesai</option>
            </select>
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
            Simpan Siswa Baru
          </button>
        </div>

      </form>

    </div>
  );
}