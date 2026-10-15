import React, { useState } from 'react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.tag.toLowerCase().includes(query.toLowerCase()) ||
          p.ingredients.toLowerCase().includes(query.toLowerCase())
      )
    : products;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 pt-20">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-xl w-full p-5 shadow-2xl border border-[#c0c9c3]/50 z-10 space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2 flex-1">
            <span className="material-symbols-outlined text-[#1c6c3f] text-2xl">search</span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm nước dừa, nha đam, 1 lít, combo..."
              className="w-full text-sm font-semibold text-[#003629] placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] flex items-center justify-center transition-colors cursor-pointer text-xs font-bold"
          >
            ✕
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-gray-500">
              Không tìm thấy sản phẩm nào khớp với từ khóa "{query}".
            </div>
          ) : (
            filtered.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="p-2.5 rounded-xl bg-[#effdf1] hover:bg-[#e3f1e6] transition-colors flex items-center justify-between gap-3 cursor-pointer border border-[#c0c9c3]/30"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-contain bg-white rounded-lg p-1"
                  />
                  <div>
                    <h5 className="font-bold text-xs text-[#003629]">{product.name}</h5>
                    <span className="text-[11px] text-gray-500">{product.volume}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-xs text-[#1b4d3e]">
                    {product.price.toLocaleString('vi-VN')}đ
                  </span>
                  <span className="text-[10px] text-[#1c6c3f] block font-semibold">
                    {product.tag}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
