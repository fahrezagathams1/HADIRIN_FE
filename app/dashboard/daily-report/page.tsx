'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// ==========================================
// TYPES
// ==========================================
interface AttendanceRecord {
  id: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  status: 'HADIR' | 'IZIN' | 'ALPA';
  activity: string;
  notes?: string;
}

// ==========================================
// INLINE SVG ICONS
// ==========================================
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </svg>
);

const XCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function DailyReportPage() {
  const [selectedMonth, setSelectedMonth] = useState('2026-08');

  // ==========================================
  // DUMMY DATA
  // ==========================================
  const [attendanceList] = useState<AttendanceRecord[]>([
    {
      id: 'att-1',
      date: '07 Agustus 2026',
      checkInTime: '08:15 WIB',
      checkOutTime: '17:02 WIB',
      status: 'HADIR',
      activity: 'Slicing UI Dashboard Admin dan Modul Siswa',
    },
    {
      id: 'att-2',
      date: '06 Agustus 2026',
      checkInTime: '08:02 WIB',
      checkOutTime: '17:10 WIB',
      status: 'HADIR',
      activity: 'Implementasi halaman login dan autentikasi',
    },
    {
      id: 'att-3',
      date: '05 Agustus 2026',
      checkInTime: '-',
      checkOutTime: '-',
      status: 'IZIN',
      activity: 'Izin Sakit',
      notes: 'Surat dokter telah dilampirkan',
    },
    {
      id: 'att-4',
      date: '04 Agustus 2026',
      checkInTime: '08:10 WIB',
      checkOutTime: '17:00 WIB',
      status: 'HADIR',
      activity: 'Mempelajari Laravel dan struktur project',
    },
    {
      id: 'att-5',
      date: '03 Agustus 2026',
      checkInTime: '08:20 WIB',
      checkOutTime: '17:05 WIB',
      status: 'HADIR',
      activity: 'Mempelajari Git Flow dan workflow tim',
    },
  ]);

  // ==========================================
  // SUMMARY
  // ==========================================
  const totalHadir = 18;
  const totalIzin = 1;
  const totalAlpa = 0;

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">

      {/* ==========================================
          HEADER
      ========================================== */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
        <div className="space-y-1.5">
          <div className="text-[13px] text-zinc-500">
            Siswa{' '}
            <span className="mx-1.5 text-zinc-400">/</span>{' '}
            History Absen
          </div>

          <h1 className="text-2xl font-bold text-blue-950 tracking-tight">
            Riwayat Kehadiran
          </h1>

          <p className="text-[13px] text-zinc-600">
            Daftar riwayat kehadiran dan presensi kamu selama kegiatan PKL.
          </p>
        </div>

        {/* FILTER BULAN */}
        <div className="flex items-center gap-3">
          <label className="text-[12px] text-zinc-600 font-medium flex items-center gap-1.5">
            <CalendarIcon />
            Filter Bulan:
          </label>

          <input
            type="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="bg-white border border-zinc-300 rounded-xl px-4 py-2 text-[13px] text-zinc-900 focus:outline-none focus:border-blue-700 transition-colors cursor-pointer font-mono"
          />
        </div>
      </div>

      {/* ==========================================
          SUMMARY STATS
      ========================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        {/* HADIR */}
        <div className="bg-white p-5 rounded-xl border border-emerald-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[12px] text-emerald-700 font-medium block">
              Total Hadir
            </span>

            <p className="text-2xl font-bold text-emerald-600 mt-1 font-mono">
              {totalHadir} Hari
            </p>
          </div>

          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
            <CheckCircleIcon />
          </div>
        </div>

        {/* IZIN */}
        <div className="bg-white p-5 rounded-xl border border-amber-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[12px] text-amber-700 font-medium block">
              Total Izin / Sakit
            </span>

            <p className="text-2xl font-bold text-amber-600 mt-1 font-mono">
              {totalIzin} Hari
            </p>
          </div>

          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <AlertCircleIcon />
          </div>
        </div>

        {/* ALPA */}
        <div className="bg-white p-5 rounded-xl border border-rose-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-[12px] text-rose-700 font-medium block">
              Tanpa Keterangan
            </span>

            <p className="text-2xl font-bold text-rose-600 mt-1 font-mono">
              {totalAlpa} Hari
            </p>
          </div>

          <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
            <XCircleIcon />
          </div>
        </div>
      </div>

      {/* ==========================================
          TABLE
      ========================================== */}
      <div className="bg-white border border-zinc-200 shadow-sm rounded-xl overflow-hidden">

        {/* TABLE HEADER */}
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <div>
            <h2 className="text-[14px] font-bold text-zinc-900">
              History Kehadiran
            </h2>

            <p className="text-[11px] text-zinc-600 mt-1">
              Riwayat presensi berdasarkan bulan yang dipilih.
            </p>
          </div>

          <span className="text-[11px] text-zinc-500 font-mono">
            Diperbarui Secara Otomatis
          </span>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">

            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-600 font-medium">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">
                  Tanggal
                </th>

                <th scope="col" className="px-6 py-4 font-medium">
                  Jam Masuk
                </th>

                <th scope="col" className="px-6 py-4 font-medium">
                  Jam Keluar
                </th>

                <th scope="col" className="px-6 py-4 font-medium text-center">
                  Status
                </th>

                <th scope="col" className="px-6 py-4 font-medium">
                  Aktivitas
                </th>

                <th scope="col" className="px-6 py-4 font-medium text-right">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-zinc-200">
              {attendanceList.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-zinc-50 transition-colors"
                >
                  {/* TANGGAL */}
                  <td className="px-6 py-4 font-bold text-zinc-900 font-mono whitespace-nowrap">
                    {item.date}
                  </td>

                  {/* JAM MASUK */}
                  <td className="px-6 py-4 text-zinc-600 font-mono whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <ClockIcon />
                      {item.checkInTime}
                    </span>
                  </td>

                  {/* JAM KELUAR */}
                  <td className="px-6 py-4 text-zinc-600 font-mono whitespace-nowrap">
                    {item.checkOutTime}
                  </td>

                  {/* STATUS */}
                  <td className="px-6 py-4 text-center">
                    {item.status === 'HADIR' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        HADIR
                      </span>
                    )}

                    {item.status === 'IZIN' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        IZIN
                      </span>
                    )}

                    {item.status === 'ALPA' && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200">
                        ALPA
                      </span>
                    )}
                  </td>

                  {/* AKTIVITAS */}
                  <td className="px-6 py-4 text-zinc-700 max-w-sm">
                    <div className="truncate">
                      {item.activity}
                    </div>

                    {item.notes && (
                      <div className="text-[11px] text-zinc-500 mt-1 truncate">
                        {item.notes}
                      </div>
                    )}
                  </td>

                  {/* AKSI */}
                  <td className="px-6 py-4 text-right">
                    <Link
                      href="/dashboard/daily-report"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-zinc-300 text-blue-700 hover:text-blue-900 hover:border-blue-300 transition-colors text-[12px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
                    >
                      <span>Detail</span>
                      <ArrowRightIcon />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* TABLE FOOTER */}
        <div className="px-6 py-4 border-t border-zinc-200 flex items-center justify-between">
          <span className="text-[11px] text-zinc-600">
            Menampilkan{' '}
            <span className="text-zinc-900 font-medium">
              {attendanceList.length}
            </span>{' '}
            data kehadiran.
          </span>

          <Link
            href="/dashboard"
            className="text-[11px] text-blue-700 hover:text-blue-900 transition-colors font-medium"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
