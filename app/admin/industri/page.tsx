'use client';
import Link from 'next/link';
import React, { useState } from 'react';

// Types
interface Partner {
  id: string;
  name: string;
  sector: string;
  city: string;
  address: string;
  mentorName: string;
  mentorContact: string;
  activeStudents: number;
  quota: number;
  status: 'Aktif' | 'Penuh' | 'Non-Aktif';
}

export default function MitraIndustriPage() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('Semua');

  // State untuk Slide-Over Detail
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  // Dummy Data Mitra Industri
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 'IND-001',
      name: 'PT Tech Innovation Indonesia',
      sector: 'Software House & Mobile App',
      city: 'Bandung',
      address: 'Jl. Soekarno Hatta No. 456',
      mentorName: 'Budi Santoso (Lead Dev)',
      mentorContact: 'budi@techinnov.id / 0812-3456-7890',
      activeStudents: 5,
      quota: 8,
      status: 'Aktif',
    },
    {
      id: 'IND-002',
      name: 'Digital Creative Studio',
      sector: 'UI/UX Design & Media',
      city: 'Bandung',
      address: 'Jl. Riau No. 12',
      mentorName: 'Maya Putri (Art Director)',
      mentorContact: 'maya@digitalcreative.co.id',
      activeStudents: 3,
      quota: 5,
      status: 'Aktif',
    },
    {
      id: 'IND-003',
      name: 'Nusantara IT Solutions',
      sector: 'Networking & Cloud Infrastructure',
      city: 'Jakarta Selatan',
      address: 'Gedung Cyber 2 Lt. 8',
      mentorName: 'Hendra Wijaya (Sysadmin)',
      mentorContact: 'hendra@nusantarait.com',
      activeStudents: 4,
      quota: 4,
      status: 'Penuh',
    },
    {
      id: 'IND-004',
      name: 'Bengkel & Servis Otomotif Jaya',
      sector: 'Teknik Kendaraan & Perbengkelan',
      city: 'Karawang',
      address: 'Jl. Raya Interchange No. 88',
      mentorName: 'Ahmad Supardi (Kepala Mekanik)',
      mentorContact: 'ahmad@jayaauto.com',
      activeStudents: 2,
      quota: 6,
      status: 'Aktif',
    },
    {
      id: 'IND-005',
      name: 'PT Global Network Services',
      sector: 'Telecommunication & Fiber Optics',
      city: 'Karawang',
      address: 'Kawasan KIIC Lot B-3',
      mentorName: 'Eko Prasetyo (Field Eng)',
      mentorContact: 'eko@globalnet.id',
      activeStudents: 0,
      quota: 5,
      status: 'Non-Aktif',
    },
  ]);

  // Filter Data
  const filteredPartners = partners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(search.toLowerCase()) ||
      partner.sector.toLowerCase().includes(search.toLowerCase()) ||
      partner.city.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      filterStatus === 'Semua' || partner.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  // Handler Hapus dengan Konfirmasi
  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus mitra "${name}"?`)) {
      setPartners(partners.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="space-y-6 text-zinc-100 relative">
      {/* HEADER PAGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-zinc-100">
            Data Mitra Industri
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Kelola daftar perusahaan dan instansi penyedia kuota Praktek Kerja Lapangan (PKL).
          </p>
        </div>

        <Link
          href="/admin/industri/create"
          className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-900 rounded-md text-xs font-bold hover:bg-zinc-200 transition-all self-start sm:self-auto"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
          </svg>
          <span>Tambah Mitra</span>
        </Link>
      </div>

      {/* STATS / METRIK */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Total Perusahaan</span>
            <span className="text-2xl font-black text-zinc-100 mt-1 block">{partners.length}</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Total Kuota PKL</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">
              {partners.reduce((acc, curr) => acc + curr.quota, 0)} Siswa
            </span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-emerald-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 4 4 0 016 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Kuota Terisi</span>
            <span className="text-2xl font-black text-blue-400 mt-1 block">
              {partners.reduce((acc, curr) => acc + curr.activeStudents, 0)} Siswa
            </span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-blue-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Sisa Kuota Kosong</span>
            <span className="text-2xl font-black text-amber-400 mt-1 block">
              {partners.reduce((acc, curr) => acc + (curr.quota - curr.activeStudents), 0)} Siswa
            </span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-amber-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTAINER TABEL & FILTER */}
      <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6 space-y-4">
        {/* FILTER BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-sm">
            <input
              type="text"
              placeholder="Cari perusahaan, bidang, atau kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-500 font-medium"
            />
            <svg
              className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <label className="text-xs text-zinc-400 font-medium">Status Kerjasama:</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-[#09090B] border border-zinc-800 text-zinc-200 text-xs rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 font-medium"
            >
              <option value="Semua">Semua Status</option>
              <option value="Aktif">Aktif</option>
              <option value="Penuh">Penuh</option>
              <option value="Non-Aktif">Non-Aktif</option>
            </select>
          </div>
        </div>

        {/* TABEL PERUSAHAAN MITRA */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                <th className="py-3 px-3">Perusahaan & Bidang</th>
                <th className="py-3 px-3">Kota / Alamat</th>
                <th className="py-3 px-3">Pembimbing Lapangan</th>
                <th className="py-3 px-3">Kapasitas (Terisi / Total)</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {filteredPartners.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-zinc-500">
                    Tidak ada mitra industri yang sesuai dengan kriteria pencarian.
                  </td>
                </tr>
              ) : (
                filteredPartners.map((item) => {
                  const percentage = Math.round((item.activeStudents / item.quota) * 100);

                  return (
                    <tr key={item.id} className="hover:bg-zinc-800/30 transition-none">
                      {/* PERUSAHAAN & BIDANG */}
                      <td className="py-3.5 px-3">
                        <span className="font-bold text-zinc-200 block">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-zinc-500 block mt-0.5">
                          {item.sector} • <span className="font-mono text-zinc-600">{item.id}</span>
                        </span>
                      </td>

                      {/* KOTA & ALAMAT */}
                      <td className="py-3.5 px-3">
                        <span className="text-zinc-200 font-medium block">
                          {item.city}
                        </span>
                        <span className="text-[10px] text-zinc-500 block truncate max-w-[180px]">
                          {item.address}
                        </span>
                      </td>

                      {/* PEMBIMBING LAPANGAN */}
                      <td className="py-3.5 px-3">
                        <span className="text-zinc-300 font-medium block">
                          {item.mentorName}
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono block">
                          {item.mentorContact}
                        </span>
                      </td>

                      {/* KAPASITAS KUOTA */}
                      <td className="py-3.5 px-3">
                        <div className="flex flex-col gap-1 max-w-[140px]">
                          <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-zinc-200">
                              {item.activeStudents} / {item.quota} Siswa
                            </span>
                            <span className="text-[10px] text-zinc-500">{percentage}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#09090B] border border-zinc-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${
                                percentage >= 100
                                  ? 'bg-amber-400'
                                  : percentage > 0
                                  ? 'bg-emerald-400'
                                  : 'bg-zinc-600'
                              }`}
                              style={{ width: `${Math.min(percentage, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      </td>

                      {/* STATUS */}
                      <td className="py-3.5 px-3">
                        {item.status === 'Aktif' && (
                          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-emerald-400 border border-emerald-800/60 rounded">
                            Aktif
                          </span>
                        )}
                        {item.status === 'Penuh' && (
                          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-amber-400 border border-amber-800/60 rounded">
                            Kuota Penuh
                          </span>
                        )}
                        {item.status === 'Non-Aktif' && (
                          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-zinc-500 border border-zinc-700/60 rounded">
                            Non-Aktif
                          </span>
                        )}
                      </td>

                      {/* AKSI */}
                      <td className="py-3.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Tombol Detail -> Slide-over */}
                          <button
                            onClick={() => setSelectedPartner(item)}
                            title="Detail"
                            className="px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white"
                          >
                            Detail
                          </button>

                          {/* Tombol Edit -> Pindah Halaman ke /admin/industri/edit?id=... */}
                          <Link
                            href={`/admin/industri/edit?id=${item.id}`}
                            title="Edit"
                            className="px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white inline-block"
                          >
                            Edit
                          </Link>

                          {/* Tombol Hapus */}
                          <button
                            title="Hapus"
                            onClick={() => handleDelete(item.id, item.name)}
                            className="px-2.5 py-1 text-[11px] font-medium bg-rose-950/40 text-rose-400 border border-rose-800/60 rounded hover:bg-rose-900/50"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
          <span>
            Menampilkan {filteredPartners.length} dari {partners.length} Mitra Industri
          </span>
          <div className="flex gap-1">
            <button className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200">
              Sebelumnya
            </button>
            <button className="px-3 py-1 bg-[#27272A] border border-zinc-700 rounded text-zinc-100 font-bold">
              1
            </button>
            <button className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200">
              Selanjutnya
            </button>
          </div>
        </div>
      </div>

      {/* SLIDE-OVER / DRAWER DETAIL MITRA */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedPartner(null)}
          ></div>

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#18181B] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
              <div className="space-y-6">
                {/* Drawer Header */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      {selectedPartner.id}
                    </span>
                    <h2 className="text-lg font-bold text-zinc-100 mt-0.5">
                      {selectedPartner.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedPartner(null)}
                    className="p-1.5 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-zinc-500 font-medium block">Bidang / Sektor Industri</span>
                    <span className="text-zinc-200 font-semibold text-sm mt-0.5 block">{selectedPartner.sector}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-[#09090B] p-3 rounded-md border border-zinc-800">
                    <div>
                      <span className="text-zinc-500 block">Kota</span>
                      <span className="text-zinc-200 font-medium mt-0.5 block">{selectedPartner.city}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Status Kerjasama</span>
                      <span className="text-emerald-400 font-semibold mt-0.5 block">{selectedPartner.status}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-zinc-500 font-medium block">Alamat Lengkap</span>
                    <span className="text-zinc-300 mt-0.5 block">{selectedPartner.address}</span>
                  </div>

                  <div className="border-t border-zinc-800 pt-4 space-y-3">
                    <h3 className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">Informasi Pembimbing</h3>
                    <div>
                      <span className="text-zinc-500 block">Nama Pembimbing</span>
                      <span className="text-zinc-200 font-medium">{selectedPartner.mentorName}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Kontak / Email</span>
                      <span className="text-zinc-300 font-mono">{selectedPartner.mentorContact}</span>
                    </div>
                  </div>

                  <div className="border-t border-zinc-800 pt-4 space-y-3">
                    <h3 className="text-zinc-400 font-bold uppercase tracking-wider text-[11px]">Kapasitas PKL</h3>
                    <div className="bg-[#09090B] p-3 rounded-md border border-zinc-800 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Siswa Aktif:</span>
                        <span className="font-bold text-zinc-100">{selectedPartner.activeStudents} Siswa</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-400">Total Kuota:</span>
                        <span className="font-bold text-zinc-100">{selectedPartner.quota} Siswa</span>
                      </div>
                      <div className="flex justify-between border-t border-zinc-800/80 pt-2">
                        <span className="text-zinc-400">Sisa Kuota:</span>
                        <span className="font-bold text-amber-400">{selectedPartner.quota - selectedPartner.activeStudents} Siswa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-zinc-800 pt-4 flex gap-3">
                <Link
                  href={`/admin/industri/edit?id=${selectedPartner.id}`}
                  className="flex-1 py-2 bg-zinc-100 text-zinc-900 rounded-md font-bold text-center hover:bg-zinc-200 transition"
                >
                  Edit Mitra
                </Link>
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="px-4 py-2 bg-[#09090B] border border-zinc-800 text-zinc-300 rounded-md font-medium hover:bg-zinc-800 transition"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}