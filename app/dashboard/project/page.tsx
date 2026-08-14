'use client';

import React, { useState } from 'react';

// ==========================================
// TYPES
// ==========================================
interface ProjectItem {
  id: string;
  title: string;
  description: string;
  status: 'TO_DO' | 'IN_PROGRESS' | 'COMPLETED';
  progress: number;
  deadline: string;
  mentor: string;
}

const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'PRJ-001',
    title: 'Slicing UI Dashboard Admin',
    description: 'Mengubah desain Figma menjadi kode Next.js & Tailwind CSS untuk halaman utama Admin.',
    status: 'IN_PROGRESS',
    progress: 65,
    deadline: '20 Aug 2026',
    mentor: 'Pak Budi (Frontend Lead)',
  },
  {
    id: 'PRJ-002',
    title: 'Integrasi API Auth',
    description: 'Menyambungkan form login dengan endpoint backend serta mengatur JWT token.',
    status: 'TO_DO',
    progress: 0,
    deadline: '25 Aug 2026',
    mentor: 'Pak Budi (Frontend Lead)',
  },
  {
    id: 'PRJ-003',
    title: 'Setup Repository & Environment',
    description: 'Inisialisasi project Next.js dan konfigurasi Git/GitHub untuk tim.',
    status: 'COMPLETED',
    progress: 100,
    deadline: '05 Aug 2026',
    mentor: 'Bu Citra (HR Manager)',
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function ProjectPage() {
  const [projects] = useState<ProjectItem[]>(INITIAL_PROJECTS);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Daftar Project & Tugas</h1>
        <p className="text-xs text-slate-500 mt-1">
          Pantau progres tugas PKL yang diberikan oleh mentor kamu di sini.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-5 flex flex-col h-full hover:shadow-md transition-shadow"
          >
            {/* Card Header */}
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-bold text-slate-400 tracking-wider">
                {project.id}
              </span>
              <StatusBadge status={project.status} />
            </div>

            {/* Card Body */}
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-800 mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Card Footer: Progress & Details */}
            <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-[10px] font-semibold mb-1.5">
                  <span className="text-slate-500">Progres</span>
                  <span className="text-slate-700">{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      project.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Mentor & Deadline */}
              <div className="flex justify-between items-center text-[10px] text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {project.mentor}
                </div>
                <div className="flex items-center gap-1.5 text-rose-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {project.deadline}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENT: STATUS BADGE
// ==========================================
function StatusBadge({ status }: { status: ProjectItem['status'] }) {
  switch (status) {
    case 'COMPLETED':
      return (
        <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 text-[9px] uppercase font-bold px-2 py-0.5 rounded-md">
          Selesai
        </span>
      );
    case 'IN_PROGRESS':
      return (
        <span className="bg-blue-50 text-blue-700 border border-blue-200/60 text-[9px] uppercase font-bold px-2 py-0.5 rounded-md">
          Dikerjakan
        </span>
      );
    case 'TO_DO':
      return (
        <span className="bg-slate-100 text-slate-600 border border-slate-200/60 text-[9px] uppercase font-bold px-2 py-0.5 rounded-md">
          Belum Mulai
        </span>
      );
  }
}