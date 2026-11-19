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
  status: 'Disetujui' | 'Menunggu Tinjauan' | 'Perlu Revisi';
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
    status: 'Menunggu Tinjauan',
  },
];

const ACTIVITIES: ActivityItemProps[] = [
  {
    time: '10:00 WIB',
    title: 'Laporan 28 Agu Disetujui',
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
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8">
      {/* 1. HEADER & BREADCRUMB */}
      <HeaderSection />

      {/* 2. STATS CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          label="Total Kehadiran"
          value="14 Hari"
          badgeText="95% Valid"
          badgeStyle="bg-emerald-50 text-emerald-700 border border-emerald-200"
        />
        <StatCard
          label="Laporan Harian"
          value="42 / 45"
          badgeText="Disetujui"
          badgeStyle="bg-sky-50 text-sky-700 border border-sky-200"
        />
        <StatCard
          label="Progres Proyek"
          value="78%"
          badgeText="Sesuai Target"
          badgeStyle="bg-blue-50 text-blue-700 border border-blue-200"
        />
        <StatCard
          label="Nilai Evaluasi"
          value="88 / 100"
          badgeText="Nilai A"
          badgeStyle="bg-emerald-50 text-emerald-700 border border-emerald-200"
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
    <div className="space-y-1.5 border-b border-zinc-200 pb-6">
      <div className="text-[13px] text-zinc-500">
        Dashboard <span className="mx-1.5 text-zinc-400">/</span> Ringkasan
      </div>
      <h1 className="text-2xl font-bold text-blue-950 tracking-tight">
        Selamat datang kembali, Adriel Nararya!
      </h1>
      <p className="text-[13px] text-zinc-600">
        Status PKL: <span className="text-zinc-900 font-medium">PT A Indonesia — Divisi Layanan Digital</span>
      </p>
    </div>
  );
}

/** Component Reusable Kartu Statistik */
function StatCard({ label, value, badgeText, badgeStyle }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex flex-col justify-between min-h-[110px]">
      <span className="text-[13px] text-zinc-600">{label}</span>
      <div className="flex items-end justify-between mt-2">
        <span className="text-2xl font-bold text-blue-950">{value}</span>
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
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
          Presensi Hari Ini
        </h2>
        <span className="flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Hadir
        </span>
      </div>

      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-[11px] text-zinc-500 font-medium">Jam Masuk</p>
          <p className="text-sm font-bold text-blue-950 mt-0.5">07:45 WIB</p>
        </div>
        <div>
          <p className="text-[11px] text-zinc-500 font-medium">Lokasi GPS</p>
          <p className="text-[13px] font-medium text-zinc-800 mt-0.5">Area Kantor (Valid)</p>
        </div>
      </div>
    </div>
  );
}

/** Card Laporan Harian Terbaru */
function RecentReportsCard({ reports }: { reports: ReportItemProps[] }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider">
          Laporan Harian Terbaru
        </h2>
        <Link
          href="/dashboard/attendance"
          className="text-[13px] font-medium text-blue-700 hover:text-blue-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 rounded"
        >
          Lihat Semua
        </Link>
      </div>

      <div className="space-y-3">
        {reports.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/daily-report/${item.id}`}
            className="bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-sm rounded-xl p-4 flex items-center justify-between transition-colors block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
          >
            <div>
              <h3 className="text-sm font-bold text-zinc-900 mb-0.5">{item.title}</h3>
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
      <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-emerald-700 border border-emerald-200 bg-emerald-50">
        Disetujui
      </span>
    );
  }
  if (status === 'Perlu Revisi') {
    return (
      <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-rose-700 border border-rose-200 bg-rose-50">
        Perlu Revisi
      </span>
    );
  }
  return (
    <span className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-amber-700 border border-amber-200 bg-amber-50">
      Menunggu Tinjauan
    </span>
  );
}

/** Card Info Mentor Pembimbing */
function MentorCard() {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
      <h2 className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider mb-5">
        Mentor Pembimbing
      </h2>

      <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-900 border border-blue-800 rounded-full flex items-center justify-center font-bold text-white text-xs">
            BP
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900">Budi Pratama, S.Kom</h3>
            <p className="text-[11px] text-zinc-600">Pembimbing Lapangan</p>
          </div>
        </div>

        <Link
          href="/dashboard/chat"
          className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-blue-900 text-white border border-blue-800 hover:bg-blue-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
        >
          Pesan Mentor
        </Link>
      </div>
    </div>
  );
}

/** Card Timeline Aktivitas */
function TimelineCard({ activities }: { activities: ActivityItemProps[] }) {
  return (
    <div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-6">
      <h2 className="text-[12px] font-bold text-zinc-500 uppercase tracking-wider mb-5">
        Linimasa Aktivitas
      </h2>

      <div className="relative pl-5 border-l border-zinc-200 space-y-4 text-[13px]">
        {activities.map((act, index) => (
          <div key={index} className="relative">
            <span
              className={`w-2.5 h-2.5 ${act.dotColor} rounded-full absolute -left-[25.5px] top-1 ring-4 ring-white`}
            />
            <p className="font-semibold text-zinc-700">
              {act.time} — <span className="text-zinc-900">{act.title}</span>
            </p>
            <p className="text-zinc-600 text-[11px] mt-0.5">{act.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
