import React from 'react';
import { Product } from '../types';

interface HeroSectionProps {
  showcaseProduct: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onOpenQuickView: (product: Product) => void;
  onOpenCoverage: () => void;
  onScrollToCatalog: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  showcaseProduct,
  onAddToCart,
  onBuyNow,
  onOpenQuickView,
  onOpenCoverage,
  onScrollToCatalog,
}) => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#e9f7ec] via-[#effdf1] to-[#effdf1] py-12 lg:py-20 border-b border-[#c0c9c3]/30"
      id="trang-chu"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dải thông báo Cold-Chain Express */}
        <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-[#003629] text-white flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center font-bold shrink-0">
              <span className="material-symbols-outlined text-xl">ac_unit</span>
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-bold text-[#a5f4bb] uppercase tracking-wide mr-2">
                Chuỗi Lạnh Khép Kín 2°C – 8°C
              </span>
              <span className="text-gray-200">
                Giao hỏa tốc trong 2 giờ nội thành TP.HCM • Đảm bảo độ ngọt thanh và vi chất bù điện giải.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenCoverage}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center gap-1 border border-white/20"
            >
              <span className="material-symbols-outlined text-sm">local_shipping</span>
              <span>Khu Vực Giao</span>
            </button>
            <button
              onClick={onScrollToCatalog}
              className="shrink-0 px-3 py-1.5 rounded-full bg-[#a5f4bb] text-[#003629] font-bold text-xs hover:bg-white transition-colors flex items-center gap-1"
            >
              <span>Khám Phá Menu</span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </button>
          </div>
        </div>

        {/* Banner Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e3f1e6] border border-[#1c6c3f]/30 text-[#1c6c3f] text-xs font-bold tracking-wide uppercase">
              <span className="material-symbols-outlined text-base">verified</span>
              100% Tự Nhiên • Chiết Xuất Từ Dừa Xiêm Tuyển Chọn Bến Tre
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#003629] tracking-tight leading-[1.15]">
              COCONA – Vị Tươi Thuần Khiết Từ Xứ Dừa Bến Tre
            </h1>
            <p className="text-base sm:text-lg text-[#404945] leading-relaxed max-w-2xl">
              Nước dừa tươi đóng chai vô trùng được thu hoạch tươi mới mỗi sáng tại cù lao Bến Tre. Tuyệt đối không đường pha, không chất bảo quản công nghiệp, giữ trọn vẹn khoáng chất Kali và Magie bù điện giải tự nhiên cho cơ thể khỏe khoắn.
            </p>

            {/* 4 Điểm nhấn chính sách */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/80 border border-[#c0c9c3]/40 shadow-sm text-center">
                <span className="material-symbols-outlined text-[#1c6c3f] text-2xl mb-1">spa</span>
                <p className="text-xs font-bold text-[#003629]">100% Nguyên Chất</p>
                <p className="text-[11px] text-gray-500">Không pha đường</p>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#c0c9c3]/40 shadow-sm text-center">
                <span className="material-symbols-outlined text-[#1c6c3f] text-2xl mb-1">block</span>
                <p className="text-xs font-bold text-[#003629]">0% Chất Bảo Quản</p>
                <p className="text-[11px] text-gray-500">An toàn tuyệt đối</p>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#c0c9c3]/40 shadow-sm text-center">
                <span className="material-symbols-outlined text-[#1c6c3f] text-2xl mb-1">ac_unit</span>
                <p className="text-xs font-bold text-[#003629]">Chuỗi Lạnh 2-8°C</p>
                <p className="text-[11px] text-gray-500">Tươi nguyên 7 ngày</p>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-[#c0c9c3]/40 shadow-sm text-center">
                <span className="material-symbols-outlined text-[#1c6c3f] text-2xl mb-1">bolt</span>
                <p className="text-xs font-bold text-[#003629]">Giao Hỏa Tốc 2H</p>
                <p className="text-[11px] text-gray-500">Nội thành TP.HCM</p>
              </div>
            </div>

            {/* Nút hành động CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScrollToCatalog}
                className="px-7 py-3.5 rounded-full bg-[#1b4d3e] hover:bg-[#003629] text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">shopping_cart</span>
                <span>Đặt Hàng Ngay</span>
              </button>
              <a
                href="#vung-nguyen-lieu"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-[#e3f1e6] text-[#003629] font-bold text-sm sm:text-base border border-[#c0c9c3]/60 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-xl text-[#1c6c3f]">nature_people</span>
                <span>Khám Phá Vùng Trồng</span>
              </a>
            </div>
          </div>

          {/* Hero Showcase Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border-4 border-[#e3f1e6] group">
              <div className="absolute -top-3 -right-3 bg-[#1c6c3f] text-white text-xs font-black uppercase px-3 py-1.5 rounded-full shadow z-10">
                Best Seller #1
              </div>

              <div
                onClick={() => onOpenQuickView(showcaseProduct)}
                className="cursor-pointer overflow-hidden rounded-2xl relative"
              >
                <img
                  alt="COCONA Classic Nước Dừa Tươi Bến Tre"
                  className="w-full h-auto max-h-[380px] object-contain mx-auto group-hover:scale-105 transition-transform duration-500"
                  src={showcaseProduct.image}
                />
                <div className="absolute inset-0 bg-[#003629]/0 group-hover:bg-[#003629]/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1.5 rounded-full bg-white/90 text-[#003629] text-xs font-bold shadow flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">visibility</span>
                    Xem chi tiết
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e3f1e6] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#003629] text-base">{showcaseProduct.name}</h3>
                  <p className="text-xs text-gray-500">{showcaseProduct.subtitle}</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-[#1b4d3e]">
                    {showcaseProduct.price.toLocaleString('vi-VN')}đ
                  </span>
                  <p className="text-[11px] text-[#1c6c3f] font-semibold">{showcaseProduct.certBadge}</p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-[#e3f1e6] flex items-center gap-2">
                <button
                  onClick={() => onAddToCart(showcaseProduct, 1)}
                  className="flex-1 py-2 rounded-xl bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                  <span>Thêm Giỏ Hàng</span>
                </button>
                <button
                  onClick={() => onBuyNow(showcaseProduct, 1)}
                  className="flex-1 py-2 rounded-xl bg-[#1b4d3e] hover:bg-[#003629] text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow"
                >
                  <span className="material-symbols-outlined text-sm">bolt</span>
                  <span>Mua Ngay</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
