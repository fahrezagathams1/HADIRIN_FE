'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// --- INLINE SVG ICONS ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);

export default function AdminProfileAndSettingsPage() {
  // State Profile Admin
  const [fullName, setFullName] = useState('Admin Utama');
  const [email, setEmail] = useState('admin@hadirin.id');
  const [phone, setPhone] = useState('081211112222');
  const [organization] = useState('Dinas Pendidikan');
  const [role, setRole] = useState('Super Administrator');
  const [adminId] = useState('ADM-001');

  // State Keamanan / Password
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State Pengaturan Notifikasi & Preferensi
  const [emailNotification, setEmailNotification] = useState(true);
  const [systemAlert, setSystemAlert] = useState(true);
  const [reportReminder, setReportReminder] = useState(true);
  const [appTheme, setAppTheme] = useState('dark');

  // Loading States & Messages
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
    }, 800);
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
      setSuccessMessage('Kata sandi akun berhasil diubah!');
    }, 800);
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdatingSettings(true);
    setTimeout(() => {
      setIsUpdatingSettings(false);
      setSuccessMessage('Pengaturan notifikasi dan preferensi aplikasi berhasil disimpan!');
    }, 800);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6 pb-16">
      {/* HEADER & BREADCRUMBS */}
      <div>
        <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium mb-3">
          <Link href="/admin" className="hover:text-zinc-300 transition-colors">
            Admin
          </Link>
          <span>/</span>
          <span className="text-zinc-300 font-semibold">Profil & Pengaturan</span>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight">
          Profil & Pengaturan Akun
        </h1>
        <p className="text-[13px] text-zinc-400 mt-1">
          Kelola data diri admin, keamanan kata sandi, dan preferensi notifikasi sistem.
        </p>
      </div>

      {/* ALERT SUKSES */}
      {successMessage && (
        <div className="p-4 bg-emerald-950/40 border border-emerald-900/50 rounded-2xl flex items-center justify-between text-emerald-400 text-xs font-mono">
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="font-bold hover:text-emerald-300">
            ✕
          </button>
        </div>
      )}

      {/* CARD OVERVIEW DATA ADMIN */}
      <div className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#18181B] border border-zinc-700 flex items-center justify-center font-bold text-lg text-zinc-200">
              AD
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">{fullName}</h2>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-xl text-[10px] font-semibold bg-blue-950/40 text-blue-400 border border-blue-900/50">
                  {role}
                </span>
              </div>
              <p className="text-[12px] text-zinc-400 mt-0.5">{email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-[#18181B] border border-zinc-800 px-3.5 py-2 rounded-xl text-[12px]">
            <span className="text-zinc-500">ID Admin:</span>
            <span className="font-mono font-bold text-zinc-200">{adminId}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-800/80 text-[12px]">
          <div>
            <p className="text-zinc-500 font-medium">Instansi</p>
            <p className="font-semibold text-zinc-200 mt-0.5 flex items-center gap-1.5">
              <BuildingIcon /> {organization}
            </p>
          </div>
          <div>
            <p className="text-zinc-500 font-medium">Hak Akses</p>
            <p className="font-semibold text-emerald-400 mt-0.5 font-mono">
              Full Access
            </p>
          </div>
          <div>
            <p className="text-zinc-500 font-medium">Status Akun</p>
            <p className="font-semibold text-zinc-200 mt-0.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span> Aktif
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* KOLOM KIRI (2 KOLOM): INFORMASI PROFIL & KEAMANAN */}
        <div className="lg:col-span-2 space-y-6">
          {/* FORM INFORMASI PROFIL */}
          <form onSubmit={handleUpdateProfile} className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-5">
            <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3 text-white">
              <UserIcon />
              <h3 className="text-sm font-bold">Informasi Profil & Kontak</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Peran / Role
                </label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Nomor Telepon / WhatsApp
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isUpdatingProfile}
                className="px-5 py-2.5 text-[12px] font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                {isUpdatingProfile ? 'Menyimpan...' : 'Simpan Profil'}
              </button>
            </div>
          </form>

          {/* FORM UBAH KATA SANDI */}
          <form onSubmit={handleUpdatePassword} className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-5">
            <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3 text-white">
              <ShieldCheckIcon />
              <h3 className="text-sm font-bold">Keamanan (Ubah Kata Sandi)</h3>
            </div>

            <div className="space-y-1.5">
              <label className="text-[12px] text-zinc-400 font-medium block">
                Kata Sandi Saat Ini
              </label>
              <input
                type="password"
                required
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Kata Sandi Baru
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[12px] text-zinc-400 font-medium block">
                  Konfirmasi Kata Sandi Baru
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 text-[13px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 transition-colors font-sans"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="px-5 py-2.5 text-[12px] font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                {isUpdatingPassword ? 'Memproses...' : 'Ubah Kata Sandi'}
              </button>
            </div>
          </form>
        </div>

        {/* KOLOM KANAN (1 KOLOM): PENGATURAN NOTIFIKASI & PREFERENSI */}
        <div className="space-y-6">
          <form onSubmit={handleSaveSettings} className="bg-[#121215] p-6 rounded-2xl border border-zinc-800/80 space-y-5">
            <div className="flex items-center gap-2 border-b border-zinc-800/80 pb-3 text-white">
              <BellIcon />
              <h3 className="text-sm font-bold">Pengaturan & Notifikasi</h3>
            </div>

            <div className="space-y-4 text-[12px]">
              {/* NOTIFIKASI SYSTEM */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-zinc-200">Lansiran Sistem Utama</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Notifikasi error atau maintenance pada sistem.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={systemAlert}
                  onChange={(e) => setSystemAlert(e.target.checked)}
                  className="w-4 h-4 accent-white cursor-pointer mt-1"
                />
              </div>

              {/* PERINGATAN LAPORAN MINGGUAN */}
              <div className="flex items-start justify-between gap-3 pt-3 border-t border-zinc-800/80">
                <div>
                  <p className="font-semibold text-zinc-200">Rekap Aktivitas Mingguan</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Terima ringkasan aktivitas siswa via email.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={reportReminder}
                  onChange={(e) => setReportReminder(e.target.checked)}
                  className="w-4 h-4 accent-white cursor-pointer mt-1"
                />
              </div>

              {/* REKAP EMAIL BULANAN */}
              <div className="flex items-start justify-between gap-3 pt-3 border-t border-zinc-800/80">
                <div>
                  <p className="font-semibold text-zinc-200">Email Update Sistem</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">
                    Terima informasi pembaruan versi dari pengembang.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={emailNotification}
                  onChange={(e) => setEmailNotification(e.target.checked)}
                  className="w-4 h-4 accent-white cursor-pointer mt-1"
                />
              </div>

              {/* TEMA TAMPILAN */}
              <div className="pt-3 border-t border-zinc-800/80 space-y-1.5">
                <label className="font-medium text-zinc-400 block">
                  Tema Tampilan Portal
                </label>
                <select
                  value={appTheme}
                  onChange={(e) => setAppTheme(e.target.value)}
                  className="w-full px-3 py-2.5 text-[12px] bg-[#18181B] border border-zinc-800 rounded-xl focus:outline-none focus:border-zinc-600 text-zinc-100 cursor-pointer font-sans"
                >
                  <option value="dark">Gelap (Dark Mode)</option>
                  <option value="light">Terang (Light Mode)</option>
                  <option value="system">Sesuai Sistem Device</option>
                </select>
              </div>
            </div>

            <div className="pt-3 flex justify-end">
              <button
                type="submit"
                disabled={isUpdatingSettings}
                className="w-full py-2.5 text-[12px] font-semibold text-zinc-950 bg-white hover:bg-zinc-200 disabled:bg-zinc-800 disabled:text-zinc-500 rounded-xl transition-all cursor-pointer shadow-sm"
              >
                {isUpdatingSettings ? 'Menyimpan...' : 'Simpan Pengaturan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}