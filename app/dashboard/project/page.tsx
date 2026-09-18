'use client';

import React, { useState } from 'react';
import Link from 'next/link';

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
    <div className="p-8 max-w-6xl mx-auto space-y-6 pb-16">
      {/* Header & Breadcrumbs */}
      <div>
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium mb-3">
          <Link href="/dashboard" className="hover:text-zinc-300 transition-colors">
            Dashboard
          </Link>
          <span>/</span>
          <span className="text-zinc-300 font-semibold">Daftar Project</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">Daftar Project & Tugas</h1>
        <p className="text-[13px] text-zinc-400 mt-1">
          Pantau progres tugas PKL yang diberikan oleh mentor kamu di sini.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#121215] rounded-2xl border border-zinc-800/80 shadow-sm p-6 flex flex-col h-full hover:border-zinc-700/80 transition-all"
          >
            {/* Card Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-[11px] font-mono font-bold text-zinc-500 tracking-wider">
                {project.id}
              </span>
              <StatusBadge status={project.status} />
            </div>

            {/* Card Body */}
            <div className="flex-1">
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>

            {/* Card Footer: Progress & Details */}
            <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-4">
              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-[11px] font-mono font-semibold mb-1.5">
                  <span className="text-zinc-400">Progres</span>
                  <span className="text-zinc-200">{project.progress}%</span>
                </div>
                <div className="w-full bg-[#18181B] h-2 rounded-full overflow-hidden border border-zinc-800/80">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      project.progress === 100 ? 'bg-emerald-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Mentor & Deadline */}
              <div className="flex justify-between items-center text-[11px] text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="truncate max-w-[120px]">{project.mentor}</span>
                </div>
                <div className="flex items-center gap-1.5 text-rose-400">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 00-2 2z" />
                  </svg>
                  <span>{project.deadline}</span>
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
        <span className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 text-[11px] font-semibold px-2.5 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Selesai
        </span>
      );
    case 'IN_PROGRESS':
      return (
        <span className="bg-blue-950/40 text-blue-400 border border-blue-900/50 text-[11px] font-semibold px-2.5 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          Dikerjakan
        </span>
      );
    case 'TO_DO':
      return (
        <span className="bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 text-[11px] font-semibold px-2.5 py-1 rounded-xl flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
          Belum Mulai
        </span>
      );
  }
}