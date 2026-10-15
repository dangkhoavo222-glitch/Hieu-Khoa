import React from 'react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto transform transition-all duration-300 bg-[#003629] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between gap-3 border border-[#a5f4bb]/40 animate-in fade-in slide-in-from-bottom-5"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#a5f4bb] text-2xl shrink-0">
              {toast.type === 'cart' ? 'shopping_bag' : 'check_circle'}
            </span>
            <div>
              <h5 className="font-bold text-xs sm:text-sm text-white">{toast.title}</h5>
              <p className="text-[11px] text-gray-300">{toast.desc}</p>
            </div>
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-gray-400 hover:text-white p-1 rounded-full transition-colors text-xs"
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};
