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
    date: '28 Agu 2026',
    status: 'Disetujui',
  },
  {
    id: 'rep-2',
    title: 'Integrasi API Auth JWT',
    date: '28 Agu 2026',
    status: 'Menunggu Review',
  },
];

const ACTIVITIES: ActivityItemProps[] = [
  {
    time: '10:00 WIB',
    title: 'Laporan 28 Agu Disetujui',
    description: 'Mentor menyetujui jurnal laporan harian kamu.',
    dotColor: 'bg-sky-400',
  },
  {
    time: '07:45 WIB',
    title: 'Presensi Masuk Berhasil',
    description: 'Absensi harian tercatat di area kantor.',
    dotColor: 'bg-emerald-400',
  },
];

// ==========================================
// MAIN DASHBOARD COMPONENT
// ==========================================
export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      {/* 1. HEADER & BREADCRUMB */}
      <HeaderSection />

      {/* 2. STATS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Kehadiran"
          value="14 Hari"
          badgeText="95% Valid"
          badgeStyle="bg-emerald-950/50 text-emerald-400 border border-emerald-900/50"
        />
        <StatCard
          label="Laporan Harian"
          value="42 / 45"
          badgeText="Disetujui"
          badgeStyle="bg-sky-950/50 text-sky-400 border border-sky-900/50"
        />
        <StatCard
          label="Progress Project"
          value="78%"
          badgeText="On Track"
          badgeStyle="bg-[#18181B] text-zinc-300 border border-zinc-700/50"
        />
        <StatCard
          label="Nilai Evaluasi"
          value="88 / 100"
          badgeText="Grade A"
          badgeStyle="bg-emerald-950/50 text-emerald-400 border border-emerald-900/50"
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
    <div className="space-y-1.5 border-b border-zinc-800/60 pb-6">
      <div className="text-[13px] text-zinc-500">
        Dashboard <span className="mx-1.5 text-zinc-700">/</span> Overview
      </div>
      <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
        Welcome back, Adriel Nararya! <span className="text-xl">👋</span>
      </h1>
      <p className="text-[13px] text-zinc-400">
        Status PKL: <span className="text-zinc-200 font-medium">PT A Indonesia — Divisi Digital Service</span>
      </p>
    </div>
  );
}

/** Component Reusable Kartu Statistik */
function StatCard({ label, value, badgeText, badgeStyle }: StatCardProps) {
  return (
    <div className="bg-[#121215] p-5 rounded-xl border border-zinc-800/80 flex flex-col justify-between min-h-[110px]">
      <span className="text-[13px] text-zinc-400">{label}</span>
      <div className="flex items-end justify-between mt-2">
        <span className="text-2xl font-bold text-white">{value}</span>
        <span className={`px-2 py-1 rounded text-[10px] font-medium ${badgeStyle}`}>
          {badgeText}
        </span>
      </div>
    </div>
  );
}

/** Card Presensi Hari Ini */
function TodayAttendanceCard() {
  return (
    <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">
          Presensi Hari Ini
        </h2>
        <span className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-900/40">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Hadir
        </span>
      </div>

      <div className="bg-[#09090B] border border-zinc-800/80 rounded-xl p-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] text-zinc-500 font-medium">Jam Masuk</p>
          <p className="text-sm font-bold text-white mt-0.5">07:45 WIB</p>
        </div>
        <div>
          <p className="text-[11px] text-zinc-500 font-medium">Lokasi GPS</p>
          <p className="text-[13px] font-medium text-zinc-200 mt-0.5">Office Area (Valid)</p>
        </div>
      </div>
    </div>
  );
}

/** Card Laporan Harian Terbaru */
function RecentReportsCard({ reports }: { reports: ReportItemProps[] }) {
  return (
    <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider">
          Laporan Harian Terbaru
        </h2>
        <Link
          href="/dashboard/daily-report"
          className="text-[13px] font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-3">
        {reports.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/daily-report/${item.id}`}
            className="bg-[#09090B] border border-zinc-800/80 hover:border-zinc-700/80 rounded-xl p-4 flex items-center justify-between transition-colors block"
          >
            <div>
              <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
              <span className="text-[11px] text-zinc-500 block">{item.date}</span>
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
      <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-emerald-400 border border-emerald-900/60 bg-emerald-950/40">
        Disetujui
      </span>
    );
  }
  if (status === 'Perlu Revisi') {
    return (
      <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-rose-400 border border-rose-900/60 bg-rose-950/40">
        Perlu Revisi
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-amber-400 border border-amber-900/60 bg-amber-950/40">
      Menunggu Review
    </span>
  );
}

/** Card Info Mentor Pembimbing */
function MentorCard() {
  return (
    <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6">
      <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-5">
        Mentor Pembimbing
      </h2>

      <div className="bg-[#09090B] border border-zinc-800/80 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#18181B] border border-zinc-700/60 rounded-full flex items-center justify-center font-bold text-zinc-200 text-xs">
            BP
          </div>
          <div>
            <h3 className="text-sm font-bold text-white">Budi Pratama, S.Kom</h3>
            <p className="text-[11px] text-zinc-400">Pembimbing Lapangan</p>
          </div>
        </div>

        <Link
          href="/dashboard/chat"
          className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-zinc-800/80 text-zinc-200 border border-zinc-700/60 hover:bg-zinc-700 hover:text-white transition-colors"
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
    <div className="bg-[#121215] rounded-xl border border-zinc-800/80 p-6">
      <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wider mb-5">
        Timeline Aktivitas
      </h2>

      <div className="relative pl-5 border-l border-zinc-800/80 space-y-4 text-[13px]">
        {activities.map((act, index) => (
          <div key={index} className="relative">
            <span
              className={`w-2.5 h-2.5 ${act.dotColor} rounded-full absolute -left-[25.5px] top-1 ring-4 ring-[#121215]`}
            />
            <p className="font-semibold text-zinc-200">
              {act.time} — <span className="text-white">{act.title}</span>
            </p>
            <p className="text-zinc-400 text-[11px] mt-0.5">{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}