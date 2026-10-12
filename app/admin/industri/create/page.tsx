'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ==========================================
// TYPES
// ==========================================
interface PartnerFormData {
  name: string;
  sector: string;
  city: string;
  quota: number;
  address: string;
  mentorName: string;
  mentorContact: string;
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
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2-2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
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
    <path d="20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
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

const PlusIcon = () => (
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
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function CreateMitraPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<PartnerFormData>({
    name: '',
    sector: '',
    city: '',
    quota: 5,
    address: '',
    mentorName: '',
    mentorContact: '',
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

    // Temporary: simulasi submit
    console.log('Data Mitra Industri:', formData);

    setTimeout(() => {
      alert('Mitra industri berhasil ditambahkan!');
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
          Data Mitra Industri
          <span className="mx-1.5 text-zinc-700">/</span>
          <span className="text-zinc-300">Tambah Mitra</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Tambah Mitra Industri
        </h1>

        <p className="text-[13px] text-zinc-400 mt-1">
          Daftarkan perusahaan atau instansi baru sebagai penyedia kuota Praktek Kerja Lapangan (PKL).
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
        <div className="px-6 py-4 border-b border-zinc-800/80">
          <h2 className="text-[14px] font-bold text-white">
            Informasi Mitra Industri
          </h2>
          <p className="text-[11px] text-zinc-500 mt-1">
            Lengkapi informasi perusahaan, kuota, serta kontak pembimbing lapangan dengan benar.
          </p>
        </div>

        {/* ==========================================
            FORM CONTENT
        ========================================== */}
        <div className="p-6 space-y-7">
          {/* ==========================================
              IDENTITAS PERUSAHAAN
          ========================================== */}
          <FormSection
            icon={<BuildingIcon />}
            title="Identitas Perusahaan"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Nama Perusahaan / Instansi"
                required
                placeholder="Contoh: PT Technology Indonesia"
                value={formData.name}
                onChange={(value) => handleChange('name', value)}
              />

              <FormInput
                label="Bidang / Sektor"
                placeholder="Contoh: Software House / UI/UX / Otomotif"
                value={formData.sector}
                onChange={(value) => handleChange('sector', value)}
              />
            </div>
          </FormSection>

          {/* ==========================================
              LOKASI & KAPASITAS
          ========================================== */}
          <FormSection
            icon={<MapPinIcon />}
            title="Lokasi & Kapasitas"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormInput
                label="Kota / Kabupaten"
                required
                placeholder="Contoh: Bandung / Karawang"
                value={formData.city}
                onChange={(value) => handleChange('city', value)}
              />

              <div className="space-y-2">
                <label className="block text-[12px] text-zinc-400 font-medium">
                  Kuota Maksimal (Siswa)
                  <span className="text-rose-500"> *</span>
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  value={formData.quota}
                  onChange={(e) => handleChange('quota', Number(e.target.value))}
                  className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <label className="block text-[12px] text-zinc-400 font-medium">
                Alamat Lengkap
              </label>
              <textarea
                rows={3}
                placeholder="Contoh: Jl. Raya Utama No. 88"
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="w-full px-4 py-3 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 placeholder:text-zinc-600 transition-colors resize-none"
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
                label="Nama Pembimbing Lapangan"
                placeholder="Contoh: Budi Santoso (Lead Dev)"
                value={formData.mentorName}
                onChange={(value) => handleChange('mentorName', value)}
              />

              <FormInput
                label="Kontak Pembimbing (Email / No. HP)"
                placeholder="Contoh: budi@techinnov.id / 0812..."
                value={formData.mentorContact}
                onChange={(value) => handleChange('mentorContact', value)}
              />
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
            <PlusIcon />
            <span>
              {isSubmitting ? 'Menyimpan...' : 'Simpan Mitra'}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

// ==========================================
// FORM SECTION
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
// FORM INPUT
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