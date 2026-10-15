import React, { useRef, useState } from 'react';
import { Product } from '../types';

interface CarouselSectionProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onOpenQuickView: (product: Product) => void;
}

export const CarouselSection: React.FC<CarouselSectionProps> = ({
  products,
  onAddToCart,
  onBuyNow,
  onOpenQuickView,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#1b4d3e]">swipe</span>
          <h3 className="text-lg font-bold text-[#003629]">Lướt Ngang Nhanh (Carousel 5 Sản Phẩm)</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full bg-[#e3f1e6] hover:bg-[#1b4d3e] hover:text-white text-[#003629] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            title="Cuộn sang trái"
            aria-label="Cuộn trái"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full bg-[#e3f1e6] hover:bg-[#1b4d3e] hover:text-white text-[#003629] flex items-center justify-center transition-colors shadow-sm cursor-pointer"
            title="Cuộn sang phải"
            aria-label="Cuộn phải"
          >
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-1 snap-x snap-mandatory"
      >
        {products.map((product) => {
          const qty = quantities[product.id] || 1;
          return (
            <div
              key={product.id}
              className="w-[300px] sm:w-[320px] shrink-0 snap-start bg-[#effdf1] rounded-2xl p-4 border border-[#c0c9c3]/50 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div
                  onClick={() => onOpenQuickView(product)}
                  className="relative bg-white rounded-xl p-3 h-52 flex items-center justify-center overflow-hidden mb-3 cursor-pointer group"
                >
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#1b4d3e] text-white text-[10px] font-bold z-10">
                    {product.tag}
                  </span>
                  <img
                    alt={product.name}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    src={product.image}
                  />
                  <div className="absolute inset-0 bg-[#003629]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-2.5 py-1 bg-white/90 text-[#003629] text-[11px] font-bold rounded-full shadow">
                      Chi tiết
                    </span>
                  </div>
                </div>

                <h4
                  onClick={() => onOpenQuickView(product)}
                  className="font-bold text-[#003629] text-base hover:text-[#1c6c3f] cursor-pointer transition-colors"
                >
                  {product.name}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2 mt-1">{product.description}</p>
                <div className="mt-2 text-xl font-extrabold text-[#1b4d3e]">
                  {product.price.toLocaleString('vi-VN')} VNĐ
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#c0c9c3]/30 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center bg-white rounded-lg border border-gray-300 px-2 py-1">
                    <button
                      className="text-gray-600 font-bold px-1.5 hover:text-black cursor-pointer"
                      onClick={() => updateQty(product.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-2 font-bold text-xs text-center min-w-[20px]">
                      {qty}
                    </span>
                    <button
                      className="text-gray-600 font-bold px-1.5 hover:text-black cursor-pointer"
                      onClick={() => updateQty(product.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="flex-1 py-1.5 px-2 rounded-lg bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] text-xs font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    onClick={() => onAddToCart(product, qty)}
                  >
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                    Thêm Giỏ
                  </button>
                </div>
                <button
                  className="w-full py-2 rounded-lg bg-[#1b4d3e] hover:bg-[#003629] text-white text-xs font-bold transition-colors shadow cursor-pointer"
                  onClick={() => onBuyNow(product, qty)}
                >
                  Mua Ngay
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
