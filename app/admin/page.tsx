// app/admin/page.tsx
'use client';

import React from 'react';

export default function AdminDashboard() {
  const weeklyAttendance = [
    { day: 'Senin', count: '1,120 Siswa Hadir' },
    { day: 'Selasa', count: '1,180 Siswa Hadir' },
    { day: 'Rabu', count: '1,150 Siswa Hadir' },
    { day: 'Kamis', count: '1,140 Siswa Hadir' },
    { day: 'Jumat', count: '1,234 Siswa Hadir' },
  ];

  const recentLogs = [
    {
      student: 'Adriel Nararya',
      school: 'SMKN 1 Bandung',
      title: 'Slicing UI Next.js Dashboard Admin',
      time: '10:00 WIB',
    },
    {
      student: 'Dina Mariana',
      school: 'SMKN 4 Bandung',
      title: 'Setup PostgreSQL & Eloquent ORM',
      time: '08:15 WIB',
    },
    {
      student: 'Siti Rahma',
      school: 'SMKN 2 Bandung',
      title: 'Design Wireframe Mobile App',
      time: 'Kemarin',
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER PAGE */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-blue-950 dark:text-blue-100 tracking-tight">
            Pusat Kendali Sistem PKL
          </h1>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
            Ringkasan sistem, pemantauan aktivitas siswa, dan rekapitulasi kehadiran mingguan.
          </p>
        </div>

        {/* DROPDOWN PERIODE */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">Periode:</label>
          <select className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-blue-500 font-medium cursor-pointer">
            <option>Hari Ini</option>
            <option>Minggu Ini</option>
            <option>Bulan Ini</option>
          </select>
        </div>
      </div>

      {/* STAT CARDS (4 COLUMNS) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* CARD 1 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">
            Total Siswa PKL
          </span>
          <span className="text-3xl font-black text-blue-950 dark:text-blue-100 block mt-2">
            128
          </span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 block">
            Siswa Aktif
          </span>
        </div>

        {/* CARD 2 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">
            Perusahaan Mitra
          </span>
          <span className="text-3xl font-black text-blue-950 dark:text-blue-100 block mt-2">
            24
          </span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 block">
            Instansi Aktif
          </span>
        </div>

        {/* CARD 3 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">
            Total Logbook Masuk
          </span>
          <span className="text-3xl font-black text-blue-950 dark:text-blue-100 block mt-2">
            1,420
          </span>
          <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-1 block">
            Keseluruhan Periode
          </span>
        </div>

        {/* CARD 4 */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">
            Status Server
          </span>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
              Beroperasi
            </span>
          </div>
        </div>
      </div>

      {/* LOWER SECTION (MONITORING & REKAP) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* MONITORING AKTIVITAS TERBARU (2 COLS) - TANPA TOMBOL VERIFIKASI */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                Pemantauan Logbook Siswa
              </h2>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                Daftar aktivitas terbaru yang dikirimkan oleh siswa ke sistem.
              </p>
            </div>
          </div>

          {/* TABLE MONITORING */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  <th className="pb-3">Siswa</th>
                  <th className="pb-3">Judul Aktivitas</th>
                  <th className="pb-3 text-right">Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-xs">
                {recentLogs.map((item, index) => (
                  <tr key={index} className="hover:bg-zinc-50 dark:hover:bg-zinc-800">
                    <td className="py-3.5">
                      <span className="font-bold text-zinc-900 dark:text-zinc-100 block">
                        {item.student}
                      </span>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">
                        {item.school}
                      </span>
                    </td>
                    <td className="py-3.5 text-zinc-700 dark:text-zinc-300 font-medium">
                      {item.title}
                    </td>
                    <td className="py-3.5 text-right text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* REKAP KEHADIRAN MINGGUAN (1 COL) */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-lg p-6">
          <h2 className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            Rekap Kehadiran Mingguan
          </h2>
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 mb-5">
            Total presensi siswa pekan ini.
          </p>

          <div className="space-y-2.5">
            {weeklyAttendance.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-md"
              >
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  {item.day}
                </span>
                <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
