'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 mb-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Kembali ke Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Form Laporan Harian</h1>
        <p className="text-xs text-slate-500 mt-1">
          Isi jurnal aktivitas dan dokumentasi kegiatan PKL kamu hari ini.
        </p>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-5">
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

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Aktivitas & Logbook <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="- Tuliskan poin aktivitas kamu hari ini..."
            value={formData.logbook}
            onChange={(e) => handleChange('logbook', e.target.value)}
            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800 font-mono leading-relaxed"
          />
        </div>

        <FormInput
          label="Kendala / Catatan Tambahan (Opsional)"
          placeholder="Contoh: Kendala jaringan internet sempat lambat di pagi hari"
          value={formData.notes}
          onChange={(val) => handleChange('notes', val)}
        />

        {/* Upload File Image */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Dokumentasi Kegiatan <span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-slate-100/50 transition-all relative cursor-pointer group">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />

            {formData.imagePreview ? (
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={formData.imagePreview}
                  alt="Preview Dokumentasi"
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChange('imagePreview', null);
                  }}
                  className="absolute top-2 right-2 bg-slate-900/80 hover:bg-red-600 text-white p-1.5 rounded-lg text-xs transition-all z-20"
                >
                  Ganti Foto
                </button>
              </div>
            ) : (
              <div className="text-center space-y-2">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-700">Klik untuk upload foto kegiatan</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">PNG, JPG, atau WEBP (Maks. 5MB)</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
          <Link
            href="/dashboard"
            className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
          >
            Batal
          </Link>
          <button
            type="submit"
            className="px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-sm"
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
    <div>
      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800"
      />
    </div>
  );
}