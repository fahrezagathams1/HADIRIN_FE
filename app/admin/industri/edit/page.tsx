'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

// ==========================================
// TYPES
// ==========================================
interface PartnerFormData {
  id: string;
  name: string;
  sector: string;
  city: string;
  address: string;
  mentorName: string;
  mentorContact: string;
  quota: number;
  status: 'Aktif' | 'Penuh' | 'Non-Aktif';
}

// ==========================================
// INLINE SVG ICONS
// ==========================================
const BuildingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UserCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);

const CheckStatusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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

const SaveIcon = () => (
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
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

// ==========================================
// FORM EDIT COMPONENT
// ==========================================
function EditForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const [formData, setFormData] = useState<PartnerFormData>({
    id: id || 'IND-001',
    name: 'PT Tech Innovation Indonesia',
    sector: 'Software House & Mobile App',
    city: 'Bandung',
    address: 'Jl. Soekarno Hatta No. 456',
    mentorName: 'Budi Santoso (Lead Dev)',
    mentorContact: 'budi@techinnov.id / 0812-3456-7890',
    quota: 8,
    status: 'Aktif',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // HANDLE CHANGE
  // ==========================================
  const handleChange = (
    field: keyof PartnerFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ==========================================
  // HANDLE SUBMIT
  // ==========================================
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi submit data
    console.log('Update Mitra:', formData);

    setTimeout(() => {
      alert('Data mitra industri berhasil diperbarui!');
      router.push('/admin/industri');
    }, 500);
  };

  return (
    <div className="max-w-5xl mx-auto px-8 lg:px-10 pt-0 pb-16 space-y-8">
      {/* ==========================================
          HEADER
      ========================================== */}
      <div className="border-b border-zinc-800/60 pb-6">
        <div className="text-[13px] text-zinc-500">
          Admin
          <span className="mx-1.5 text-zinc-700">/</span>
          Mitra Industri
          <span className="mx-1.5 text-zinc-700">/</span>
          <span className="text-zinc-300">Edit Mitra</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Edit Mitra Industri
        </h1>

        <p className="text-[13px] text-zinc-400 mt-1">
          Perbarui data perusahaan mitra dan informasi kuota Praktek Kerja Lapangan (PKL).
        </p>
      </div>

      {/* ==========================================
          FORM
      ========================================== */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#121215] border border-zinc-800/80 rounded-xl overflow-hidden"
      >
        {/* ==========================================
            FORM HEADER
        ========================================== */}
        <div className="px-6 py-4 border-b border-zinc-800/80 flex items-center justify-between">
          <div>
            <h2 className="text-[14px] font-bold text-white">
              Informasi Mitra Industri
            </h2>
            <p className="text-[11px] text-zinc-500 mt-1">
              Ubah rincian profil perusahaan, pembimbing, dan status kerjasama.
            </p>
          </div>
          <span className="text-[11px] font-mono text-zinc-500 bg-[#18181B] border border-zinc-800 px-2.5 py-1 rounded-md">
            ID: {formData.id}
          </span>
        </div>

        {/* ==========================================
            FORM CONTENT
        ========================================== */}
        <div className="p-6 space-y-7">
          {/* ==========================================
              PROFIL PERUSAHAAN
          ========================================== */}
          <FormSection
            icon={<BuildingIcon />}
            title="Profil Perusahaan"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Nama Perusahaan"
                required
                placeholder="Contoh: PT Tech Innovation Indonesia"
                value={formData.name}
                onChange={(value) => handleChange('name', value)}
              />

              <FormInput
                label="Bidang / Sektor Industri"
                required
                placeholder="Contoh: Software House & Mobile App"
                value={formData.sector}
                onChange={(value) => handleChange('sector', value)}
              />
            </div>
          </FormSection>

          {/* ==========================================
              LOKASI & ALAMAT
          ========================================== */}
          <FormSection
            icon={<MapPinIcon />}
            title="Lokasi & Alamat"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Kota / Kabupaten"
                required
                placeholder="Contoh: Bandung"
                value={formData.city}
                onChange={(value) => handleChange('city', value)}
              />

              <FormInput
                label="Alamat Lengkap"
                required
                placeholder="Contoh: Jl. Soekarno Hatta No. 456"
                value={formData.address}
                onChange={(value) => handleChange('address', value)}
              />
            </div>
          </FormSection>

          {/* ==========================================
              PEMBIMBING LAPANGAN
          ========================================== */}
          <FormSection
            icon={<UserCheckIcon />}
            title="Pembimbing Lapangan"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Nama Pembimbing"
                required
                placeholder="Contoh: Budi Santoso (Lead Dev)"
                value={formData.mentorName}
                onChange={(value) => handleChange('mentorName', value)}
              />

              <FormInput
                label="Kontak / Email Pembimbing"
                required
                placeholder="Contoh: budi@techinnov.id / 0812-3456-7890"
                value={formData.mentorContact}
                onChange={(value) => handleChange('mentorContact', value)}
              />
            </div>
          </FormSection>

          {/* ==========================================
              KAPASITAS & STATUS
          ========================================== */}
          <FormSection
            icon={<CheckStatusIcon />}
            title="Kapasitas & Status"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* KUOTA PKL */}
              <div className="space-y-2">
                <label className="block text-[12px] text-zinc-400 font-medium">
                  Kuota PKL (Jumlah Siswa)
                  <span className="text-rose-500"> *</span>
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  placeholder="Contoh: 8"
                  value={formData.quota}
                  onChange={(e) => handleChange('quota', Number(e.target.value))}
                  className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* STATUS KERJASAMA */}
              <div className="space-y-2">
                <label className="block text-[12px] text-zinc-400 font-medium">
                  Status Kerjasama
                  <span className="text-rose-500"> *</span>
                </label>
                <select
                  required
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full bg-[#18181B] border border-zinc-800 rounded-xl px-4 py-3 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all cursor-pointer"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Penuh">Penuh</option>
                  <option value="Non-Aktif">Non-Aktif</option>
                </select>
              </div>
            </div>
          </FormSection>
        </div>

        {/* ==========================================
            FOOTER ACTION
        ========================================== */}
        <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
          {/* KEMBALI */}
          <Link
            href="/admin/industri"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white transition-all text-[12px] font-medium"
          >
            <ArrowLeftIcon />
            <span>Kembali</span>
          </Link>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-[12px] font-semibold"
          >
            <SaveIcon />
            <span>
              {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// FORM SECTION (Identik dengan create-siswa)
// ==========================================
interface FormSectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function FormSection({ icon, title, children }: FormSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-zinc-300">
        <div className="text-zinc-500">{icon}</div>
        <span className="text-[12px] font-semibold uppercase tracking-wider">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

// ==========================================
// FORM INPUT (Identik dengan create-siswa)
// ==========================================
interface FormInputProps {
  label: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
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
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </label>
      <input
        type="text"
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors"
      />
    </div>
  );
}

// ==========================================
// MAIN EXPORT WITH SUSPENSE
// ==========================================
export default function EditMitraPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-[13px] text-zinc-500 animate-pulse">
          Memuat halaman edit...
        </div>
      }
    >
      <EditForm />
    </Suspense>
  );
}