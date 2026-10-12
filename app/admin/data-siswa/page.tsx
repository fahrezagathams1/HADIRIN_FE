'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ==========================================
// INLINE SVG ICONS
// ==========================================
const PlusIcon = () => (
    <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
        />
    </svg>
);

const SearchIcon = () => (
    <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
    </svg>
);

const UsersIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
    </svg>
);

const CheckCircleIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
    </svg>
);

const GraduationIcon = () => (
    <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m22 10-10-5L2 10l10 5 10-5ZM6 12.5v4.5c3 2 9 2 12 0v-4.5"
        />
    </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function DataSiswaPage() {
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('Semua');

    // ==========================================
    // DUMMY DATA
    // ==========================================
    const students = [
        {
            id: '1',
            nisn: '0051234567',
            name: 'Adriel Nararya',
            school: 'SMKN 1 Bandung',
            major: 'Rekayasa Perangkat Lunak',
            company: 'PT Tech Innovation',
            status: 'Aktif',
            startDate: '1 Jul 2026',
        },
        {
            id: '2',
            nisn: '0057654321',
            name: 'Dina Mariana',
            school: 'SMKN 4 Bandung',
            major: 'Rekayasa Perangkat Lunak',
            company: 'Digital Creative Studio',
            status: 'Aktif',
            startDate: '1 Jul 2026',
        },
        {
            id: '3',
            nisn: '0061122334',
            name: 'Bagus Pratama',
            school: 'SMKN 2 Bandung',
            major: 'Teknik Komputer Jaringan',
            company: 'Nusantara IT Solutions',
            status: 'Selesai',
            startDate: '1 Jan 2026',
        },
        {
            id: '4',
            nisn: '0069988776',
            name: 'Siti Rahma',
            school: 'SMKN 1 Bandung',
            major: 'Multimedia',
            company: 'PT Global Network',
            status: 'Pending',
            startDate: '15 Jul 2026',
        },
    ];

    // ==========================================
    // FILTER DATA
    // ==========================================
    const filteredStudents = students.filter((student) => {
        const searchMatch =
            student.name.toLowerCase().includes(search.toLowerCase()) ||
            student.nisn.includes(search);

        const statusMatch =
            filterStatus === 'Semua' ||
            student.status === filterStatus;

        return searchMatch && statusMatch;
    });

    return (
        <div className="space-y-6">

            {/* ==========================================
                HEADER PAGE & ACTION BUTTON
            ========================================== */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
                        Data Siswa PKL
                    </h1>

                    <p className="text-xs text-zinc-400 mt-1">
                        Kelola daftar seluruh siswa peserta Praktek Kerja Lapangan.
                    </p>
                </div>

                {/* TAMBAH SISWA */}
                <Link
                    href="/admin/data-siswa/create-siswa"
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
                    <span>Tambah Siswa</span>
                </Link>
            </div>

            {/* ==========================================
                SUMMARY DATA
            ========================================== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {/* TOTAL */}
                <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-zinc-400 font-medium block">
                            Total Siswa Terdaftar
                        </span>

                        <span className="text-2xl font-black text-zinc-100 mt-1 block">
                            128
                        </span>
                    </div>

                    <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
                        <UsersIcon />
                    </div>
                </div>

                {/* AKTIF */}
                <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-zinc-400 font-medium block">
                            Aktif Melaksanakan
                        </span>

                        <span className="text-2xl font-black text-emerald-400 mt-1 block">
                            112
                        </span>
                    </div>

                    <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-emerald-400">
                        <CheckCircleIcon />
                    </div>
                </div>

                {/* SELESAI */}
                <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <span className="text-xs text-zinc-400 font-medium block">
                            Selesai / Alumni
                        </span>

                        <span className="text-2xl font-black text-blue-400 mt-1 block">
                            16
                        </span>
                    </div>

                    <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-blue-400">
                        <GraduationIcon />
                    </div>
                </div>
            </div>

            {/* ==========================================
                TABLE CONTAINER
            ========================================== */}
            <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6 space-y-4">

                {/* FILTER & SEARCH */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">

                    {/* SEARCH */}
                    <div className="relative flex-1 max-w-sm">
                        <input
                            type="text"
                            placeholder="Cari berdasarkan nama atau NISN..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-500 font-medium"
                        />

                        <div className="absolute left-3 top-2.5 text-zinc-500">
                            <SearchIcon />
                        </div>
                    </div>

                    {/* STATUS FILTER */}
                    <div className="flex items-center gap-2">
                        <label className="text-xs text-zinc-400 font-medium">
                            Status:
                        </label>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="bg-[#09090B] border border-zinc-800 text-zinc-200 text-xs rounded-md px-3 py-2 focus:outline-none focus:border-zinc-600 font-medium"
                        >
                            <option value="Semua">
                                Semua Status
                            </option>

                            <option value="Aktif">
                                Aktif
                            </option>

                            <option value="Selesai">
                                Selesai
                            </option>

                            <option value="Pending">
                                Pending
                            </option>
                        </select>
                    </div>
                </div>

                {/* ==========================================
                    TABLE
                ========================================== */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">

                        <thead>
                            <tr className="border-b border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                                <th className="py-3 px-3">
                                    Siswa & NISN
                                </th>

                                <th className="py-3 px-3">
                                    Sekolah & Jurusan
                                </th>

                                <th className="py-3 px-3">
                                    Perusahaan Mitra
                                </th>

                                <th className="py-3 px-3">
                                    Tanggal Mulai
                                </th>

                                <th className="py-3 px-3">
                                    Status
                                </th>

                                <th className="py-3 px-3 text-right">
                                    Aksi
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-zinc-800/60 text-xs">

                            {filteredStudents.length > 0 ? (
                                filteredStudents.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="hover:bg-zinc-800/30 transition-colors"
                                    >

                                        {/* NAMA & NISN */}
                                        <td className="py-3.5 px-3">
                                            <span className="font-bold text-zinc-200 block">
                                                {item.name}
                                            </span>

                                            <span className="text-[10px] text-zinc-500 font-mono block">
                                                NISN: {item.nisn}
                                            </span>
                                        </td>

                                        {/* SEKOLAH & JURUSAN */}
                                        <td className="py-3.5 px-3">
                                            <span className="text-zinc-300 font-medium block">
                                                {item.school}
                                            </span>

                                            <span className="text-[10px] text-zinc-500 block">
                                                {item.major}
                                            </span>
                                        </td>

                                        {/* PERUSAHAAN */}
                                        <td className="py-3.5 px-3 text-zinc-300 font-medium">
                                            {item.company}
                                        </td>

                                        {/* TANGGAL */}
                                        <td className="py-3.5 px-3 text-zinc-400 font-medium">
                                            {item.startDate}
                                        </td>

                                        {/* STATUS */}
                                        <td className="py-3.5 px-3">

                                            {item.status === 'Aktif' && (
                                                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-emerald-400 border border-emerald-800/60 rounded">
                                                    Aktif
                                                </span>
                                            )}

                                            {item.status === 'Selesai' && (
                                                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-blue-400 border border-blue-800/60 rounded">
                                                    Selesai
                                                </span>
                                            )}

                                            {item.status === 'Pending' && (
                                                <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-amber-400 border border-amber-800/60 rounded">
                                                    Pending
                                                </span>
                                            )}

                                        </td>

                                        {/* AKSI */}
                                        <td className="py-3.5 px-3 text-right">
                                            <div className="flex items-center justify-end gap-1.5">

                                                <button
                                                    type="button"
                                                    className="px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white transition-all"
                                                >
                                                    Detail
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white transition-all"
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    type="button"
                                                    className="px-2.5 py-1 text-[11px] font-medium bg-rose-950/40 text-rose-400 border border-rose-800/60 rounded hover:bg-rose-900/50 transition-all"
                                                >
                                                    Hapus
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="py-12 text-center"
                                    >
                                        <p className="text-xs text-zinc-500">
                                            Tidak ada data siswa yang ditemukan.
                                        </p>
                                    </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

                {/* ==========================================
                    PAGINATION
                ========================================== */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800 text-xs text-zinc-400">

                    <span>
                        Menampilkan{' '}
                        <span className="text-zinc-200 font-medium">
                            {filteredStudents.length}
                        </span>{' '}
                        dari 128 siswa
                    </span>

                    <div className="flex gap-1">

                        <button
                            type="button"
                            className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            Sebelumnya
                        </button>

                        <button
                            type="button"
                            className="px-3 py-1 bg-[#27272A] border border-zinc-700 rounded text-zinc-100 font-bold"
                        >
                            1
                        </button>

                        <button
                            type="button"
                            className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            2
                        </button>

                        <button
                            type="button"
                            className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            3
                        </button>

                        <button
                            type="button"
                            className="px-3 py-1 bg-[#09090B] border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 transition-colors"
                        >
                            Selanjutnya
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}