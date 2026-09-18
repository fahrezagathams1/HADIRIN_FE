'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- INLINE SVG ICONS ---
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const AlertCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
);

const XCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

interface AttendanceRecord {
  id: string;
  date: string;
  checkInTime: string;
  status: 'HADIR' | 'IZIN' | 'ALPA';
  reportTitle: string;
  reportId: string;
}

export default function AttendancePage() {
  const [selectedMonth, setSelectedMonth] = useState('2026-08');

  // Dummy Data Riwayat Presensi
  const [attendanceList] = useState<AttendanceRecord[]>([
    {
      id: 'att-1',
      date: '07 Agustus 2026',
      checkInTime: '08:15 WIB',
      status: 'HADIR',
      reportTitle: 'Form Laporan Harian dan Layout Dashboard',
      reportId: 'rep-101',
    },
    {
      id: 'att-2',
      date: '06 Agustus 2026',
      checkInTime: '08:02 WIB',
      status: 'HADIR',
      reportTitle: 'Slicing UI Dashboard Admin dan Mentor',
      reportId: 'rep-100',
    },
    {
      id: 'att-3',
      date: '05 Agustus 2026',
      checkInTime: '-',
      status: 'IZIN',
      reportTitle: 'Izin Sakit (Surat Dokter Terlampir)',
      reportId: 'rep-099',
    },
  ]);

  const totalHadir = 18;
  const totalIzin = 1;
  const totalAlpa = 0;

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER & FILTER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/60 pb-6">
        <div className="space-y-1.5">
          <div className="text-[13px] text-zinc-500">
            Siswa <span className="mx-1.5 text-zinc-700">/</span> Presensi & Kehadiran
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Riwayat Presensi & Kehadiran
          </h1>
          <p className="text-[13px] text-zinc-400">
            Daftar kehadiran Anda yang otomatis tercatat setiap kali mengirim Laporan Harian.
          </p>
        </div>

        {/* FILTER BULAN */}
        <div className="flex items-center gap-3">
          <label className="text-[12px] text-zinc-500 font-medium flex items-center gap-1.5">
            <CalendarIcon />
            Filter Bulan:
          </label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-[#121215] border border-zinc-800/80 rounded-xl px-4 py-2 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all cursor-pointer font-mono"
          />
        </div>
      </div>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#121215] p-5 rounded-xl border border-emerald-900/30 flex items-center justify-between">
          <div>
            <span className="text-[12px] text-emerald-500 font-medium block">Total Hadir</span>
            <p className="text-2xl font-bold text-emerald-400 mt-1 font-mono">{totalHadir} Hari</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-900/50 flex items-center justify-center text-emerald-400">
            <CheckCircleIcon />
          </div>
        </div>

        <div className="bg-[#121215] p-5 rounded-xl border border-amber-900/30 flex items-center justify-between">
          <div>
            <span className="text-[12px] text-amber-500 font-medium block">Total Izin / Sakit</span>
            <p className="text-2xl font-bold text-amber-400 mt-1 font-mono">{totalIzin} Hari</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-950/40 border border-amber-900/50 flex items-center justify-center text-amber-400">
            <AlertCircleIcon />
          </div>
        </div>

        <div className="bg-[#121215] p-5 rounded-xl border border-rose-900/30 flex items-center justify-between">
          <div>
            <span className="text-[12px] text-rose-500 font-medium block">Tanpa Keterangan</span>
            <p className="text-2xl font-bold text-rose-400 mt-1 font-mono">{totalAlpa} Hari</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-950/40 border border-rose-900/50 flex items-center justify-center text-rose-400">
            <XCircleIcon />
          </div>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
          <h2 className="text-[14px] font-bold text-white">Log Kehadiran Bulanan</h2>
          <span className="text-[11px] text-zinc-500 font-mono">Diperbarui Secara Otomatis</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-[#18181B] border-b border-zinc-800/80 text-zinc-400 font-medium">
              <tr>
                <th className="px-6 py-4 font-medium">Tanggal</th>
                <th className="px-6 py-4 font-medium">Waktu Submit Log</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium">Aktivitas Laporan</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {attendanceList.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-900/40 transition-colors">
                  {/* TANGGAL */}
                  <td className="px-6 py-4 font-bold text-zinc-100 font-mono">
                    {item.date}
                  </td>

                  {/* WAKTU */}
                  <td className="px-6 py-4 text-zinc-400 font-mono">
                    {item.checkInTime}
                  </td>

                  {/* STATUS BADGE */}
                  <td className="px-6 py-4 text-center">
                    {item.status === 'HADIR' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-900/50">
                        HADIR
                      </span>
                    )}
                    {item.status === 'IZIN' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-amber-950/40 text-amber-400 border border-amber-900/50">
                        IZIN
                      </span>
                    )}
                    {item.status === 'ALPA' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-rose-950/40 text-rose-400 border border-rose-800/50">
                        ALPA
                      </span>
                    )}
                  </td>

                  {/* DESKRIPSI LAPORAN */}
                  <td className="px-6 py-4 text-zinc-300 max-w-xs truncate">
                    {item.reportTitle}
                  </td>

                  {/* AKSI */}
                  <td className="px-6 py-4 text-right">
                    <Link
                      href={`/dashboard/daily-report/${item.reportId}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181B] border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all text-[12px] font-medium"
                    >
                      <span>Lihat Laporan</span>
                      <ArrowRightIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}