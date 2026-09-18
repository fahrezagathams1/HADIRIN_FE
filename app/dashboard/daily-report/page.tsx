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

  const handleChange = (field: keyof ReportFormData, value: string | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handler Upload Foto dari Perangkat
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
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 hover:text-zinc-300 mb-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-white tracking-tight">Form Laporan Harian</h1>
        <p className="text-[13px] text-zinc-400 mt-1">
          Isi jurnal aktivitas dan dokumentasi kegiatan PKL kamu hari ini.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-5">
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

        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Aktivitas & Logbook <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="- Tuliskan poin aktivitas kamu hari ini..."
            value={formData.logbook}
            onChange={(e) => handleChange('logbook', e.target.value)}
            className="w-full px-4 py-2.5 text-xs bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 font-mono leading-relaxed transition-colors"
          />
        </div>

        <FormInput
          label="Kendala / Catatan Tambahan (Opsional)"
          placeholder="Contoh: Kendala jaringan internet sempat lambat di pagi hari"
          value={formData.notes}
          onChange={(val) => handleChange('notes', val)}
        />

        {/* Input Upload Foto */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
            Dokumentasi Kegiatan <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl p-6 bg-[#18181B] hover:bg-zinc-900/50 hover:border-zinc-700 transition-all cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />

            {formData.imagePreview ? (
              <div className="relative w-full h-52 rounded-xl overflow-hidden border border-zinc-800">
                <Image
                  src={formData.imagePreview}
                  alt="Preview Dokumentasi"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="text-center space-y-2">
                <div className="w-10 h-10 bg-zinc-800/80 text-zinc-300 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-zinc-200">Klik atau drag foto ke sini</p>
                <p className="text-[10px] text-zinc-500">PNG, JPG, atau WEBP (Maks. 5MB)</p>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-zinc-800/80 flex justify-end gap-3">
          <Link
            href="/dashboard"
            className="px-4 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-all rounded-xl"
          >
            Batal
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl transition-all shadow-sm"
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

function FormInput({ label, required = false, placeholder, value, onChange }: FormInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 text-xs bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors"
      />
    </div>
  );
}