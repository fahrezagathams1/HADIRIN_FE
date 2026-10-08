'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// ==========================================
// TYPES
// ==========================================
interface StudentFormData {
  nisn: string;
  name: string;
  school: string;
  major: string;
  company: string;
  startDate: string;
  status: 'Aktif' | 'Pending' | 'Selesai';
}

// ==========================================
// INLINE SVG ICONS
// ==========================================
const UserIcon = () => (
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
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SchoolIcon = () => (
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
    <path d="m3 10 9-7 9 7" />
    <path d="M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const BriefcaseIcon = () => (
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
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const CalendarIcon = () => (
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
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
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
export default function CreateSiswaPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<StudentFormData>({
    nisn: '',
    name: '',
    school: '',
    major: '',
    company: '',
    startDate: '',
    status: 'Pending',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // ==========================================
  // HANDLE CHANGE
  // ==========================================
  const handleChange = (
    field: keyof StudentFormData,
    value: string
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
    console.log('Data siswa:', formData);

    setTimeout(() => {
      alert('Data siswa berhasil ditambahkan!');
      router.push('/admin/data-siswa');
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
          Data Siswa
          <span className="mx-1.5 text-zinc-700">/</span>
          <span className="text-zinc-300">
            Tambah Siswa
          </span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Tambah Siswa
        </h1>

        <p className="text-[13px] text-zinc-400 mt-1">
          Tambahkan data siswa baru yang akan mengikuti
          program Praktek Kerja Lapangan.
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
            Informasi Siswa
          </h2>

          <p className="text-[11px] text-zinc-500 mt-1">
            Isi data siswa dengan lengkap dan sesuai
            dengan data yang terdaftar.
          </p>
        </div>

        {/* ==========================================
            FORM CONTENT
        ========================================== */}
        <div className="p-6 space-y-7">

          {/* ==========================================
              DATA IDENTITAS
          ========================================== */}
          <FormSection
            icon={<UserIcon />}
            title="Data Identitas"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <FormInput
                label="Nama Lengkap"
                required
                placeholder="Contoh: Adriel Nararya"
                value={formData.name}
                onChange={(value) =>
                  handleChange('name', value)
                }
              />

              <FormInput
                label="NISN"
                required
                placeholder="Contoh: 0051234567"
                value={formData.nisn}
                onChange={(value) =>
                  handleChange('nisn', value)
                }
              />

            </div>
          </FormSection>

          {/* ==========================================
              DATA SEKOLAH
          ========================================== */}
          <FormSection
            icon={<SchoolIcon />}
            title="Data Sekolah"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <FormInput
                label="Asal Sekolah"
                required
                placeholder="Contoh: SMKN 1 Bandung"
                value={formData.school}
                onChange={(value) =>
                  handleChange('school', value)
                }
              />

              <FormInput
                label="Jurusan"
                required
                placeholder="Contoh: Rekayasa Perangkat Lunak"
                value={formData.major}
                onChange={(value) =>
                  handleChange('major', value)
                }
              />

            </div>
          </FormSection>

          {/* ==========================================
              DATA PKL
          ========================================== */}
          <FormSection
            icon={<BriefcaseIcon />}
            title="Data PKL"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <FormInput
                label="Perusahaan Mitra"
                required
                placeholder="Contoh: PT Tech Innovation"
                value={formData.company}
                onChange={(value) =>
                  handleChange('company', value)
                }
              />

              {/* TANGGAL MULAI */}
              <div className="space-y-2">
                <label className="block text-[12px] text-zinc-400 font-medium">
                  Tanggal Mulai
                  <span className="text-rose-500"> *</span>
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
                    <CalendarIcon />
                  </div>

                  <input
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) =>
                      handleChange(
                        'startDate',
                        e.target.value
                      )
                    }
                    className="w-full bg-[#18181B] border border-zinc-800 rounded-xl pl-10 pr-4 py-3 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:invert-[0.8] [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100"
                  />
                </div>
              </div>

            </div>
          </FormSection>

          {/* ==========================================
              STATUS
          ========================================== */}
          <FormSection
            icon={<CheckStatusIcon />}
            title="Status Siswa"
          >
            <div className="max-w-md space-y-2">

              <label className="block text-[12px] text-zinc-400 font-medium">
                Status
                <span className="text-rose-500"> *</span>
              </label>

              <select
                required
                value={formData.status}
                onChange={(e) =>
                  handleChange(
                    'status',
                    e.target.value
                  )
                }
                className="w-full bg-[#18181B] border border-zinc-800 rounded-xl px-4 py-3 text-[13px] text-zinc-200 focus:outline-none focus:border-zinc-600 transition-all cursor-pointer"
              >
                <option value="Pending">
                  Pending
                </option>

                <option value="Aktif">
                  Aktif
                </option>

                <option value="Selesai">
                  Selesai
                </option>
              </select>

              <p className="text-[11px] text-zinc-600">
                Pilih status sesuai kondisi siswa saat
                ditambahkan ke sistem.
              </p>

            </div>
          </FormSection>

        </div>

        {/* ==========================================
            FOOTER ACTION
        ========================================== */}
        <div className="px-6 py-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">

          {/* KEMBALI */}
          <Link
            href="/admin/data-siswa"
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
              {isSubmitting
                ? 'Menyimpan...'
                : 'Tambah Siswa'}
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

function FormSection({
  icon,
  title,
  children,
}: FormSectionProps) {
  return (
    <div className="space-y-4">

      <div className="flex items-center gap-2 text-zinc-300">
        <div className="text-zinc-500">
          {icon}
        </div>

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
        {required && (
          <span className="text-rose-500"> *</span>
        )}
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
// STATUS ICON
// ==========================================
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

