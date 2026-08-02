'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

interface ILoginFormInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormInput>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit: SubmitHandler<ILoginFormInput> = async (data) => {
    setIsLoading(true);
    setErrorMessage(null);

    // Mock Login (Simulasi Delay Server 1.2 Detik)
    setTimeout(() => {
      setIsLoading(false);
      if (data.email === 'admin@gmail.com' && data.password === '123456') {
        window.location.href = '/dashboard';
      } else {
        setErrorMessage('Invalid email or password.');
      }
    }, 1200);
  };

  return (
    /* BACKGROUND: Gradient Biru Kehitaman Elegan (Dark Navy to Black) */
    <div className="min-h-screen w-full bg-gradient-to-b from-[2C2C2C] via-[#0a1122] to-[2C2C2C] flex items-center justify-center p-4 font-sans text-[#374151]">
      
      {/* CARD LOGIN UTAMA (TETAP CLEAN PUTIH) */}
      <div className="w-full max-w-[400px] bg-white rounded-2xl shadow-2xl shadow-black/50 border border-slate-800/20 p-8 space-y-6">
        
        {/* HEADER BRANDING */}
        <div className="text-center space-y-1">
          <h1 className="text-xl font-bold tracking-tight text-[#111827]">
            HADIRIN
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Log in to your account
          </p>
        </div>

        {/* ERROR ALERT */}
        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded-lg text-center">
            {errorMessage}
          </div>
        )}

        {/* FORM UTAMA */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* FIELD EMAIL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#374151] block">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Email or us@email.com"
                {...register('email', {
                  required: 'Email is required',
                })}
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all pr-10 ${
                  errors.email
                    ? 'border-red-400 focus:ring-red-100'
                    : 'border-[#E5E7EB] focus:border-[#2563EB] focus:ring-blue-100'
                }`}
              />
              {/* Email Icon */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            {errors.email && (
              <p className="text-[11px] text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>

          {/* FIELD PASSWORD */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#374151] block">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                })}
                className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg text-[#111827] placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all pr-10 ${
                  errors.password
                    ? 'border-red-400 focus:ring-red-100'
                    : 'border-[#E5E7EB] focus:border-[#2563EB] focus:ring-blue-100'
                }`}
              />
              {/* Lock Icon / Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] text-red-500 font-medium">{errors.password.message}</p>
            )}
          </div>

          {/* REMEMBER ME & FORGOT PASSWORD */}
          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                {...register('rememberMe')}
                className="w-4 h-4 text-[#2563EB] border-[#E5E7EB] rounded focus:ring-blue-500"
              />
              <span className="text-gray-600 font-medium">Remember Me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-[#2563EB] font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* LOG IN BUTTON */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2.5 bg-[#2563EB] hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-lg shadow-sm transition-all disabled:opacity-60 flex items-center justify-center gap-2 mt-2"
          >
            {isLoading ? (
              <span>Logging in...</span>
            ) : (
              <span>Log In</span>
            )}
          </button>
        </form>

        {/* LOG IN WITH GOOGLE */}
        <button
          type="button"
          className="w-full py-2.5 bg-[#F3F4F6] hover:bg-gray-200 text-[#374151] font-medium text-sm rounded-lg border border-transparent transition-all flex items-center justify-center gap-2.5"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Log in with Google</span>
        </button>

        {/* FOOTER SIGN UP LINK */}
        <p className="text-center text-xs text-gray-500 pt-2">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-[#2563EB] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}