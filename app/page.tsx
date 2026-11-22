'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react'; 

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-xl space-y-6">
        
        {/* LOGO HADIRIN & HEADER */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700/80 flex items-center justify-center shadow-inner">
            <span className="text-xl font-black font-mono text-white tracking-tighter">H</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-blue-950 dark:text-blue-100 tracking-tight">Hadirin</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">Masuk ke akun Anda</p>
          </div>
        </div>

        {/* FORM LOGIN */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">Email / Nama Pengguna</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@gmail.com"
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg px-3.5 py-2 text-xs font-mono text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-1.5">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg pl-3.5 pr-10 py-2 text-xs font-mono text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-blue-700 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 focus:outline-none transition-colors"
                aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-xs font-mono font-bold py-2.5 rounded-lg transition-colors shadow-sm mt-2"
          >
            Masuk 
          </button>
        </form>

        {/* PESAN BANTUAN ADMIN */}
        <div className="text-center pt-2 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
            Lupa kata sandi? Hubungi <span className="text-blue-700 dark:text-blue-400 font-semibold">Admin</span> untuk mengatur ulang.
          </p>
        </div>

      </div>
    </div>
  );
}