'use client';

import React from 'react';
import Link from 'next/link';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface StatCardProps {
  label: string;
  value: string;
  badgeText: string;
  badgeStyle: string;
}

interface ReportItemProps {
  id: string;
  title: string;
  date: string;
  status: 'Disetujui' | 'Menunggu Review' | 'Perlu Revisi';
}

interface ActivityItemProps {
  time: string;
  title: string;
  description: string;
  dotColor: string;
}

// ==========================================
// DUMMY DATA
// ==========================================
const RECENT_REPORTS: ReportItemProps[] = [
  {
    id: 'rep-1',
    title: 'Slicing UI Next.js & Tailwind',
    date: '24 Jul 2026',
    status: 'Disetujui',
  },
  {
    id: 'rep-2',
    title: 'Integrasi API Auth JWT',
    date: '23 Jul 2026',
    status: 'Menunggu Review',
  },
];

const ACTIVITIES: ActivityItemProps[] = [
  {
    time: '10:00 WIB',
    title: 'Laporan 24 Jul Disetujui',
    description: 'Mentor menyetujui jurnal laporan harian kamu.',
    dotColor: 'bg-sky-500',
  },
  {
    time: '07:45 WIB',
    title: 'Presensi Masuk Berhasil',
    description: 'Absensi harian tercatat di area kantor.',
    dotColor: 'bg-emerald-500',
  },
];

// ==========================================
// MAIN DASHBOARD COMPONENT
// ==========================================
export default function DashboardPage() {
  return (
    <div className="space-y-6 text-zinc-100 pb-12">
      {/* 1. HEADER & BREADCRUMB */}
      <HeaderSection />

      {/* 2. STATS CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Kehadiran"
          value="14 Hari"
          badgeText="95% Valid"
          badgeStyle="text-emerald-400 bg-[#09090B] border border-emerald-800/60"
        />
        <StatCard
          label="Laporan Harian"
          value="42 / 45"
          badgeText="Disetujui"
          badgeStyle="text-sky-400 bg-[#09090B] border border-sky-800/60"
        />
        <StatCard
          label="Progress Project"
          value="78%"
          badgeText="On Track"
          badgeStyle="text-zinc-400 bg-[#09090B] border border-zinc-800"
        />
        <StatCard
          label="Nilai Evaluasi"
          value="88 / 100"
          badgeText="Grade A"
          badgeStyle="text-emerald-400 bg-[#09090B] border border-emerald-800/60 font-bold"
        />
      </div>

      {/* 3. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <TodayAttendanceCard />
          <RecentReportsCard reports={RECENT_REPORTS} />
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <MentorCard />
          <TimelineCard activities={ACTIVITIES} />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================

/** Header & Welcome Banner */
function HeaderSection() {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1 font-mono">
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-zinc-300 font-medium">Overview</span>
      </div>
      <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
        Welcome back, Adriel Nararya! 👋
      </h1>
      <p className="text-xs text-zinc-400 mt-1">
        Status PKL: <span className="font-semibold text-zinc-200">PT A Indonesia</span> — Divisi Digital Service
      </p>
    </div>
  );
}

/** Component Reusable Kartu Statistik */
function StatCard({ label, value, badgeText, badgeStyle }: StatCardProps) {
  return (
    <div className="bg-[#18181B] p-4 rounded-lg border border-zinc-800 space-y-2">
      <p className="text-xs font-medium text-zinc-400">{label}</p>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-black text-zinc-100">{value}</h3>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${badgeStyle}`}>
          {badgeText}
        </span>
      </div>
    </div>
  );
}

/** Card Presensi Hari Ini */
function TodayAttendanceCard() {
  return (
    <div className="bg-[#18181B] p-5 rounded-lg border border-zinc-800 space-y-3">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Presensi Hari Ini
        </h3>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#09090B] text-emerald-400 text-[11px] font-bold rounded border border-emerald-800/60">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Hadir
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="text-zinc-500 font-medium">Jam Masuk</p>
          <p className="text-zinc-100 font-bold text-sm mt-0.5">07:45 WIB</p>
        </div>
        <div>
          <p className="text-zinc-500 font-medium">Lokasi GPS</p>
          <p className="text-zinc-200 font-semibold mt-0.5">Office Area (Valid)</p>
        </div>
      </div>
    </div>
  );
}

/** Card Laporan Harian Terbaru */
function RecentReportsCard({ reports }: { reports: ReportItemProps[] }) {
  return (
    <div className="bg-[#18181B] p-5 rounded-lg border border-zinc-800 space-y-4">
      <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Laporan Harian Terbaru
        </h3>
        <Link
          href="/dashboard/attendance"
          className="text-xs font-medium text-sky-400 hover:text-sky-300 hover:underline"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-2.5">
        {reports.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/daily-report/${item.id}`}
            className="flex items-center justify-between p-3 bg-[#09090B] hover:bg-zinc-800/60 rounded-md border border-zinc-800/80 text-xs transition-none block"
          >
            <div>
              <p className="font-semibold text-zinc-200">{item.title}</p>
              <p className="text-zinc-500 text-[11px] font-mono mt-0.5">{item.date}</p>
            </div>
            <StatusBadge status={item.status} />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Badge Status Laporan */
function StatusBadge({ status }: { status: ReportItemProps['status'] }) {
  if (status === 'Disetujui') {
    return (
      <span className="px-2.5 py-0.5 bg-[#09090B] text-emerald-400 border border-emerald-800/60 font-bold text-[10px] rounded">
        Disetujui
      </span>
    );
  }
  return (
    <span className="px-2.5 py-0.5 bg-[#09090B] text-amber-400 border border-amber-800/60 font-bold text-[10px] rounded">
      Menunggu Review
    </span>
  );
}

/** Card Info Mentor Pembimbing */
function MentorCard() {
  return (
    <div className="bg-[#18181B] p-5 rounded-lg border border-zinc-800 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-3">
        Mentor Pembimbing
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#09090B] border border-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-300 text-xs">
            BP
          </div>
          <div>
            <h4 className="text-xs font-bold text-zinc-100">Budi Pratama, S.Kom</h4>
            <p className="text-[11px] text-zinc-400">Senior UI/UX Designer</p>
          </div>
        </div>

        <Link
          href="/dashboard/daily-report/rep-1"
          className="px-3 py-1.5 bg-[#27272A] hover:bg-zinc-700 text-zinc-200 hover:text-white text-xs font-medium rounded transition-none"
        >
          Chat Mentor
        </Link>
      </div>
    </div>
  );
}

/** Card Timeline Aktivitas */
function TimelineCard({ activities }: { activities: ActivityItemProps[] }) {
  return (
    <div className="bg-[#18181B] p-5 rounded-lg border border-zinc-800 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-3">
        Timeline Aktivitas
      </h3>

      <div className="relative pl-5 border-l border-zinc-800 space-y-4 text-xs">
        {activities.map((act, index) => (
          <div key={index} className="relative">
            <span
              className={`w-2.5 h-2.5 ${act.dotColor} rounded-full absolute -left-[25.5px] top-1 ring-4 ring-[#18181B]`}
            />
            <p className="font-semibold text-zinc-200">
              {act.time} - {act.title}
            </p>
            <p className="text-zinc-400 text-[11px] mt-0.5">{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}