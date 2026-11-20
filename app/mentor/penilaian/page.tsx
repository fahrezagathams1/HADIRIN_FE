'use client';

import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
);

const UserCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
);

// --- MOCK DATA EVALUASI ---
const mockPenilaian = [
  {
    id: 1,
    name: 'Adriel Nararya',
    school: 'SMKN 1 Bandung',
    kedisiplinan: 88,
    sikap: 90,
    teknis: 85,
    laporan: 87,
    status: 'Sudah Dinilai',
  },
  {
    id: 2,
    name: 'Dina Mariana',
    school: 'SMKN 4 Bandung',
    kedisiplinan: 90,
    sikap: 92,
    teknis: 88,
    laporan: 90,
    status: 'Sudah Dinilai',
  },
  {
    id: 3,
    name: 'Siti Rahma',
    school: 'SMKN 2 Bandung',
    kedisiplinan: 80,
    sikap: 85,
    teknis: 82,
    laporan: 84,
    status: 'Sudah Dinilai',
  },
  {
    id: 4,
    name: 'Budi Kurnia',
    school: 'SMKN 1 Cimahi',
    kedisiplinan: 0,
    sikap: 0,
    teknis: 0,
    laporan: 0,
    status: 'Belum Dinilai',
  },
];

export default function PenilaianEvaluasiPage() {
  const [dataList, setDataList] = useState(mockPenilaian);
  const [filterStatus, setFilterStatus] = useState('Semua');

  // Modal State untuk Edit/Input Nilai
  const [selectedStudent, setSelectedStudent] = useState<typeof mockPenilaian[0] | null>(null);
  const [formScore, setFormScore] = useState({
    kedisiplinan: 0,
    sikap: 0,
    teknis: 0,
    laporan: 0,
  });

  const handleOpenModal = (student: typeof mockPenilaian[0]) => {
    setSelectedStudent(student);
    setFormScore({
      kedisiplinan: student.kedisiplinan,
      sikap: student.sikap,
      teknis: student.teknis,
      laporan: student.laporan,
    });
  };

  const handleSaveScore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudent) return;

    setDataList((prev) =>
      prev.map((item) =>
        item.id === selectedStudent.id
          ? {
              ...item,
              ...formScore,
              status: 'Sudah Dinilai',
            }
          : item
      )
    );
    setSelectedStudent(null);
  };

  // Hitung Nilai Akhir Rata-rata (Bobot sama 25% x 4)
  const calculateFinalScore = (item: typeof mockPenilaian[0]) => {
    if (item.status === 'Belum Dinilai') return '-';
    const total = item.kedisiplinan + item.sikap + item.teknis + item.laporan;
    return (total / 4).toFixed(1);
  };

  const filteredData = dataList.filter((item) => {
    if (filterStatus === 'Sudah Dinilai') return item.status === 'Sudah Dinilai';
    if (filterStatus === 'Belum Dinilai') return item.status === 'Belum Dinilai';
    return true;
  });

  const totalSiswa = dataList.length;
  const sudahDinilai = dataList.filter((d) => d.status === 'Sudah Dinilai').length;
  const belumDinilai = dataList.filter((d) => d.status === 'Belum Dinilai').length;

  const avgScore = (
    dataList
      .filter((d) => d.status === 'Sudah Dinilai')
      .reduce((acc, curr) => acc + (curr.kedisiplinan + curr.sikap + curr.teknis + curr.laporan) / 4, 0) /
    (sudahDinilai || 1)
  ).toFixed(1);

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">

      {/* HEADER & FILTER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="space-y-1.5">
          <div className="text-[13px] text-zinc-500 dark:text-zinc-400">
            Pembimbing <span className="mx-1.5 text-zinc-400 dark:text-zinc-600">/</span> Penilaian Evaluasi
          </div>
          <h1 className="text-2xl font-bold text-blue-950 dark:text-blue-100 tracking-tight">
            Penilaian & Evaluasi PKL
          </h1>
          <p className="text-[13px] text-zinc-600 dark:text-zinc-400">
            Input dan kelola nilai evaluasi capaian performa siswa bimbinganmu.
          </p>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-3">
          <label className="text-[12px] text-zinc-500 dark:text-zinc-400 font-medium">Filter Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-4 py-2 text-[13px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all cursor-pointer"
          >
            <option value="Semua">Semua Status</option>
            <option value="Sudah Dinilai">Sudah Dinilai</option>
            <option value="Belum Dinilai">Belum Dinilai</option>
          </select>
        </div>
      </div>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <span className="text-[12px] text-zinc-600 dark:text-zinc-400 font-medium">Total Siswa</span>
          <p className="text-2xl font-bold text-blue-950 dark:text-blue-100 mt-1">{totalSiswa}</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm">
          <span className="text-[12px] text-emerald-700 dark:text-emerald-300 font-medium">Sudah Dinilai</span>
          <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mt-1">{sudahDinilai}</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-amber-200 dark:border-amber-800 shadow-sm">
          <span className="text-[12px] text-amber-700 dark:text-amber-300 font-medium">Belum Dinilai</span>
          <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mt-1">{belumDinilai}</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-blue-200 dark:border-blue-800 shadow-sm">
          <span className="text-[12px] text-blue-700 dark:text-blue-300 font-medium">Rata-Rata Nilai</span>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300 mt-1">{avgScore}</p>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-medium">
              <tr>
                <th className="px-6 py-4 font-medium">Siswa</th>
                <th className="px-6 py-4 font-medium text-center">Kedisiplinan</th>
                <th className="px-6 py-4 font-medium text-center">Sikap/Etika</th>
                <th className="px-6 py-4 font-medium text-center">Teknis</th>
                <th className="px-6 py-4 font-medium text-center">Laporan</th>
                <th className="px-6 py-4 font-medium text-center">Nilai Akhir</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {filteredData.map((data) => {
                const finalScore = calculateFinalScore(data);
                return (
                  <tr key={data.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    {/* SISWA INFO */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-900 border border-blue-800 flex items-center justify-center font-bold text-white">
                          {data.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-zinc-900 dark:text-zinc-100">{data.name}</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">{data.school}</div>
                        </div>
                      </div>
                    </td>

                    {/* KEDISIPLINAN */}
                    <td className="px-6 py-4 text-center font-mono text-zinc-800 dark:text-zinc-200">
                      {data.status === 'Belum Dinilai' ? '-' : data.kedisiplinan}
                    </td>

                    {/* SIKAP */}
                    <td className="px-6 py-4 text-center font-mono text-zinc-800 dark:text-zinc-200">
                      {data.status === 'Belum Dinilai' ? '-' : data.sikap}
                    </td>

                    {/* TEKNIS */}
                    <td className="px-6 py-4 text-center font-mono text-zinc-800 dark:text-zinc-200">
                      {data.status === 'Belum Dinilai' ? '-' : data.teknis}
                    </td>

                    {/* LAPORAN */}
                    <td className="px-6 py-4 text-center font-mono text-zinc-800 dark:text-zinc-200">
                      {data.status === 'Belum Dinilai' ? '-' : data.laporan}
                    </td>

                    {/* NILAI AKHIR */}
                    <td className="px-6 py-4 text-center">
                      <span className="font-bold text-blue-950 dark:text-blue-100 font-mono text-[14px]">
                        {finalScore}
                      </span>
                    </td>

                    {/* STATUS BADGE */}
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded text-[11px] font-medium ${
                          data.status === 'Sudah Dinilai'
                            ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                        }`}
                      >
                        {data.status}
                      </span>
                    </td>

                    {/* AKSI BUTTON */}
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleOpenModal(data)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-blue-900 dark:hover:text-blue-300 hover:border-blue-400 dark:hover:border-blue-500 transition-all text-[12px] font-medium"
                      >
                        <EditIcon />
                        <span>{data.status === 'Belum Dinilai' ? 'Input Nilai' : 'Edit'}</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL INPUT / EDIT NILAI */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl w-full max-w-md p-6 space-y-6 shadow-2xl">
            <div className="flex justify-between items-start border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Input Nilai Evaluasi</h3>
                <p className="text-[12px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {selectedStudent.name} ({selectedStudent.school})
                </p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveScore} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[12px] text-zinc-700 dark:text-zinc-300 font-medium">Kedisiplinan</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={formScore.kedisiplinan}
                    onChange={(e) =>
                      setFormScore({ ...formScore, kedisiplinan: Number(e.target.value) })
                    }
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] text-zinc-700 dark:text-zinc-300 font-medium">Sikap / Etika</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={formScore.sikap}
                    onChange={(e) =>
                      setFormScore({ ...formScore, sikap: Number(e.target.value) })
                    }
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] text-zinc-700 dark:text-zinc-300 font-medium">Kemampuan Teknis</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={formScore.teknis}
                    onChange={(e) =>
                      setFormScore({ ...formScore, teknis: Number(e.target.value) })
                    }
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[12px] text-zinc-700 dark:text-zinc-300 font-medium">Kualitas Laporan</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    required
                    value={formScore.laporan}
                    onChange={(e) =>
                      setFormScore({ ...formScore, laporan: Number(e.target.value) })
                    }
                    className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-xl px-3 py-2 text-[13px] text-zinc-900 dark:text-zinc-100 font-mono focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedStudent(null)}
                  className="px-4 py-2 rounded-xl text-[12px] font-medium text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-300 dark:border-zinc-700 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-[12px] font-medium bg-blue-900 text-white hover:bg-blue-800 border border-blue-800 transition-all font-semibold"
                >
                  Simpan Nilai
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
