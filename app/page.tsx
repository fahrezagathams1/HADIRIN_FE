'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#18181B] rounded-xl border border-zinc-800 p-8 shadow-xl space-y-6">
        
        {/* LOGO HADIRIN & HEADER */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-inner">
            <span className="text-xl font-black font-mono text-zinc-100 tracking-tighter">H</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">System PKL Login</h1>
            <p className="text-xs text-zinc-400 font-mono"></p>
          </div>
        </div>

        {/* FORM LOGIN */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">Email / Username</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@smk.sch.id"
              className="w-full bg-[#09090B] border border-zinc-800 rounded-lg px-3.5 py-2 text-xs font-mono text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-zinc-400 mb-1.5">Kata Sandi</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#09090B] border border-zinc-800 rounded-lg px-3.5 py-2 text-xs font-mono text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-mono font-bold py-2.5 rounded-lg transition-colors shadow-sm mt-2"
          >
            Masuk 
          </button>
        </form>
      </div>
    </div>
  );
}