
'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type Category = 'action' | 'activity' | 'system';
type Filter = 'all' | 'unread' | 'action';

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  time: string;
  category: Category;
  read: boolean;
  href: string;
};

// Data contoh. Nantinya ganti dengan data dari database/API.
const initialNotifications: NotificationItem[] = [
  {
    id: '1',
    title: 'Verifikasi akun baru',
    description: 'Ada akun baru yang perlu diperiksa.',
    time: '5 menit lalu',
    category: 'action',
    read: false,
    href: '/admin/siswa',
  },
  {
    id: '2',
    title: 'Rekap Mentor belum lengkap',
    description: 'Periksa rekap kelas yang belum diselesaikan.',
    time: '30 menit lalu',
    category: 'activity',
    read: false,
    href: '/admin/mentor',
  },
  {
    id: '3',
    title: 'Rekap kehadiran tersedia',
    description: 'Ringkasan kehadiran siap diperiksa.',
    time: '1 jam lalu',
    category: 'system',
    read: true,
    href: '/admin/kehadiran',
  },
];

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState<Filter>('all');
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  const containerRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter(
    (item) => !item.read
  ).length;

  // Tutup popup saat klik di luar atau menekan Escape.
  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const filteredNotifications = notifications.filter((item) => {
    if (filter === 'unread') return !item.read;
    if (filter === 'action') return item.category === 'action';
    return true;
  });

  function markAsRead(id: string) {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  }

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((item) => ({ ...item, read: true }))
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      {/* Tombol lonceng */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Buka notifikasi"
        aria-expanded={isOpen}
        className="relative rounded-xl p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        </svg>

        {unreadCount > 0 && (
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-zinc-950" />
        )}
      </button>

      {/* Popup notifikasi */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Daftar notifikasi"
          className="absolute right-0 top-full z-50 mt-3 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
        >
          {/* Header popup */}
          <div className="flex items-start justify-between border-b border-zinc-800 px-4 py-4">
            <div>
              <h3 className="text-sm font-bold text-zinc-100">
                Notifikasi
              </h3>
              <p className="mt-1 text-xs text-zinc-500">
                {unreadCount > 0
                  ? `${unreadCount} belum dibaca`
                  : 'Semua sudah dibaca'}
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                type="button"
                onClick={markAllAsRead}
                className="text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                Tandai semua dibaca
              </button>
            )}
          </div>

          {/* Filter */}
          <div className="flex gap-2 border-b border-zinc-800 px-4 py-3">
            {[
              { value: 'all', label: 'Semua' },
              { value: 'unread', label: 'Belum dibaca' },
              { value: 'action', label: 'Perlu tindakan' },
            ].map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value as Filter)}
                className={`rounded-lg px-2.5 py-2 text-xs transition-colors ${
                  filter === tab.value
                    ? 'bg-zinc-100 font-semibold text-zinc-900'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Daftar notifikasi */}
          <div className="max-h-[360px] overflow-y-auto">
            {filteredNotifications.length === 0 ? (
              <div className="px-4 py-10 text-center">
                <p className="text-sm text-zinc-300">
                  Tidak ada notifikasi
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Notifikasi akan muncul saat ada aktivitas penting.
                </p>
              </div>
            ) : (
              filteredNotifications.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    markAsRead(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex gap-3 border-b border-zinc-800/70 px-4 py-4 transition-colors hover:bg-zinc-900 ${
                    !item.read ? 'bg-zinc-900/50' : ''
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                      item.category === 'action'
                        ? 'bg-amber-500/10 text-amber-400'
                        : item.category === 'activity'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-emerald-500/10 text-emerald-400'
                    }`}
                  >
                    {item.category === 'action'
                      ? '!'
                      : item.category === 'activity'
                        ? '↻'
                        : '✓'}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-zinc-100">
                        {item.title}
                      </p>

                      {!item.read && (
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                      )}
                    </div>

                    <p className="mt-1 text-xs leading-5 text-zinc-400">
                      {item.description}
                    </p>

                    <p className="mt-2 text-[10px] text-zinc-600">
                      {item.time}
                    </p>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* Footer */}
          <Link
            href="/admin/notifikasi"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white"
          >
            Lihat semua notifikasi
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}