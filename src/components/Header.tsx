import React, { useState } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  viewMode: 'landing' | 'catalog';
  onToggleViewMode: (mode: 'landing' | 'catalog') => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  viewMode,
  onToggleViewMode,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (viewMode === 'catalog' && sectionId !== 'san-pham') {
      onToggleViewMode('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#effdf1]/95 backdrop-blur-md border-b border-[#c0c9c3]/30 shadow-[0_4px_20px_-4px_rgba(27,77,62,0.08)] transition-all duration-300">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo + Badge */}
        <button
          onClick={() => {
            if (viewMode === 'catalog') onToggleViewMode('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group shrink-0 text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-[#1b4d3e] text-[#a5f4bb] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl">eco</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#003629] leading-none">COCONA</span>
            <span className="text-[10px] font-bold text-[#1c6c3f] tracking-widest uppercase mt-0.5">Bến Tre Pure</span>
          </div>
        </button>

        {/* View Mode Switcher pill */}
        <div className="hidden lg:flex items-center p-1 bg-[#e3f1e6] rounded-full border border-[#c0c9c3]/40">
          <button
            onClick={() => onToggleViewMode('landing')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              viewMode === 'landing'
                ? 'bg-[#1b4d3e] text-white shadow-sm'
                : 'text-[#003629] hover:bg-white/60'
            }`}
          >
            Trang Chủ & Câu Chuyện
          </button>
          <button
            onClick={() => onToggleViewMode('catalog')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
              viewMode === 'catalog'
                ? 'bg-[#1b4d3e] text-white shadow-sm'
                : 'text-[#003629] hover:bg-white/60'
            }`}
          >
            <span className="material-symbols-outlined text-sm">tune</span>
            Cửa Hàng Chi Tiết & Bộ Lọc
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('trang-chu')}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'landing' && activeSection === 'trang-chu'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Trang Chủ
          </button>
          <button
            onClick={() => {
              if (viewMode === 'landing') {
                handleNavClick('san-pham');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'catalog' || activeSection === 'san-pham'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Sản Phẩm
          </button>
          <button
            onClick={() => handleNavClick('vung-nguyen-lieu')}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'landing' && activeSection === 'vung-nguyen-lieu'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Vùng Nguyên Liệu
          </button>
          <button
            onClick={() => handleNavClick('cau-chuyen-thuong-hieu')}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'landing' && activeSection === 'cau-chuyen-thuong-hieu'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Câu Chuyện
          </button>
          <button
            onClick={() => handleNavClick('cam-ket-chat-luong')}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'landing' && activeSection === 'cam-ket-chat-luong'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Cam Kết Chất Lượng
          </button>
          <button
            onClick={() => handleNavClick('lien-he-dat-hang')}
            className={`px-3 py-1.5 rounded-full text-xs 2xl:text-sm font-semibold transition-all ${
              viewMode === 'landing' && activeSection === 'lien-he-dat-hang'
                ? 'bg-[#1b4d3e] text-white'
                : 'text-[#121e17] hover:bg-[#1b4d3e] hover:text-white'
            }`}
          >
            Liên Hệ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-full bg-white text-[#003629] hover:bg-[#e3f1e6] transition-colors border border-[#c0c9c3]/40 shadow-sm flex items-center"
            title="Tìm kiếm sản phẩm"
            aria-label="Tìm kiếm"
          >
            <span className="material-symbols-outlined text-lg">search</span>
          </button>

          {/* Hotline */}
          <a
            href="tel:1900xxxx"
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#e3f1e6] text-[#003629] hover:bg-[#1b4d3e] hover:text-white transition-all text-xs font-bold border border-[#c0c9c3]/40"
          >
            <span className="material-symbols-outlined text-sm text-[#1c6c3f]">call</span>
            <span>Hotline: 1900 xxxx</span>
          </a>

          {/* Shopping Cart button with badge */}
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-white text-[#003629] hover:bg-[#e3f1e6] transition-colors border border-[#c0c9c3]/40 shadow-sm flex items-center cursor-pointer"
            title="Xem giỏ hàng"
            aria-label="Giỏ hàng"
          >
            <span className="material-symbols-outlined text-xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#1c6c3f] text-white rounded-full text-[11px] font-bold flex items-center justify-center leading-none animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Quick Buy CTA */}
          <button
            onClick={() => {
              if (cartCount > 0) {
                onOpenCart();
              } else {
                handleNavClick('san-pham');
              }
            }}
            className="hidden sm:inline-flex items-center gap-1 px-4 py-2 rounded-full bg-[#1b4d3e] text-white hover:bg-[#003629] transition-all text-xs font-bold shadow cursor-pointer"
          >
            <span>{cartCount > 0 ? 'Thanh Toán' : 'Mua Nhanh'}</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#003629] hover:bg-[#e3f1e6] transition-colors"
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#c0c9c3]/50 px-4 py-4 space-y-3 shadow-xl">
          {/* Mode switch in mobile */}
          <div className="flex items-center p-1 bg-[#e3f1e6] rounded-xl border border-[#c0c9c3]/40">
            <button
              onClick={() => {
                onToggleViewMode('landing');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all ${
                viewMode === 'landing' ? 'bg-[#1b4d3e] text-white shadow' : 'text-[#003629]'
              }`}
            >
              Trang Chủ & Giới Thiệu
            </button>
            <button
              onClick={() => {
                onToggleViewMode('catalog');
                setMobileMenuOpen(false);
              }}
              className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all ${
                viewMode === 'catalog' ? 'bg-[#1b4d3e] text-white shadow' : 'text-[#003629]'
              }`}
            >
              Cửa Hàng Chi Tiết
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => handleNavClick('trang-chu')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Trang Chủ
            </button>
            <button
              onClick={() => handleNavClick('san-pham')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Sản Phẩm & Giá
            </button>
            <button
              onClick={() => handleNavClick('vung-nguyen-lieu')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Vùng Nguyên Liệu
            </button>
            <button
              onClick={() => handleNavClick('cau-chuyen-thuong-hieu')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Câu Chuyện COCONA
            </button>
            <button
              onClick={() => handleNavClick('cam-ket-chat-luong')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Cam Kết Chất Lượng
            </button>
            <button
              onClick={() => handleNavClick('lien-he-dat-hang')}
              className="text-left px-3 py-2 rounded-lg bg-[#effdf1] text-[#003629] text-xs font-bold"
            >
              Liên Hệ Đặt Hàng
            </button>
          </div>

          <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
            <span className="text-gray-500">Hotline tư vấn 24/7:</span>
            <a href="tel:1900xxxx" className="font-bold text-[#1c6c3f]">
              1900 xxxx - (028) 7300 xxxx
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
