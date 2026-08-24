// app/admin/verifikasi/page.tsx
'use client';

import React, { useState } from 'react';

export default function VerifikasiLaporanPage() {
    const [search, setSearch] = useState('');
    const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
    const [selectedReport, setSelectedReport] = useState<any | null>(null);

    const reports = [
        {
            id: 'REP-001',
            studentName: 'Adriel Nararya',
            nisn: '0051234567',
            school: 'SMKN 1 Bandung',
            company: 'PT Tech Innovation',
            date: '24 Ags 2026',
            time: '10:00 WIB',
            title: 'Slicing UI Next.js Dashboard Admin',
            description: 'Melakukan slicing UI komponen dashboard admin menggunakan Next.js App Router dan Tailwind CSS. Menyelaraskan tema warna dark mode serta responsivitas layout.',
            attachment: 'logbook_adriel_240826.pdf',
            status: 'pending',
        },
        {
            id: 'REP-002',
            studentName: 'Dina Mariana',
            nisn: '0057654321',
            school: 'SMKN 4 Bandung',
            company: 'Digital Creative Studio',
            date: '24 Ags 2026',
            time: '08:15 WIB',
            title: 'Setup PostgreSQL & Eloquent ORM',
            description: 'Menginstal PostgreSQL di Docker container, konfigurasi database, dan mengonfigurasikan relasi model Eloquent ORM pada project Laravel.',
            attachment: 'screenshot_db_setup.png',
            status: 'pending',
        },
        {
            id: 'REP-003',
            studentName: 'Rizky Ramadhan',
            nisn: '0061122334',
            school: 'SMKN 2 Bandung',
            company: 'Nusantara IT Solutions',
            date: '23 Ags 2026',
            time: '16:45 WIB',
            title: 'Integrasi Authentication REST API',
            description: 'Membuat endpoint login dan register menggunakan Laravel Sanctum JWT authentication serta penanganan error response validation.',
            attachment: 'api_documentation.pdf',
            status: 'approved',
        },
        {
            id: 'REP-004',
            studentName: 'Siti Rahma',
            nisn: '0069988776',
            school: 'SMKN 1 Bandung',
            company: 'PT Global Network',
            date: '23 Ags 2026',
            time: '15:20 WIB',
            title: 'Desain Layout Figma Landing Page',
            description: 'Membuat wireframe dan hifi prototype landing page untuk sistem presensi di Figma.',
            attachment: 'figma_link.txt',
            status: 'rejected',
        },
    ];

    const filteredReports = reports.filter((item) => {
        const matchesTab = item.status === activeTab;
        const matchesSearch =
            item.studentName.toLowerCase().includes(search.toLowerCase()) ||
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.school.toLowerCase().includes(search.toLowerCase());
        return matchesTab && matchesSearch;
    });

    return (
        <div className="space-y-6">
            {/* HEADER PAGE */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
                        Verifikasi Laporan Logbook
                    </h1>
                    <p className="text-xs text-zinc-400 mt-1">
                        Tinjau, setujui, atau tolak catatan harian aktivitas PKL yang diunggah oleh siswa.
                    </p>
                </div>

                {/* METRIK SERBA GELAP */}
                <div className="flex gap-2">
                    <div className="px-3.5 py-1.5 bg-[#18181B] border border-zinc-800 rounded-md text-right">
                        <span className="text-[10px] text-zinc-400 uppercase font-bold block">Perlu Review</span>
                        <span className="text-sm font-black text-amber-400 block mt-0.5">12 Laporan</span>
                    </div>
                </div>
            </div>

            {/* TABS & SEARCH BAR */}
            <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 space-y-4">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">

                    {/* TAB BUTTONS */}
                    <div className="flex bg-[#09090B] border border-zinc-800 p-1 rounded-md gap-1">
                        <button
                            onClick={() => setActiveTab('pending')}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded transition-none ${activeTab === 'pending'
                                    ? 'bg-[#27272A] text-zinc-100 border border-zinc-700'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            Perlu Verifikasi (2)
                        </button>
                        <button
                            onClick={() => setActiveTab('approved')}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded transition-none ${activeTab === 'approved'
                                    ? 'bg-[#27272A] text-zinc-100 border border-zinc-700'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            Disetujui
                        </button>
                        <button
                            onClick={() => setActiveTab('rejected')}
                            className={`px-3.5 py-1.5 text-xs font-bold rounded transition-none ${activeTab === 'rejected'
                                    ? 'bg-[#27272A] text-zinc-100 border border-zinc-700'
                                    : 'text-zinc-400 hover:text-zinc-200'
                                }`}
                        >
                            Ditolak
                        </button>
                    </div>

                    {/* SEARCH INPUT */}
                    <div className="relative w-full sm:w-72">
                        <input
                            type="text"
                            placeholder="Cari nama siswa atau judul..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-500 font-medium"
                        />
                        <svg className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                </div>
            </div>

            {/* DAFTAR LAPORAN (LIST CARD) */}
            <div className="space-y-4">
                {filteredReports.length === 0 ? (
                    <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-12 text-center">
                        <p className="text-xs text-zinc-500">Tidak ada laporan pada kategori ini.</p>
                    </div>
                ) : (
                    filteredReports.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#18181B] border border-zinc-800 rounded-lg p-5 space-y-4 hover:border-zinc-700 transition-none"
                        >
                            {/* TOP ITEM HEADER */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center font-bold text-zinc-200 text-xs">
                                        {item.studentName.substring(0, 2).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-bold text-zinc-100">{item.studentName}</span>
                                            <span className="text-[10px] text-zinc-500 font-mono">({item.nisn})</span>
                                        </div>
                                        <span className="text-[10px] text-zinc-400 block mt-0.5">
                                            {item.school} • {item.company}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 self-start sm:self-auto">
                                    <span className="text-[11px] text-zinc-400 font-medium">
                                        {item.date} • {item.time}
                                    </span>

                                    {item.status === 'pending' && (
                                        <span className="px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-amber-400 border border-amber-800/60 rounded">
                                            Perlu Review
                                        </span>
                                    )}
                                    {item.status === 'approved' && (
                                        <span className="px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-emerald-400 border border-emerald-800/60 rounded">
                                            Disetujui
                                        </span>
                                    )}
                                    {item.status === 'rejected' && (
                                        <span className="px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-rose-400 border border-rose-800/60 rounded">
                                            Ditolak
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* CONTENT BODY */}
                            <div>
                                <h3 className="text-sm font-bold text-zinc-200">{item.title}</h3>
                                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed bg-[#09090B] p-3 border border-zinc-800/60 rounded-md">
                                    {item.description}
                                </p>
                            </div>

                            {/* BOTTOM FOOTER: ATTACHMENT & ACTION BUTTONS */}
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                                {/* LAMPIRAN */}
                                <div className="flex items-center gap-2 text-xs text-zinc-400">
                                    <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <span className="font-mono text-[11px] text-zinc-300 underline cursor-pointer hover:text-white">
                                        {item.attachment}
                                    </span>
                                </div>

                                {/* TOMBOL AKSI VERIFIKASI */}
                                <div className="flex items-center gap-2 justify-end">
                                    <button
                                        onClick={() => setSelectedReport(item)}
                                        className="px-3 py-1.5 text-xs font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white transition-none"
                                    >
                                        Detail Laporan
                                    </button>

                                    {item.status === 'pending' && (
                                        <>
                                            <button className="px-3 py-1.5 text-xs font-bold bg-rose-950/40 text-rose-400 border border-rose-800/60 rounded hover:bg-rose-900/50 transition-none">
                                                Tolak Laporan
                                            </button>
                                            <button className="px-3.5 py-1.5 text-xs font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-800/60 rounded hover:bg-emerald-900/50 transition-none">
                                                Setujui Laporan
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* MODAL DETAIL (DENGAN TEMA MATTE DARK) */}
            {selectedReport && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                    <div className="bg-[#18181B] border border-zinc-800 rounded-lg max-w-lg w-full p-6 space-y-4 text-zinc-100">
                        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                            <h3 className="text-sm font-bold">Detail Laporan Aktivitas</h3>
                            <button
                                onClick={() => setSelectedReport(null)}
                                className="text-zinc-500 hover:text-zinc-200 text-xs font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-3 text-xs">
                            <div>
                                <span className="text-zinc-500 font-medium block">Siswa</span>
                                <span className="font-bold text-zinc-200 block mt-0.5">{selectedReport.studentName} ({selectedReport.school})</span>
                            </div>

                            <div>
                                <span className="text-zinc-500 font-medium block">Judul Logbook</span>
                                <span className="font-bold text-zinc-200 block mt-0.5">{selectedReport.title}</span>
                            </div>

                            <div>
                                <span className="text-zinc-500 font-medium block">Deskripsi Kegiatan</span>
                                <p className="mt-1 bg-[#09090B] border border-zinc-800 p-3 rounded text-zinc-300 leading-relaxed">
                                    {selectedReport.description}
                                </p>
                            </div>

                            <div>
                                <span className="text-zinc-500 font-medium block mb-1">Catatan Pembimbing / Admin (Opsional)</span>
                                <textarea
                                    placeholder="Tambahkan catatan jika laporan perlu diperbaiki..."
                                    className="w-full h-20 bg-[#09090B] border border-zinc-800 rounded p-2 text-xs text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                            <button
                                onClick={() => setSelectedReport(null)}
                                className="px-3.5 py-1.5 text-xs font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}