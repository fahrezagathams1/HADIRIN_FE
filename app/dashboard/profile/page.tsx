'use client';

import React, { useState } from 'react';

export default function ProfilePage() {
  // State Profile
  const [fullName, setFullName] = useState('Adriel Nararya');
  const [email, setEmail] = useState('adriel.nararya@student.smkn1bdg.sch.id');
  const [phone, setPhone] = useState('081234567890');
  const [schoolName] = useState('SMKN 1 Bandung');
  const [nisn] = useState('0051234567');
  const [mentorName] = useState('Budi Santoso, S.Kom (PT Teknologi Nusantara)');

  // State Security
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State Settings / Pengaturan
  const [emailNotification, setEmailNotification] = useState(true);
  const [reviewAlert, setReviewAlert] = useState(true);
  const [appTheme, setAppTheme] = useState('dark');

  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isUpdatingSettings, setIsUpdatingSettings] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingProfile(true);
    setTimeout(() => {
      setIsUpdatingProfile(false);
      setSuccessMessage('Informasi profil berhasil diperbarui!');
    }, 1000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Konfirmasi kata sandi baru tidak cocok!');
      return;
    }
    setIsUpdatingPassword(true);
    setTimeout(() => {
      setIsUpdatingPassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setSuccessMessage('Kata sandi berhasil diubah!');
    }, 1000);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingSettings(true);
    setTimeout(() => {
      setIsUpdatingSettings(false);
      setSuccessMessage('Pengaturan aplikasi berhasil disimpan!');
    }, 1000);
  };

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      {/* HEADER PAGE */}
      <div>
        <h1 className="text-xl font-bold text-zinc-100 tracking-tight">Profil & Pengaturan</h1>
        <p className="text-xs font-mono text-zinc-400 mt-1">
          Kelola informasi data diri, keamanan akun, dan preferensi pengaturan aplikasi Anda.
        </p>
      </div>

      {/* ALERT SUKSES */}
      {successMessage && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-800/50 rounded-lg flex items-center justify-between text-emerald-400 text-xs font-mono">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="font-bold hover:text-emerald-300">
            ✕
          </button>
        </div>
      )}

      {/* CARD DETAIL INFORMASI PKL (READ ONLY DATA) */}
      <div className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 shadow-sm space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-zinc-800 rounded-md flex items-center justify-center text-base font-mono font-bold text-zinc-100 border border-zinc-700">
            AN
          </div>
          <div>
            <h2 className="text-base font-bold text-zinc-100">{fullName}</h2>
            <p className="text-xs font-mono text-zinc-400">NISN: {nisn}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800/80 text-xs">
          <div>
            <p className="text-zinc-500 font-mono text-[11px]">Asal Sekolah</p>
            <p className="font-semibold text-zinc-200 mt-0.5">{schoolName}</p>
          </div>
          <div>
            <p className="text-zinc-500 font-mono text-[11px]">Mentor Pembimbing PKL</p>
            <p className="font-semibold text-zinc-200 mt-0.5">{mentorName}</p>
          </div>
        </div>
      </div>

      {/* FORM EDIT DATA DIRI */}
      <form onSubmit={handleUpdateProfile} className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-zinc-100 border-b border-zinc-800/80 pb-3">Informasi Kontak</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
              Nama Lengkap
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
              Nomor Telepon / WA
            </label>
            <input
              type="text"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
            Alamat Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
          />
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isUpdatingProfile}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800 rounded-md transition-none"
          >
            {isUpdatingProfile ? 'Menyimpan...' : 'Simpan Profil'}
          </button>
        </div>
      </form>

      {/* SECTION PENGATURAN APLIKASI (SETTINGS) */}
      <form onSubmit={handleSaveSettings} className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-zinc-100 border-b border-zinc-800/80 pb-3">Pengaturan Aplikasi</h3>

        <div className="space-y-4">
          {/* NOTIFIKASI EMAIL */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-zinc-200">Notifikasi Email</p>
              <p className="text-[11px] text-zinc-500 font-mono">Terima pengingat harian untuk mengisi laporan melalui email.</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotification}
              onChange={(e) => setEmailNotification(e.target.checked)}
              className="w-4 h-4 accent-zinc-100 cursor-pointer"
            />
          </div>

          {/* NOTIFIKASI REVIEW MENTOR */}
          <div className="flex items-center justify-between pt-3 border-t border-zinc-800/80">
            <div>
              <p className="text-xs font-semibold text-zinc-200">Pemberitahuan Review Mentor</p>
              <p className="text-[11px] text-zinc-500 font-mono">Dapatkan alert saat mentor memberikan komentar atau revisi laporan.</p>
            </div>
            <input
              type="checkbox"
              checked={reviewAlert}
              onChange={(e) => setReviewAlert(e.target.checked)}
              className="w-4 h-4 accent-zinc-100 cursor-pointer"
            />
          </div>

          {/* PREFERENSI TAMPILAN */}
          <div className="pt-3 border-t border-zinc-800/80 space-y-1.5">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
              Tema Tampilan
            </label>
            <select
              value={appTheme}
              onChange={(e) => setAppTheme(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 cursor-pointer transition-none font-sans"
            >
              <option value="dark">Gelap (Dark Mode)</option>
              <option value="light">Terang (Light Mode)</option>
              <option value="system">Sesuai Sistem Device</option>
            </select>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isUpdatingSettings}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800 rounded-md transition-none"
          >
            {isUpdatingSettings ? 'Menyimpan...' : 'Simpan Pengaturan'}
          </button>
        </div>
      </form>

      {/* FORM UBAH PASSWORD */}
      <form onSubmit={handleUpdatePassword} className="bg-[#18181B] p-6 rounded-lg border border-zinc-800 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-zinc-100 border-b border-zinc-800/80 pb-3">Keamanan Akun (Ubah Kata Sandi)</h3>

        <div className="space-y-1.5">
          <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
            Kata Sandi Saat Ini
          </label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider block">
              Konfirmasi Kata Sandi Baru
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3.5 py-2 text-xs bg-[#09090B] border border-zinc-800 rounded-md focus:outline-none focus:border-zinc-500 text-zinc-100 transition-none font-sans"
            />
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="submit"
            disabled={isUpdatingPassword}
            className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 disabled:border disabled:border-zinc-800 rounded-md transition-none"
          >
            {isUpdatingPassword ? 'Memproses...' : 'Ubah Kata Sandi'}
          </button>
        </div>
      </form>
    </div>
  );
}