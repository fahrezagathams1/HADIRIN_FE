'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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

  return (
    <div className="space-y-6 text-zinc-100 pb-12">
      {/* HEADER HALAMAN */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-zinc-100">
            Riwayat Presensi & Kehadiran
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Daftar kehadiran Anda yang otomatis tercatat setiap kali mengirim Laporan Harian.
          </p>
        </div>

        {/* FILTER BULAN */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-medium text-zinc-400">Bulan:</label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-1.5 text-xs bg-[#09090B] border border-zinc-800 rounded-md text-zinc-100 focus:outline-none focus:border-zinc-600 font-medium cursor-pointer"
          />
        </div>
      </div>

      {/* STATISTIK PRESENSI MATTE DARK */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-zinc-400 block">Total Hadir</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">18 Hari</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-emerald-400 font-bold text-sm">
            ✓
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-zinc-400 block">Total Izin / Sakit</span>
            <span className="text-2xl font-black text-amber-400 mt-1 block">1 Hari</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-amber-400 font-bold text-sm">
            !
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs font-medium text-zinc-400 block">Tanpa Keterangan</span>
            <span className="text-2xl font-black text-rose-400 mt-1 block">0 Hari</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-rose-400 font-bold text-sm">
            ✕
          </div>
        </div>
      </div>

      {/* TABEL RIWAYAT PRESENSI */}
      <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="text-sm font-bold text-zinc-100">Log Kehadiran Bulanan</h2>
          <span className="text-[11px] text-zinc-500 font-mono">Diperbarui Secara Otomatis</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                <th className="py-3 px-3">Tanggal</th>
                <th className="py-3 px-3">Waktu Submit Log</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3">Aktivitas Laporan</th>
                <th className="py-3 px-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {attendanceList.map((item) => (
                <tr key={item.id} className="hover:bg-zinc-800/30 transition-none">
                  <td className="py-3.5 px-3 font-bold text-zinc-200">{item.date}</td>
                  <td className="py-3.5 px-3 text-zinc-400 font-medium">{item.checkInTime}</td>
                  <td className="py-3.5 px-3">
                    {item.status === 'HADIR' && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-emerald-400 border border-emerald-800/60 rounded">
                        HADIR
                      </span>
                    )}
                    {item.status === 'IZIN' && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-amber-400 border border-amber-800/60 rounded">
                        IZIN
                      </span>
                    )}
                    {item.status === 'ALPA' && (
                      <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold bg-[#09090B] text-rose-400 border border-rose-800/60 rounded">
                        ALPA
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-3 text-zinc-400 max-w-xs truncate">{item.reportTitle}</td>
                  <td className="py-3.5 px-3 text-right">
                    <Link
                      href={`/dashboard/daily-report/${item.reportId}`}
                      className="inline-block px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white transition-none"
                    >
                      Lihat Laporan →
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