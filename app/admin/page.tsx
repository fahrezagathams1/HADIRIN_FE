'use client';

import React, { useState } from 'react';

export default function AdminDashboardPage() {
  const [period, setPeriod] = useState('Hari Ini');
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  // Kartu statistik (Gabungan wireframe teman + data real)
  const stats = [
    { label: 'Total Siswa PKL', value: '128', change: 'Siswa Aktif' },
    { label: 'Perusahaan Mitra', value: '24', change: 'Instansi Aktif' },
    { label: 'Total Laporan', value: '15', change: 'Perlu Verifikasi' },
    { label: 'Status Server', value: 'Operational', isStatus: true },
  ];

  // Data Rekap Kehadiran Mingguan (Dari wireframe temanmu)
  const weeklyAttendance = [
    { day: 'Senin', count: '1,120 Siswa Hadir' },
    { day: 'Selasa', count: '1,180 Siswa Hadir' },
    { day: 'Rabu', count: '1,150 Siswa Hadir' },
    { day: 'Kamis', count: '1,140 Siswa Hadir' },
    { day: 'Jumat', count: '1,234 Siswa Hadir' },
    { day: 'Sabtu', count: '1,234 Siswa Hadir' },
  ];

  // Data Laporan / User Management
  const [reports, setReports] = useState([
    { id: 1, name: 'Adriel Nararya', school: 'SMKN 1 Bandung', title: 'Slicing UI Next.js', time: '10:00 WIB', status: 'Pending' },
    { id: 2, name: 'Siti Rahma', school: 'SMKN 2 Bandung', title: 'Pengetesan API Login', time: '09:30 WIB', status: 'Approved' },
    { id: 3, name: 'Budi Kurnia', school: 'SMK Pasundan 1', title: 'Membuat Asset Web', time: '08:45 WIB', status: 'Approved' },
    { id: 4, name: 'Dina Mariana', school: 'SMKN 4 Bandung', title: 'Setup PostgreSQL', time: '08:15 WIB', status: 'Pending' },
  ]);

  const handleUpdateStatus = (id: number, newStatus: string) => {
    setReports((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const filteredReports = reports.filter((report) =>
    activeTab === 'pending' ? report.status === 'Pending' : report.status === 'Approved'
  );

  return (
    <div className="space-y-8">
      {/* HEADER & FILTER PERIODE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Control Center System PKL</h1>
          <p className="text-xs text-slate-500 mt-1">
            Ringkasan sistem, aktivitas laporan siswa, dan rekapitulasi kehadiran mingguan.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          <span className="text-xs text-slate-400 font-medium">Periode:</span>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="text-xs font-semibold text-slate-700 bg-transparent focus:outline-none cursor-pointer"
          >
            <option value="Hari Ini">Hari Ini</option>
            <option value="Minggu Ini">Minggu Ini</option>
            <option value="Bulan Ini">Bulan Ini</option>
          </select>
        </div>
      </div>

      {/* CARDS STATISTIK (4 CARD BERSAMA STATUS SERVER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
            <span className="text-xs font-semibold text-slate-500">{item.label}</span>
            {item.isStatus ? (
              <div className="flex items-center gap-2 pt-1">
                <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xl font-bold text-slate-900">{item.value}</span>
              </div>
            ) : (
              <div className="text-2xl font-bold text-slate-900">{item.value}</div>
            )}
            <div className="text-[11px] font-medium text-slate-400">{item.change}</div>
          </div>
        ))}
      </div>

      {/* CONTENT UTAMA (LAYOUT GABUNGAN WIREFRAME + MODERN) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* KOLOM KIRI: TABEL LAPORAN TERBARU (2 KOLOM) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between">
          <div>
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Aktivitas Laporan Terbaru
                </h2>
                <p className="text-xs text-slate-400">Verifikasi cepat logbook yang diunggah siswa.</p>
              </div>

              {/* TAB SWITCHER */}
              <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'pending'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Perlu Review ({reports.filter((r) => r.status === 'Pending').length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-3 py-1 rounded-md transition-all ${
                    activeTab === 'completed'
                      ? 'bg-white text-indigo-600 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  Selesai
                </button>
              </div>
            </div>

            {/* TABEL DATA */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3 px-5">Siswa</th>
                    <th className="py-3 px-5">Judul Laporan</th>
                    <th className="py-3 px-5">Waktu</th>
                    <th className="py-3 px-5 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredReports.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-slate-400 font-medium">
                        Tidak ada laporan dalam kategori ini.
                      </td>
                    </tr>
                  ) : (
                    filteredReports.map((report) => (
                      <tr key={report.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3.5 px-5">
                          <span className="font-semibold text-slate-800 block">{report.name}</span>
                          <span className="text-[10px] text-slate-400">{report.school}</span>
                        </td>
                        <td className="py-3.5 px-5 font-medium text-slate-700">{report.title}</td>
                        <td className="py-3.5 px-5 text-slate-500">{report.time}</td>
                        <td className="py-3.5 px-5 text-right">
                          {report.status === 'Pending' ? (
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={() => handleUpdateStatus(report.id, 'Approved')}
                                className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200 rounded-md transition-colors"
                              >
                                Setujui
                              </button>
                              <button
                                onClick={() => handleUpdateStatus(report.id, 'Rejected')}
                                className="px-2.5 py-1 text-[11px] font-semibold bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-md transition-colors"
                              >
                                Tolak
                              </button>
                            </div>
                          ) : (
                            <span className="px-2.5 py-1 text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full">
                              Disetujui
                            </span>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* KOLOM KANAN: REKAP KEHADIRAN MINGGUAN (DARI WIREFRAME) */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Rekap Kehadiran Mingguan
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">Total presensi siswa pekan ini.</p>
          </div>

          <div className="space-y-2.5">
            {weeklyAttendance.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                <span className="font-semibold text-slate-700">{item.day}</span>
                <span className="font-bold text-slate-900">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}