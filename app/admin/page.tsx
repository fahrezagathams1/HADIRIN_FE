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

  const recentActivities = [
    {
      student: 'Adriel Nararya',
      school: 'SMKN 1 Bandung',
      title: 'Slicing UI Next.js',
      time: '10:00 WIB',
    },
    {
      student: 'Dina Mariana',
      school: 'SMKN 4 Bandung',
      title: 'Setup PostgreSQL',
      time: '08:15 WIB',
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER PAGE */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
            Control Center System PKL
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Ringkasan sistem, aktivitas laporan siswa, dan rekapitulasi kehadiran mingguan.
          </p>
        </div>

        {/* DROPDOWN PERIODE */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-zinc-400 font-medium">Periode:</label>
          <select className="bg-[#18181B] border border-zinc-800 text-zinc-200 text-xs rounded-md px-3 py-1.5 focus:outline-none focus:border-zinc-600 font-medium">
            <option>Hari Ini</option>
            <option>Minggu Ini</option>
            <option>Bulan Ini</option>
          </select>
        </div>
      </div>

      {/* STAT CARDS (4 COLUMNS) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* CARD 1 */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-400 block">
            Total Siswa PKL
          </span>
          <span className="text-3xl font-black text-zinc-100 block mt-2">
            128
          </span>
          <span className="text-[11px] text-zinc-500 font-medium mt-1 block">
            Siswa Aktif
          </span>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-400 block">
            Perusahaan Mitra
          </span>
          <span className="text-3xl font-black text-zinc-100 block mt-2">
            24
          </span>
          <span className="text-[11px] text-zinc-500 font-medium mt-1 block">
            Instansi Aktif
          </span>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-400 block">
            Total Laporan
          </span>
          <span className="text-3xl font-black text-zinc-100 block mt-2">
            15
          </span>
          <span className="text-[11px] text-zinc-500 font-medium mt-1 block">
            Perlu Verifikasi
          </span>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-5">
          <span className="text-xs font-semibold text-zinc-400 block">
            Status Server
          </span>
          <div className="flex items-center gap-2 mt-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-lg font-bold text-emerald-400">
              Operational
            </span>
          </div>
        </div>
      </div>

      {/* LOWER SECTION (TABLE & REKAP) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* AKTIVITAS LAPORAN TERBARU (2 COLS) */}
        <div className="lg:col-span-2 bg-[#18181B] border border-zinc-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
                Aktivitas Laporan Terbaru
              </h2>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Verifikasi cepat logbook yang diunggah siswa.
              </p>
            </div>

            {/* FILTER TAB */}
            <div className="flex bg-[#09090B] border border-zinc-800 p-1 rounded-md gap-1">
              <button className="px-3 py-1 text-[11px] font-bold bg-[#27272A] text-zinc-100 rounded">
                Perlu Review (2)
              </button>
              <button className="px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-200">
                Selesai
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                  <th className="pb-3">Siswa</th>
                  <th className="pb-3">Judul Laporan</th>
                  <th className="pb-3">Waktu</th>
                  <th className="pb-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 text-xs">
                {recentActivities.map((item, index) => (
                  <tr key={index} className="hover:bg-zinc-800/30">
                    <td className="py-3.5">
                      <span className="font-bold text-zinc-200 block">
                        {item.student}
                      </span>
                      <span className="text-[10px] text-zinc-500 block">
                        {item.school}
                      </span>
                    </td>
                    <td className="py-3.5 text-zinc-300 font-medium">
                      {item.title}
                    </td>
                    <td className="py-3.5 text-zinc-400 font-medium">
                      {item.time}
                    </td>
                    <td className="py-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-2.5 py-1 text-[11px] font-bold bg-emerald-950/40 text-emerald-400 border border-emerald-800/60 rounded hover:bg-emerald-900/50">
                          Setujui
                        </button>
                        <button className="px-2.5 py-1 text-[11px] font-bold bg-rose-950/40 text-rose-400 border border-rose-800/60 rounded hover:bg-rose-900/50">
                          Tolak
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* REKAP KEHADIRAN MINGGUAN (1 COL) */}
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xs font-bold text-zinc-200 uppercase tracking-wider">
            Rekap Kehadiran Mingguan
          </h2>
          <p className="text-[11px] text-zinc-500 mt-0.5 mb-5">
            Total presensi siswa pekan ini.
          </p>

          <div className="space-y-2.5">
            {weeklyAttendance.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-[#09090B] border border-zinc-800/80 rounded-md"
              >
                <span className="text-xs font-medium text-zinc-400">
                  {item.day}
                </span>
                <span className="text-xs font-bold text-zinc-100">
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