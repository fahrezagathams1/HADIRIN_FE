'use client';

import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

// --- MOCK DATA ---
const mockPresensi = [
  {
    id: 1,
    name: 'Adriel Nararya',
    school: 'SMKN 1 Bandung',
    timeIn: '07:45 WIB',
    timeOut: '17:05 WIB',
    location: 'Office Area (Valid)',
    status: 'Hadir',
  },
  {
    id: 2,
    name: 'Dina Mariana',
    school: 'SMKN 4 Bandung',
    timeIn: '07:50 WIB',
    timeOut: '17:00 WIB',
    location: 'Office Area (Valid)',
    status: 'Hadir',
  },
  {
    id: 3,
    name: 'Siti Rahma',
    school: 'SMKN 2 Bandung',
    timeIn: '08:15 WIB', // Terlambat
    timeOut: '-',
    location: 'Office Area (Valid)',
    status: 'Hadir', // Bisa dibikin status 'Terlambat' kalau mau detail
  },
  {
    id: 4,
    name: 'Budi Kurnia',
    school: 'SMKN 1 Cimahi',
    timeIn: '-',
    timeOut: '-',
    location: '-',
    status: 'Izin',
    note: 'Ada keperluan keluarga',
  },
];

export default function RekapPresensiPage() {
  // Set default tanggal ke hari ini (YYYY-MM-DD)
  const [selectedDate, setSelectedDate] = useState('2026-09-07');

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER & DATE PICKER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-800/60 pb-6">
        <div className="space-y-1.5">
          <div className="text-[13px] text-zinc-500">
            Pembimbing <span className="mx-1.5 text-zinc-700">/</span> Rekap Presensi
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Data Presensi Harian
          </h1>
          <p className="text-[13px] text-zinc-400">
            Pantau jam kehadiran dan lokasi absensi siswa bimbinganmu hari ini.
          </p>
        </div>

        {/* Date Filter */}
        <div className="flex items-center gap-3">
          <label className="text-[12px] text-zinc-500 font-medium">Pilih Tanggal:</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
              <CalendarIcon />
            </div>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-[#121215] border border-zinc-800/80 rounded-xl pl-10 pr-4 py-2 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all [&::-webkit-calendar-picker-indicator]:invert-[0.8] [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80">
          <span className="text-[12px] text-zinc-400 font-medium">Total Siswa</span>
          <p className="text-2xl font-bold text-white mt-1">4</p>
        </div>
        <div className="bg-[#121215] p-5 rounded-xl border border-emerald-900/30">
          <span className="text-[12px] text-emerald-500 font-medium">Hadir</span>
          <p className="text-2xl font-bold text-emerald-400 mt-1">3</p>
        </div>
        <div className="bg-[#121215] p-5 rounded-xl border border-amber-900/30">
          <span className="text-[12px] text-amber-500 font-medium">Izin / Sakit</span>
          <p className="text-2xl font-bold text-amber-400 mt-1">1</p>
        </div>
        <div className="bg-[#121215] p-5 rounded-xl border border-rose-900/30">
          <span className="text-[12px] text-rose-500 font-medium">Tanpa Keterangan</span>
          <p className="text-2xl font-bold text-rose-400 mt-1">0</p>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-[#18181B] border-b border-zinc-800/80 text-zinc-400 font-medium">
              <tr>
                <th className="px-6 py-4 font-medium">Siswa</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Jam Masuk</th>
                <th className="px-6 py-4 font-medium">Jam Pulang</th>
                <th className="px-6 py-4 font-medium">Lokasi GPS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {mockPresensi.map((data) => (
                <tr key={data.id} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#18181B] border border-zinc-800 flex items-center justify-center font-bold text-zinc-300">
                        {data.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-zinc-100">{data.name}</div>
                        <div className="text-[11px] text-zinc-500">{data.school}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium ${
                      data.status === 'Hadir' 
                        ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50' 
                        : 'bg-amber-950/40 text-amber-400 border border-amber-900/50'
                    }`}>
                      {data.status}
                    </span>
                    {data.note && <div className="text-[11px] text-zinc-500 mt-1">{data.note}</div>}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-300 font-medium">
                      <ClockIcon />
                      <span className={data.timeIn === '-' ? 'text-zinc-600' : ''}>{data.timeIn}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-300 font-medium">
                      <ClockIcon />
                      <span className={data.timeOut === '-' ? 'text-zinc-600' : ''}>{data.timeOut}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-400 text-[12px]">
                      <MapPinIcon />
                      <span className={data.location === '-' ? 'text-zinc-600' : ''}>{data.location}</span>
                    </div>
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