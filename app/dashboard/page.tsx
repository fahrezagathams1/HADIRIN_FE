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
    dotColor: 'bg-blue-600',
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
    <div className="space-y-6 pb-12">
      {/* 1. HEADER & BREADCRUMB */}
      <HeaderSection />

      {/* 2. STATS CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Kehadiran"
          value="14 Hari"
          badgeText="95% Valid"
          badgeStyle="text-emerald-600 bg-emerald-50"
        />
        <StatCard
          label="Laporan Harian"
          value="42 / 45"
          badgeText="Disetujui"
          badgeStyle="text-blue-600 bg-blue-50"
        />
        <StatCard
          label="Progress Project"
          value="78%"
          badgeText="On Track"
          badgeStyle="text-slate-600 bg-slate-100"
        />
        <StatCard
          label="Nilai Evaluasi"
          value="88 / 100"
          badgeText="Grade A"
          badgeStyle="text-emerald-700 bg-emerald-100 font-bold"
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
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
        <span>Dashboard</span>
        <span>/</span>
        <span className="text-slate-700 font-medium">Overview</span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
        Welcome back, Adriel Nararya! 👋
      </h1>
      <p className="text-sm text-slate-500 mt-1">
        Status PKL: <span className="font-semibold text-slate-800">PT A Indonesia</span> — Divisi Digital Service
      </p>
    </div>
  );
}

/** Component Reusable Kartu Statistik */
function StatCard({ label, value, badgeText, badgeStyle }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-bold text-slate-900">{value}</h3>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${badgeStyle}`}>
          {badgeText}
        </span>
      </div>
    </div>
  );
}

/** Card Presensi Hari Ini */
function TodayAttendanceCard() {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Presensi Hari Ini
        </h3>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Hadir
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p className="text-slate-400 font-medium">Jam Masuk</p>
          <p className="text-slate-800 font-bold text-sm mt-0.5">07:45 WIB</p>
        </div>
        <div>
          <p className="text-slate-400 font-medium">Lokasi GPS</p>
          <p className="text-slate-800 font-semibold mt-0.5">Office Area (Valid)</p>
        </div>
      </div>
    </div>
  );
}

/** Card Laporan Harian Terbaru */
function RecentReportsCard({ reports }: { reports: ReportItemProps[] }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Laporan Harian Terbaru
        </h3>
        <Link
          href="/dashboard/attendance"
          className="text-xs font-semibold text-blue-600 hover:underline"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-2.5">
        {reports.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/daily-report/${item.id}`}
            className="flex items-center justify-between p-3 bg-slate-50/80 hover:bg-slate-100/80 rounded-lg border border-slate-100 text-xs transition-colors block"
          >
            <div>
              <p className="font-semibold text-slate-800">{item.title}</p>
              <p className="text-slate-400 text-[11px]">{item.date}</p>
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
      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 font-semibold text-[11px] rounded-md">
        Disetujui
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 bg-amber-100 text-amber-800 font-semibold text-[11px] rounded-md">
      Menunggu Review
    </span>
  );
}

/** Card Info Mentor Pembimbing */
function MentorCard() {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-3">
        Mentor Pembimbing
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-full flex items-center justify-center font-bold text-slate-700 text-sm">
            BP
          </div>
          <div>
            <h4 className="text-xs font-bold text-slate-900">Budi Pratama, S.Kom</h4>
            <p className="text-[11px] text-slate-500">Senior UI/UX Designer</p>
          </div>
        </div>

        {/* Tautan ke Detail Laporan/Diskusi Terakhir */}
        <Link
          href="/dashboard/daily-report/rep-1"
          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-all shadow-sm"
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
    <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-3">
        Timeline Aktivitas
      </h3>

      <div className="relative pl-5 border-l-2 border-slate-200 space-y-4 text-xs">
        {activities.map((act, index) => (
          <div key={index} className="relative">
            <span
              className={`w-3 h-3 ${act.dotColor} rounded-full absolute -left-[27px] top-0.5 ring-4 ring-white`}
            />
            <p className="font-semibold text-slate-800">
              {act.time} - {act.title}
            </p>
            <p className="text-slate-400 text-[11px]">{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}