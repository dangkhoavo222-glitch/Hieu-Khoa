import React, { useState } from 'react';
import { Product } from '../types';

interface VerticalProductListProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onOpenQuickView: (product: Product) => void;
  onOpenCatalogView?: () => void;
}

export const VerticalProductList: React.FC<VerticalProductListProps> = ({
  products,
  onAddToCart,
  onBuyNow,
  onOpenQuickView,
  onOpenCatalogView,
}) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'cocona-classic': 1,
    'cocona-plus': 1,
    'cocona-family': 1,
    'cocona-combo': 1,
    'cocona-limited': 1,
  });

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const getAnchorId = (id: string) => {
    switch (id) {
      case 'cocona-classic':
        return 'san-pham-classic';
      case 'cocona-plus':
        return 'san-pham-nhadam';
      case 'cocona-family':
        return 'san-pham-giadinh';
      case 'cocona-combo':
        return 'san-pham-combo';
      case 'cocona-limited':
        return 'san-pham-limited';
      default:
        return id;
    }
  };

  const scrollToAnchor = (anchorId: string) => {
    const el = document.getElementById(anchorId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4 pt-6 border-t border-[#e3f1e6]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#1b4d3e]">unfold_more</span>
          <h3 className="text-lg font-bold text-[#003629]">
            Lướt Dọc Chi Tiết & Đặt Trực Tiếp (Vertical Scroll View)
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 hidden sm:inline">
            Kéo lên/xuống để xem toàn bộ thông số và thao tác mua
          </span>
          {onOpenCatalogView && (
            <button
              onClick={onOpenCatalogView}
              className="px-3 py-1 bg-[#e3f1e6] hover:bg-[#1b4d3e] hover:text-white text-[#003629] text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">filter_list</span>
              <span>Mở bộ lọc & Bảng so sánh</span>
            </button>
          )}
        </div>
      </div>

      {/* Sub-navigation jump to specific products */}
      <div className="flex flex-wrap items-center gap-2 py-1">
        <span className="text-xs font-bold text-[#003629]">Chuyển nhanh:</span>
        <button
          onClick={() => scrollToAnchor('san-pham-classic')}
          className="px-2.5 py-1 rounded-lg bg-[#effdf1] hover:bg-[#1b4d3e] hover:text-white text-xs font-semibold text-[#003629] border border-[#c0c9c3]/40 transition-colors cursor-pointer"
        >
          Classic 500ml
        </button>
        <button
          onClick={() => scrollToAnchor('san-pham-nhadam')}
          className="px-2.5 py-1 rounded-lg bg-[#effdf1] hover:bg-[#1b4d3e] hover:text-white text-xs font-semibold text-[#003629] border border-[#c0c9c3]/40 transition-colors cursor-pointer"
        >
          Plus Nha Đam
        </button>
        <button
          onClick={() => scrollToAnchor('san-pham-giadinh')}
          className="px-2.5 py-1 rounded-lg bg-[#effdf1] hover:bg-[#1b4d3e] hover:text-white text-xs font-semibold text-[#003629] border border-[#c0c9c3]/40 transition-colors cursor-pointer"
        >
          Gia Đình 1L
        </button>
        <button
          onClick={() => scrollToAnchor('san-pham-combo')}
          className="px-2.5 py-1 rounded-lg bg-[#effdf1] hover:bg-[#1b4d3e] hover:text-white text-xs font-semibold text-[#003629] border border-[#c0c9c3]/40 transition-colors cursor-pointer"
        >
          Combo Set 4 Hộp
        </button>
        <button
          onClick={() => scrollToAnchor('san-pham-limited')}
          className="px-2.5 py-1 rounded-lg bg-[#effdf1] hover:bg-[#1b4d3e] hover:text-white text-xs font-semibold text-[#003629] border border-[#c0c9c3]/40 transition-colors cursor-pointer"
        >
          Premium Limited
        </button>
      </div>

      {/* Vertical Scroll Container */}
      <div className="max-h-[640px] overflow-y-auto custom-scroll-y pr-2 space-y-5 rounded-2xl p-2 bg-[#effdf1]/50 border border-[#c0c9c3]/40">
        {products.map((product) => {
          const qty = quantities[product.id] || 1;
          const anchorId = getAnchorId(product.id);

          return (
            <div
              key={product.id}
              id={anchorId}
              className={`bg-white rounded-2xl p-5 border ${
                product.id === 'cocona-limited' ? 'border-2 border-[#003629]/30' : 'border-[#c0c9c3]/30'
              } shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center`}
            >
              <div
                onClick={() => onOpenQuickView(product)}
                className="w-full md:w-56 h-56 bg-[#e9f7ec] rounded-xl p-3 flex items-center justify-center shrink-0 cursor-pointer group relative overflow-hidden"
              >
                <img
                  alt={product.name}
                  className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  src={product.image}
                />
                <div className="absolute inset-0 bg-[#003629]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-2.5 py-1 bg-white/90 text-[#003629] text-xs font-bold rounded-full shadow">
                    Xem Chi Tiết
                  </span>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-white text-xs font-bold ${
                      product.id === 'cocona-classic'
                        ? 'bg-[#1b4d3e]'
                        : product.id === 'cocona-plus'
                        ? 'bg-[#1c6c3f]'
                        : product.id === 'cocona-family'
                        ? 'bg-[#5b3f23]'
                        : product.id === 'cocona-combo'
                        ? 'bg-[#1c6c3f]'
                        : 'bg-[#003629]'
                    }`}
                  >
                    {product.badgeCategory}
                  </span>
                  {product.certBadge && (
                    <span className="px-2 py-0.5 rounded-full bg-[#a5f4bb] text-[#003629] text-xs font-medium">
                      {product.certBadge}
                    </span>
                  )}
                  <span className="text-xs text-gray-500">
                    Dung tích: {product.volume} • HSD: {product.shelfLife}
                  </span>
                </div>

                <h4
                  onClick={() => onOpenQuickView(product)}
                  className="text-xl font-bold text-[#003629] hover:text-[#1c6c3f] cursor-pointer transition-colors"
                >
                  {product.name}
                </h4>
                <p className="text-sm text-[#404945]">{product.description}</p>

                <div className="flex items-center gap-3 pt-1">
                  <span className="text-2xl font-black text-[#1b4d3e]">
                    {product.price.toLocaleString('vi-VN')} VNĐ
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPrice.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-xs text-[#1c6c3f] font-bold">(-15%)</span>
                    </>
                  )}
                  <span className="text-xs text-gray-500">
                    / {product.id === 'cocona-combo' ? 'set 4 hộp' : product.volume}
                  </span>
                </div>
              </div>

              <div className="w-full md:w-56 flex flex-col gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 md:border-l border-gray-200 md:pl-5">
                <label className="text-xs text-gray-500 font-semibold">Chọn số lượng:</label>
                <div className="flex items-center bg-[#effdf1] rounded-xl border border-gray-300 p-1">
                  <button
                    className="w-9 h-9 rounded-lg bg-white text-[#003629] font-bold hover:bg-gray-100 flex items-center justify-center shadow-sm cursor-pointer"
                    onClick={() => updateQty(product.id, -1)}
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-[#003629]">
                    {qty}
                  </span>
                  <button
                    className="w-9 h-9 rounded-lg bg-white text-[#003629] font-bold hover:bg-gray-100 flex items-center justify-center shadow-sm cursor-pointer"
                    onClick={() => updateQty(product.id, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl bg-[#e3f1e6] hover:bg-[#1b4d3e] hover:text-white text-[#003629] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  onClick={() => onAddToCart(product, qty)}
                >
                  <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                  <span>Thêm Giỏ Hàng</span>
                </button>
                <button
                  className="w-full py-2.5 rounded-xl bg-[#1b4d3e] hover:bg-[#003629] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer"
                  onClick={() => onBuyNow(product, qty)}
                >
                  <span className="material-symbols-outlined text-base">bolt</span>
                  <span>Mua Ngay Trực Tiếp</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
