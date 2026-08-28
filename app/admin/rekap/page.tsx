'use client';

import React, { useState } from 'react';

export default function RekapExportPage() {
  const [reportType, setReportType] = useState('presensi');
  const [dateRange, setDateRange] = useState('bulan_ini');
  const [startDate, setStartDate] = useState('2026-08-01');
  const [endDate, setEndDate] = useState('2026-08-31');
  const [selectedMajor, setSelectedMajor] = useState('Semua');
  const [selectedPartner, setSelectedPartner] = useState('Semua');
  const [exportFormat, setExportFormat] = useState('xlsx');
  const [isExporting, setIsExporting] = useState(false);

  // Dummy Export History
  const [exportLogs, setExportLogs] = useState([
    {
      id: 'EXP-1092',
      title: 'Rekap Presensi Harian Siswa - Agustus 2026',
      type: 'Presensi & Kehadiran',
      format: 'XLSX',
      date: '28 Agu 2026, 08:30',
      size: '1.4 MB',
      status: 'Selesai',
    },
    {
      id: 'EXP-1091',
      title: 'Laporan Jurnal Kegiatan PKL - Jurusan RPL',
      type: 'Jurnal & Activities',
      format: 'PDF',
      date: '25 Agu 2026, 14:15',
      size: '3.8 MB',
      status: 'Selesai',
    },
    {
      id: 'EXP-1090',
      title: 'Rekap Nilai Evaluasi Pembimbing Industri T1 2026',
      type: 'Nilai & Evaluasi',
      format: 'XLSX',
      date: '20 Agu 2026, 11:05',
      size: '890 KB',
      status: 'Selesai',
    },
  ]);

  const handleExport = (e: React.FormEvent) => {
    e.preventDefault();
    setIsExporting(true);

    setTimeout(() => {
      const newLog = {
        id: `EXP-${1093 + exportLogs.length}`,
        title: `Export ${reportType.toUpperCase()} (${selectedMajor}) - ${dateRange.replace('_', ' ')}`,
        type: reportType === 'presensi' ? 'Presensi & Kehadiran' : reportType === 'jurnal' ? 'Jurnal Harian' : 'Nilai Evaluasi',
        format: exportFormat.toUpperCase(),
        date: 'Hari ini, Baru saja',
        size: '1.2 MB',
        status: 'Selesai',
      };

      setExportLogs([newLog, ...exportLogs]);
      setIsExporting(false);
      alert(`File Rekap berhasil di-generate dan diunduh dalam format .${exportFormat}`);
    }, 1200);
  };

  return (
    <div className="space-y-6 text-zinc-100">
      {/* HEADER PAGE */}
      <div>
        <h1 className="text-xl font-bold tracking-tight text-zinc-100">
          Rekap & Export Data PKL
        </h1>
        <p className="text-xs text-zinc-400 mt-1">
          Unduh rekapitulasi presensi, laporan harian, serta evaluasi nilai siswa dalam format PDF, Excel, atau CSV.
        </p>
      </div>

      {/* METRIK MATTE DARK */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Presensi Bulan Ini</span>
            <span className="text-2xl font-black text-emerald-400 mt-1 block">96.4%</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 block">Tingkat kehadiran kumulatif</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-emerald-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Laporan Terverifikasi</span>
            <span className="text-2xl font-black text-zinc-100 mt-1 block">1,420 / 1,500</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 block">Logbook harian disetujui</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-zinc-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>

        <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-4 flex items-center justify-between">
          <div>
            <span className="text-xs text-zinc-400 font-medium block">Total Berkas Di-Export</span>
            <span className="text-[#38BDF8] text-2xl font-black mt-1 block">48 File</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 block">Diunduh oleh admin/pembimbing</span>
          </div>
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-md flex items-center justify-center text-[#38BDF8]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </div>
        </div>
      </div>

      {/* FORM KONFIGURASI EXPORT */}
      <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6 space-y-6">
        <div className="border-b border-zinc-800 pb-4">
          <h2 className="text-sm font-bold text-zinc-100">Konfigurasi & Generate Laporan</h2>
          <p className="text-xs text-zinc-400 mt-0.5">Pilih jenis laporan, rentang tanggal, dan format berkas yang diinginkan.</p>
        </div>

        <form onSubmit={handleExport} className="space-y-6 text-xs">
          {/* 1. JENIS LAPORAN */}
          <div>
            <label className="block text-zinc-300 font-medium mb-2">1. Pilih Jenis Laporan *</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label
                onClick={() => setReportType('presensi')}
                className={`p-4 border rounded-lg cursor-pointer flex flex-col justify-between transition-none ${
                  reportType === 'presensi'
                    ? 'bg-[#09090B] border-zinc-500 text-zinc-100'
                    : 'bg-[#09090B]/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div>
                  <span className="font-bold text-sm block text-zinc-100">Rekap Presensi & Kehadiran</span>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Data jam masuk, jam pulang, keterlambatan, izin, dan persentase kehadiran siswa.
                  </p>
                </div>
                <span className="text-[10px] text-zinc-400 mt-3 block font-mono">Format: .xlsx / .csv / .pdf</span>
              </label>

              <label
                onClick={() => setReportType('jurnal')}
                className={`p-4 border rounded-lg cursor-pointer flex flex-col justify-between transition-none ${
                  reportType === 'jurnal'
                    ? 'bg-[#09090B] border-zinc-500 text-zinc-100'
                    : 'bg-[#09090B]/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div>
                  <span className="font-bold text-sm block text-zinc-100">Rekap Jurnal Kegiatan</span>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Rincian aktivitas harian, kendala pekerjaan, dan verifikasi status logbook siswa.
                  </p>
                </div>
                <span className="text-[10px] text-zinc-400 mt-3 block font-mono">Format: .pdf / .xlsx</span>
              </label>

              <label
                onClick={() => setReportType('nilai')}
                className={`p-4 border rounded-lg cursor-pointer flex flex-col justify-between transition-none ${
                  reportType === 'nilai'
                    ? 'bg-[#09090B] border-zinc-500 text-zinc-100'
                    : 'bg-[#09090B]/50 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div>
                  <span className="font-bold text-sm block text-zinc-100">Evaluasi & Nilai Pembimbing</span>
                  <p className="text-[11px] text-zinc-500 mt-1">
                    Skor kedisiplinan, softskill, teknis, dan catatan penilaian akhir dari industri.
                  </p>
                </div>
                <span className="text-[10px] text-zinc-400 mt-3 block font-mono">Format: .pdf / .xlsx</span>
              </label>
            </div>
          </div>

          {/* 2. FILTER & PARAMETER */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-zinc-300 font-medium mb-1">Periode Waktu</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 bg-[#09090B] border border-zinc-800 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-600 font-medium"
              >
                <option value="bulan_ini">Bulan Ini (Agustus 2026)</option>
                <option value="bulan_lalu">Bulan Lalu (Juli 2026)</option>
                <option value="semester">Satu Semester (PKL 2026)</option>
                <option value="custom">Kustom Tanggal</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1">Jurusan / Keahlian</label>
              <select
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.target.value)}
                className="w-full px-3 py-2 bg-[#09090B] border border-zinc-800 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-600 font-medium"
              >
                <option value="Semua">Semua Jurusan</option>
                <option value="RPL">Rekayasa Perangkat Lunak (RPL)</option>
                <option value="TKJ">Teknik Komputer & Jaringan (TKJ)</option>
                <option value="TKR">Teknik Kendaraan Ringan (TKR)</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 font-medium mb-1">Mitra Perusahaan</label>
              <select
                value={selectedPartner}
                onChange={(e) => setSelectedPartner(e.target.value)}
                className="w-full px-3 py-2 bg-[#09090B] border border-zinc-800 rounded-md text-zinc-200 focus:outline-none focus:border-zinc-600 font-medium"
              >
                <option value="Semua">Semua Perusahaan Mitra</option>
                <option value="PT Tech Innovation">PT Tech Innovation Indonesia</option>
                <option value="Digital Creative Studio">Digital Creative Studio</option>
                <option value="Nusantara IT Solutions">Nusantara IT Solutions</option>
              </select>
            </div>
          </div>

          {dateRange === 'custom' && (
            <div className="grid grid-cols-2 gap-4 max-w-md bg-[#09090B] p-3 border border-zinc-800 rounded-md">
              <div>
                <label className="block text-zinc-400 mb-1 text-[11px]">Dari Tanggal</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#18181B] border border-zinc-800 rounded text-zinc-200 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-zinc-400 mb-1 text-[11px]">Sampai Tanggal</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-[#18181B] border border-zinc-800 rounded text-zinc-200 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* 3. FORMAT FIle & BOTTON ACTION */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-4">
              <span className="text-zinc-300 font-medium">Format File Output:</span>
              <div className="flex items-center gap-2">
                {['xlsx', 'pdf', 'csv'].map((fmt) => (
                  <button
                    type="button"
                    key={fmt}
                    onClick={() => setExportFormat(fmt)}
                    className={`px-3 py-1.5 rounded uppercase font-bold text-[11px] transition-none border ${
                      exportFormat === fmt
                        ? 'bg-zinc-100 text-zinc-900 border-zinc-100'
                        : 'bg-[#09090B] text-zinc-400 border-zinc-800 hover:text-zinc-200'
                    }`}
                  >
                    .{fmt}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={isExporting}
              className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 text-zinc-900 rounded-md text-xs font-bold hover:bg-zinc-200 transition-none disabled:opacity-50 cursor-pointer"
            >
              {isExporting ? (
                <>
                  <svg className="animate-spin w-4 h-4 text-zinc-900" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  <span>Mengeksport Data...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Generate & Download Rekap</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* RIWAYAT EXPORT TERAKHIR */}
      <div className="bg-[#18181B] border border-zinc-800 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <h2 className="text-sm font-bold text-zinc-100">Riwayat Export Terakhir</h2>
          <span className="text-xs text-zinc-500 font-mono">Daftar unduhan 30 hari terakhir</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800 text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                <th className="py-3 px-3">Nama Laporan</th>
                <th className="py-3 px-3">Kategori</th>
                <th className="py-3 px-3">Format</th>
                <th className="py-3 px-3">Waktu Generate</th>
                <th className="py-3 px-3">Ukuran</th>
                <th className="py-3 px-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 text-xs">
              {exportLogs.map((log) => (
                <tr key={log.id} className="hover:bg-zinc-800/30">
                  <td className="py-3.5 px-3">
                    <span className="font-bold text-zinc-200 block">{log.title}</span>
                    <span className="text-[10px] text-zinc-500 font-mono block mt-0.5">{log.id}</span>
                  </td>
                  <td className="py-3.5 px-3 text-zinc-300 font-medium">{log.type}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 text-[10px] font-bold font-mono bg-[#09090B] text-zinc-300 border border-zinc-700/60 rounded">
                      {log.format}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-zinc-400">{log.date}</td>
                  <td className="py-3.5 px-3 text-zinc-400 font-mono">{log.size}</td>
                  <td className="py-3.5 px-3 text-right">
                    <button className="px-2.5 py-1 text-[11px] font-medium bg-[#27272A] text-zinc-300 rounded hover:bg-zinc-700 hover:text-white transition-none">
                      Unduh Ulang
                    </button>
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