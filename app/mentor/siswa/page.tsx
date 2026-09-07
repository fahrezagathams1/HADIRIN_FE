'use client';

import React, { useState } from 'react';

// --- INLINE SVG ICONS ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
);
const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
);

// --- MOCK DATA ---
const mockStudents = [
  {
    id: 1,
    name: 'Adriel Nararya',
    school: 'SMKN 1 Bandung',
    role: 'Frontend Developer',
    period: 'Jul 2026 - Okt 2026',
    status: 'Aktif',
    progress: 78,
  },
  {
    id: 2,
    name: 'Dina Mariana',
    school: 'SMKN 4 Bandung',
    role: 'Backend Developer',
    period: 'Jul 2026 - Okt 2026',
    status: 'Aktif',
    progress: 65,
  },
  {
    id: 3,
    name: 'Siti Rahma',
    school: 'SMKN 2 Bandung',
    role: 'UI/UX Designer',
    period: 'Jul 2026 - Okt 2026',
    status: 'Aktif',
    progress: 82,
  },
  {
    id: 4,
    name: 'Budi Kurnia',
    school: 'SMKN 1 Cimahi',
    role: 'Mobile Developer',
    period: 'Jan 2026 - Mar 2026',
    status: 'Selesai',
    progress: 100,
  },
];

export default function SiswaBimbinganPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('Semua');

  // Filter logic
  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.school.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'Semua' || student.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      
      {/* HEADER */}
      <div className="space-y-1.5 border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Pembimbing <span className="mx-1.5 text-zinc-700">/</span> Siswa Bimbingan
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          Daftar Siswa Bimbingan
        </h1>
        <p className="text-[13px] text-zinc-400">
          Kelola, pantau progres, dan evaluasi siswa PKL yang berada di bawah bimbinganmu.
        </p>
      </div>

      {/* FILTER & SEARCH ACTIONS */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Cari nama atau sekolah..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#121215] border border-zinc-800/80 rounded-xl pl-10 pr-4 py-2.5 text-[13px] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex items-center gap-2 bg-[#121215] border border-zinc-800/80 rounded-xl px-4 py-2.5 text-[13px] text-zinc-300 hover:bg-zinc-900/50 transition-colors">
            <FilterIcon />
            Filter
          </button>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="appearance-none bg-[#121215] border border-zinc-800/80 rounded-xl px-4 py-2.5 pr-8 text-[13px] text-zinc-300 hover:bg-zinc-900/50 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer"
          >
            <option value="Semua">Semua Status</option>
            <option value="Aktif">Aktif PKL</option>
            <option value="Selesai">Selesai</option>
          </select>
        </div>
      </div>

      {/* DATA TABLE */}
      <div className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[13px]">
            <thead className="bg-[#18181B] border-b border-zinc-800/80 text-zinc-400 font-medium">
              <tr>
                <th className="px-6 py-4 font-medium">Siswa</th>
                <th className="px-6 py-4 font-medium">Posisi / Role</th>
                <th className="px-6 py-4 font-medium">Periode PKL</th>
                <th className="px-6 py-4 font-medium">Progres</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-zinc-900/40 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#18181B] border border-zinc-800 flex items-center justify-center font-bold text-zinc-300">
                          {student.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-zinc-100">{student.name}</div>
                          <div className="text-[11px] text-zinc-500">{student.school}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-zinc-300 font-medium">
                      {student.role}
                    </td>
                    <td className="px-6 py-4 text-zinc-400 text-[12px]">
                      {student.period}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${student.progress === 100 ? 'bg-cyan-500' : 'bg-emerald-500'}`}
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-[11px] font-medium text-zinc-400 w-8">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-medium ${
                        student.status === 'Aktif' 
                          ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50' 
                          : 'bg-[#18181B] text-zinc-400 border border-zinc-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 rounded-lg transition-colors">
                        <MoreIcon />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-zinc-500">
                    Siswa tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* PAGINATION FOOTER */}
        <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between text-[12px] text-zinc-400">
          <span>Menampilkan 1 hingga {filteredStudents.length} dari {mockStudents.length} data</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-lg border border-zinc-800/80 hover:bg-zinc-800/50 transition-colors disabled:opacity-50">Prev</button>
            <button className="px-3 py-1.5 rounded-lg border border-zinc-800/80 bg-zinc-800 text-zinc-200">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-zinc-800/80 hover:bg-zinc-800/50 transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}