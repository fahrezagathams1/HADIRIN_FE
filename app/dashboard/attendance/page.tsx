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

  // Dummy Data Riwayat Presensi (Sesuai Aturan PRD Hadirin)
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
    <div className="max-w-5xl space-y-6 pb-12">
      {/* HEADER HALAMAN */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Riwayat Presensi & Kehadiran</h1>
          <p className="text-xs text-slate-500 mt-1">
            Daftar kehadiran Anda yang otomatis tercatat setiap kali mengirim Laporan Harian.
          </p>
        </div>

        {/* FILTER BULAN */}
        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">Bulan:</label>
          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 text-slate-800 cursor-pointer shadow-sm"
          />
        </div>
      </div>

      {/* CARD STATISTIK / RINGKASAN REKAP */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Total Hadir</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">18 Hari</p>
          </div>
          <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold text-sm">
            ✓
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Total Izin / Sakit</p>
            <p className="text-2xl font-bold text-amber-600 mt-1">1 Hari</p>
          </div>
          <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 font-bold text-sm">
            !
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-500">Tanpa Keterangan</p>
            <p className="text-2xl font-bold text-rose-600 mt-1">0 Hari</p>
          </div>
          <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 font-bold text-sm">
            ✕
          </div>
        </div>
      </div>

      {/* TABEL RIWAYAT PRESENSI */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-800">Log Kehadiran Bulanan</h2>
          <span className="text-[11px] font-medium text-slate-400">Diperbarui Secara Otomatis</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-3.5 px-5">Tanggal</th>
                <th className="py-3.5 px-5">Waktu Submit Log</th>
                <th className="py-3.5 px-5">Status</th>
                <th className="py-3.5 px-5">Aktivitas Laporan</th>
                <th className="py-3.5 px-5 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {attendanceList.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-800">{item.date}</td>
                  <td className="py-4 px-5 text-slate-600 font-medium">{item.checkInTime}</td>
                  <td className="py-4 px-5">
                    {item.status === 'HADIR' && (
                      <span className="px-2.5 py-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg">
                        HADIR
                      </span>
                    )}
                    {item.status === 'IZIN' && (
                      <span className="px-2.5 py-1 text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 rounded-lg">
                        IZIN
                      </span>
                    )}
                    {item.status === 'ALPA' && (
                      <span className="px-2.5 py-1 text-[10px] font-bold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
                        ALPA
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5 text-slate-600 max-w-xs truncate">{item.reportTitle}</td>
                  <td className="py-4 px-5 text-right">
                    <Link
                      href={`/dashboard/daily-report/${item.reportId}`}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 hover:underline"
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