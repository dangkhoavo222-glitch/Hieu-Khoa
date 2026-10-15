import React, { useState } from 'react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#c0c9c3]/50 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
          aria-label="Đóng"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image & Badges */}
          <div className="relative bg-[#effdf1] rounded-2xl p-4 flex items-center justify-center min-h-[260px] border border-[#c0c9c3]/40">
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#1b4d3e] text-white text-xs font-bold">
              {product.badgeCategory}
            </span>
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[240px] w-auto object-contain drop-shadow-md"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#1c6c3f] uppercase tracking-wider block">
                {product.subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#003629] mt-0.5">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-black text-[#1b4d3e]">
                  {product.price.toLocaleString('vi-VN')} VNĐ
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-gray-400 line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}đ
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-[#404945] leading-relaxed">
              {product.description}
            </p>

            {/* Nutrition Specs */}
            <div className="bg-[#effdf1] rounded-xl p-3 border border-[#c0c9c3]/30 space-y-1.5 text-[11px]">
              <span className="font-bold text-[#003629] block">
                Giá Trị Dinh Dưỡng & Khoáng Tự Nhiên:
              </span>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-600">
                <div>• Năng lượng: <strong className="text-[#003629]">{product.nutrition.calories}</strong></div>
                <div>• Kali (K+): <strong className="text-[#003629]">{product.nutrition.potassium}</strong></div>
                <div>• Magie (Mg2+): <strong className="text-[#003629]">{product.nutrition.magnesium}</strong></div>
                <div>• Đường: <strong className="text-[#003629]">{product.nutrition.sugar}</strong></div>
              </div>
            </div>

            {/* Storage and Packaging Specs */}
            <div className="text-[11px] text-gray-500 space-y-0.5">
              <div>Quy cách: <strong>{product.volume}</strong> • Đóng gói: <strong>{product.packaging}</strong></div>
              <div>Bảo quản: <strong>Nhiệt độ 2°C – 8°C</strong> • HSD: <strong>{product.shelfLife}</strong></div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <label className="text-xs font-bold text-[#003629]">Số lượng:</label>
                <div className="flex items-center bg-[#effdf1] rounded-lg border border-gray-300 px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-600 font-bold px-1.5 hover:text-black cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-2 font-bold text-xs text-center min-w-[20px]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-600 font-bold px-1.5 hover:text-black cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    onAddToCart(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                  <span>Thêm Giỏ Hàng</span>
                </button>
                <button
                  onClick={() => {
                    onBuyNow(product, quantity);
                    onClose();
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-[#1b4d3e] hover:bg-[#003629] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">bolt</span>
                  <span>Mua Ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
