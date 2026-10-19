'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

// ==========================================
// TYPES
// ==========================================
interface WeeklyReportEditFormData {
  weekNumber: number;
  dateRange: string;
  summary: string;
  challenges: string;
  planNextWeek: string;
}

// ==========================================
// INLINE SVG ICON
// ==========================================
const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function EditWeeklyReportPage() {
  const router = useRouter();
  const params = useParams();
  const reportId = (params?.id as string) || '1';

  // State form diinisialisasi dengan data lama (Existing Data)
  const [formData, setFormData] = useState<WeeklyReportEditFormData>({
    weekNumber: 1,
    dateRange: '01 Aug - 05 Aug 2026',
    summary:
      'Onboarding, setup environment Next.js, dan slicing komponen UI awal untuk dashboard admin serta modul siswa.',
    challenges:
      'Sempat mengalami sedikit kendala pada konfigurasi Tailwind CSS dan pengaturan routing awal.',
    planNextWeek:
      'Melanjutkan pengembangan modul Daily Report dan integrasi API backend.',
  });

  const handleChange = (
    field: keyof WeeklyReportEditFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert('Laporan Mingguan Berhasil Diperbarui!');
    router.push(`/dashboard/weekly-report/${reportId}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8 pb-16">
      {/* HEADER */}
      <div className="flex flex-col gap-1.5 border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Siswa <span className="mx-1.5 text-zinc-700">/</span> Laporan Mingguan{' '}
          <span className="mx-1.5 text-zinc-700">/</span> Edit
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">
          Edit Laporan Mingguan
        </h1>

        <p className="text-[13px] text-zinc-400">
          Perbarui ringkasan aktivitas, kendala, dan rencana pengerjaan minggu ke-{formData.weekNumber}.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden"
      >
        {/* FORM HEADER */}
        <div className="px-6 py-4 border-b border-zinc-800/80">
          <h2 className="text-[14px] font-bold text-white">
            Detail Laporan Mingguan (Minggu Ke-{formData.weekNumber})
          </h2>
          <p className="text-[11px] text-zinc-500 mt-1">
            Ubah rincian jurnal mingguan kamu di bawah ini.
          </p>
        </div>

        {/* FORM CONTENT */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Minggu Ke-"
              required
              type="number"
              placeholder="Contoh: 1"
              value={formData.weekNumber.toString()}
              onChange={(val) => handleChange('weekNumber', Number(val))}
            />

            <FormInput
              label="Rentang Tanggal"
              required
              placeholder="Contoh: 01 Aug - 05 Aug 2026"
              value={formData.dateRange}
              onChange={(val) => handleChange('dateRange', val)}
            />
          </div>

          {/* RINGKASAN AKTIVITAS MINGGUAN */}
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Ringkasan Aktivitas Mingguan <span className="text-rose-500">*</span>
            </label>

            <textarea
              required
              rows={6}
              placeholder="- Tuliskan ringkasan aktivitas pencapaian kamu selama seminggu ini..."
              value={formData.summary}
              onChange={(e) => handleChange('summary', e.target.value)}
              className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-sans leading-relaxed transition-colors resize-none"
            />
          </div>

          {/* KENDALA / HAMBATAN */}
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Kendala / Hambatan (Opsional)
            </label>

            <textarea
              rows={3}
              placeholder="Contoh: Hambatan teknis atau kendala lain yang dihadapi minggu ini..."
              value={formData.challenges}
              onChange={(e) => handleChange('challenges', e.target.value)}
              className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-sans leading-relaxed transition-colors resize-none"
            />
          </div>

          {/* RENCANA MINGGU DEPAN */}
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Rencana Minggu Depan (Opsional)
            </label>

            <textarea
              rows={3}
              placeholder="Contoh: Target pengerjaan atau pengerjaan fitur minggu depan..."
              value={formData.planNextWeek}
              onChange={(e) => handleChange('planNextWeek', e.target.value)}
              className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-sans leading-relaxed transition-colors resize-none"
            />
          </div>
        </div>

        {/* ACTION */}
        <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <Link
            href={`/dashboard/weekly-report/${reportId}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all text-[12px] font-medium"
          >
            <ArrowLeftIcon />
            <span>Batal</span>
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-all text-[12px] font-semibold"
          >
            Simpan Perubahan
          </button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// SUB-COMPONENTS
// ==========================================
interface FormInputProps {
  label: string;
  required?: boolean;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

function FormInput({
  label,
  required = false,
  type = 'text',
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-[12px] text-zinc-400 font-medium">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors font-sans"
      />
    </div>
  );
}