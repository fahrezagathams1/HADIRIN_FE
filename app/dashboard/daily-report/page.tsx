'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DailyReportPage() {
  const [reportTitle, setReportTitle] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setFilePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    setFilePreviewUrl(null);
  };

  const handleSubmitReport = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitSuccess(true);
    }, 1200);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* HEADER PAGE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 mb-2 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Form Laporan Harian</h1>
          <p className="text-xs text-slate-500 mt-1">
            Catat aktivitas PKL dan lampirkan bukti foto kegiatan hari ini.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="text-xs font-bold text-emerald-700">
            Attendance Otomatis Dicatat Saat Submit
          </span>
        </div>
      </div>

      {/* ALERT STATUS */}
      {isSubmitSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start justify-between gap-3 text-emerald-800 text-xs font-medium">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              <strong>Laporan Berhasil Dikirim!</strong> Kehadiran Anda hari ini telah otomatis tercatat dalam sistem.
            </span>
          </div>
          <button onClick={() => setIsSubmitSuccess(false)} className="text-emerald-600 hover:text-emerald-900 font-bold">✕</button>
        </div>
      )}

      {/* FORM UTAMA */}
      <form onSubmit={handleSubmitReport} className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
        
        {/* JUDUL KEGIATAN */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Judul Kegiatan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Membuat Komponen Form Daily Report dan Layout Dashboard"
            value={reportTitle}
            onChange={(e) => setReportTitle(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* PILIH PROJECT */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Pilih Project <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 cursor-pointer"
          >
            <option value="">-- Pilih Project PKL --</option>
            <option value="hadirin-v1">Sistem Presensi Hadirin v1.0</option>
            <option value="company-profile">Company Profile & Landing Page</option>
            <option value="internal-dashboard">Internal Portal Dashboard</option>
          </select>
        </div>

        {/* DESKRIPSI ACTIVITIES */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Deskripsi Activities / Logbook <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            placeholder="- Tuliskan detail pekerjaan atau aktivitas PKL hari ini&#10;- Jelaskan fitur yang diselesaikan&#10;- Sertakan tugas teknis lainnya jika ada"
            value={reportDescription}
            onChange={(e) => setReportDescription(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400 leading-relaxed"
          />
        </div>

        {/* UPLOAD DOKUMENTASI */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Dokumentasi Kegiatan (Foto Bukti PKL) <span className="text-red-500">*</span>
          </label>

          {!filePreviewUrl ? (
            <div className="border-2 border-dashed border-slate-200 hover:border-indigo-500/50 bg-slate-50/50 hover:bg-indigo-50/20 rounded-xl p-6 text-center transition-all cursor-pointer relative">
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                required
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="space-y-2">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-600 hover:underline">Klik untuk pilih file</span>
                  <span className="text-xs text-slate-500"> atau drag and drop file di sini</span>
                </div>
                <p className="text-[10px] text-slate-400">PNG, JPG, JPEG (Maksimal 5MB)</p>
              </div>
            </div>
          ) : (
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 overflow-hidden">
                <img
                  src={filePreviewUrl}
                  alt="Preview Dokumentasi"
                  className="w-14 h-14 object-cover rounded-lg border border-slate-200 flex-shrink-0"
                />
                <div className="truncate">
                  <p className="text-xs font-semibold text-slate-800 truncate">{uploadedFile?.name}</p>
                  <p className="text-[10px] text-slate-400">{((uploadedFile?.size || 0) / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="px-2.5 py-1 text-[11px] font-semibold text-red-600 hover:bg-red-50 border border-red-200 rounded-lg transition-colors flex-shrink-0"
              >
                Ganti File
              </button>
            </div>
          )}
        </div>

        {/* KENDALA (OPSIONAL) */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
            Kendala / Catatan Tambahan <span className="text-slate-400 font-normal">(Opsional)</span>
          </label>
          <input
            type="text"
            placeholder="Contoh: Tidak ada kendala berarti."
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-800 placeholder:text-slate-400"
          />
        </div>

        {/* BUTTON ACTIONS */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all"
          >
            Simpan Draft
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 rounded-xl transition-all shadow-md shadow-indigo-500/20 disabled:opacity-50 flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Mengirim...</span>
              </>
            ) : (
              'Kirim Laporan Harian'
            )}
          </button>
        </div>

      </form>
    </div>
  );
}