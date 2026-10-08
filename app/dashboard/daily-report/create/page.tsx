
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// ==========================================
// TYPES
// ==========================================
interface ReportFormData {
  title: string;
  projectName: string;
  logbook: string;
  notes: string;
  imagePreview: string | null;
}

// ==========================================
// INLINE SVG ICON
// ==========================================
const UploadImageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

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
export default function CreateDailyReportPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<ReportFormData>({
    title: '',
    projectName: '',
    logbook: '',
    notes: '',
    imagePreview: null,
  });

  const handleChange = (
    field: keyof ReportFormData,
    value: string | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      handleChange('imagePreview', imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.imagePreview) {
      alert('Mohon unggah foto dokumentasi kegiatan!');
      return;
    }

    alert('Laporan Harian Berhasil Dikirim!');
    router.push('/dashboard/attendance');
  };

  return (
    <div className="max-w-6xl mx-auto p-8 lg:p-10 space-y-8 pb-16">

      {/* HEADER */}
      <div className="flex flex-col gap-1.5 border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Siswa <span className="mx-1.5 text-zinc-700">/</span> Laporan Harian
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">
          Form Laporan Harian
        </h1>

        <p className="text-[13px] text-zinc-400">
          Isi jurnal aktivitas dan dokumentasi kegiatan PKL kamu hari ini.
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
            Detail Laporan
          </h2>
          <p className="text-[11px] text-zinc-500 mt-1">
            Lengkapi informasi kegiatan PKL yang kamu lakukan hari ini.
          </p>
        </div>

        {/* FORM CONTENT */}
        <div className="p-6 space-y-6">

          <FormInput
            label="Judul Kegiatan"
            required
            placeholder="Contoh: Slicing UI Dashboard Admin dan Modul Siswa"
            value={formData.title}
            onChange={(val) => handleChange('title', val)}
          />

          <FormInput
            label="Nama Project"
            required
            placeholder="Contoh: Sistem Presensi Hadirin v1.0"
            value={formData.projectName}
            onChange={(val) => handleChange('projectName', val)}
          />

          {/* AKTIVITAS & LOGBOOK */}
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Aktivitas & Logbook{' '}
              <span className="text-rose-500">*</span>
            </label>

            <textarea
              required
              rows={6}
              placeholder="- Tuliskan poin aktivitas kamu hari ini..."
              value={formData.logbook}
              onChange={(e) => handleChange('logbook', e.target.value)}
              className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-mono leading-relaxed transition-colors resize-none"
            />
          </div>

          {/* CATATAN */}
          <FormInput
            label="Kendala / Catatan Tambahan (Opsional)"
            placeholder="Contoh: Kendala jaringan internet sempat lambat di pagi hari"
            value={formData.notes}
            onChange={(val) => handleChange('notes', val)}
          />

          {/* UPLOAD DOKUMENTASI */}
          <div className="space-y-2">
            <label className="block text-[12px] text-zinc-400 font-medium">
              Dokumentasi Kegiatan{' '}
              <span className="text-rose-500">*</span>
            </label>

            <div className="relative group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              <div className="flex flex-col items-center justify-center border border-dashed border-zinc-800 rounded-xl p-8 bg-[#18181B] group-hover:bg-zinc-900/50 group-hover:border-zinc-700 transition-all">

                {formData.imagePreview ? (
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-zinc-800 bg-black/50">
                    <Image
                      src={formData.imagePreview}
                      alt="Preview Dokumentasi"
                      fill
                      className="object-cover"
                    />

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange('imagePreview', null);
                      }}
                      className="absolute top-3 right-3 bg-[#121215]/90 hover:bg-rose-950 text-zinc-300 hover:text-rose-200 border border-zinc-800 hover:border-rose-900 px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all z-20"
                    >
                      Ganti Foto
                    </button>
                  </div>
                ) : (
                  <div className="text-center space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-400">
                      <UploadImageIcon />
                    </div>

                    <div>
                      <p className="text-[13px] font-medium text-zinc-200">
                        Klik untuk upload foto kegiatan
                      </p>

                      <p className="text-[11px] text-zinc-500 mt-1 font-mono">
                        PNG, JPG, atau WEBP (Maks. 5MB)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION */}
        <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all text-[12px] font-medium"
          >
            <ArrowLeftIcon />
            <span>Kembali</span>
          </Link>

          <button
            type="submit"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-all text-[12px] font-semibold"
          >
            Kirim Laporan Harian
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
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

function FormInput({
  label,
  required = false,
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-[12px] text-zinc-400 font-medium">
        {label}{' '}
        {required && <span className="text-rose-500">*</span>}
      </label>

      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors font-sans"
      />
    </div>
  );
}



