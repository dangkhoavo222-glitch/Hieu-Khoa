import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './data/products';
import { Product, CartItem, ToastMessage } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CarouselSection } from './components/CarouselSection';
import { VerticalProductList } from './components/VerticalProductList';
import { CatalogView } from './components/CatalogView';
import { OriginSection } from './components/OriginSection';
import { BrandStorySection } from './components/BrandStorySection';
import { CommitmentSection } from './components/CommitmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { CoverageModal } from './components/CoverageModal';
import { SearchModal } from './components/SearchModal';
import { FloatingTOC } from './components/FloatingTOC';
import { Toast } from './components/Toast';

export default function App() {
  const [viewMode, setViewMode] = useState<'landing' | 'catalog'>('landing');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState<string>('trang-chu');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCoverageOpen, setIsCoverageOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState<{
    name: string;
    phone: string;
    address: string;
    total: number;
    orderId: string;
  } | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cocona_cart');
      if (saved) {
        setCartItems(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cocona_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Section observer for Landing page
  useEffect(() => {
    if (viewMode !== 'landing') return;

    const sectionIds = [
      'trang-chu',
      'san-pham',
      'vung-nguyen-lieu',
      'cau-chuyen-thuong-hieu',
      'cam-ket-chat-luong',
      'lien-he-dat-hang',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  const addToast = (title: string, desc: string, type: 'success' | 'info' | 'cart' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, desc, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    const formattedTotal = (product.price * quantity).toLocaleString('vi-VN');
    addToast(
      'Đã Thêm Vào Giỏ Hàng!',
      `${quantity}x ${product.name} (${formattedTotal} VNĐ)`,
      'cart'
    );
  };

  const handleBuyNow = (product: Product, quantity: number = 1) => {
    handleAddToCart(product, quantity);
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Đã Xóa Sản Phẩm', 'Sản phẩm đã được gỡ khỏi giỏ hàng.', 'info');
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleCheckoutComplete = (orderInfo: {
    name: string;
    phone: string;
    address: string;
    total: number;
  }) => {
    const orderId = `CCN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderConfirmation({
      ...orderInfo,
      orderId,
    });
    addToast(
      'Đặt Hàng Thành Công!',
      `Đơn hàng #${orderId} của ${orderInfo.name} đang được chuẩn bị đóng thùng lạnh.`,
      'success'
    );
  };

  const handleContactSubmit = (data: { name: string; phone: string; packageType: string }) => {
    addToast(
      'Đã Gửi Thành Công!',
      `COCONA sẽ liên hệ ${data.name} qua SĐT ${data.phone} trong vòng 15 phút.`,
      'success'
    );
  };

  const handleSubscriptionSubmit = (name: string, phone: string) => {
    addToast(
      'Đăng Ký Thành Công!',
      `Cảm ơn ${name}! Chuyên viên COCONA sẽ gọi đến ${phone} để kích hoạt ưu đãi gói tuần -15%.`,
      'success'
    );
  };

  const handleNewsletterSubmit = (email: string) => {
    addToast(
      'Đăng Ký Nhận Bản Tin!',
      `Cảm ơn bạn! Mã giảm giá 10% mùa dừa mới đã được gửi tới ${email}.`,
      'success'
    );
  };

  const handleNavigate = (sectionId: string) => {
    if (viewMode === 'catalog' && sectionId !== 'san-pham') {
      setViewMode('landing');
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

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#effdf1] text-[#121e17] flex flex-col font-sans selection:bg-[#a5f4bb] selection:text-[#003629]">
      {/* 1. Header Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        viewMode={viewMode}
        onToggleViewMode={(mode) => {
          setViewMode(mode);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main Content */}
      <main className="w-full flex-1">
        {viewMode === 'landing' ? (
          <div>
            {/* Hero Section */}
            <HeroSection
              showcaseProduct={PRODUCTS[0]}
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              onOpenQuickView={(p) => setQuickViewProduct(p)}
              onOpenCoverage={() => setIsCoverageOpen(true)}
              onScrollToCatalog={() => {
                const el = document.getElementById('san-pham');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Product Store Section with Horizontal Carousel & Vertical List */}
            <section className="py-16 lg:py-24 bg-white border-b border-[#c0c9c3]/30" id="san-pham">
              <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e3f1e6] pb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1c6c3f] mb-1">
                      <span className="material-symbols-outlined text-sm">storefront</span>
                      Cửa Hàng Trực Tuyến COCONA
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003629]">
                      Danh Mục Sản Phẩm Nước Dừa Tươi
                    </h2>
                    <p className="text-sm sm:text-base text-[#404945] mt-1 max-w-2xl">
                      Đúng giá niêm yết • Lướt xem qua lại hoặc lướt lên xuống tiện lợi • Đặt mua và thêm giỏ hàng trực tiếp ngay trên mỗi sản phẩm!
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setViewMode('catalog')}
                      className="px-3.5 py-1.5 rounded-full bg-[#1b4d3e] text-white hover:bg-[#003629] font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm">tune</span>
                      <span>Chế Độ Lọc & Bảng So Sánh</span>
                    </button>
                    <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-[#e3f1e6] text-[#003629] font-bold text-xs items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-[#1c6c3f]">inventory_2</span>
                      5 Dòng Sản Phẩm Sẵn Có
                    </span>
                  </div>
                </div>

                {/* A) BĂNG CHUYỀN LƯỚT NGANG (Horizontal Scroll Carousel) */}
                <CarouselSection
                  products={PRODUCTS}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                  onOpenQuickView={(p) => setQuickViewProduct(p)}
                />

                {/* B) LƯỚT DỌC CHI TIẾT & ĐẶT TRỰC TIẾP (Vertical Scroll View) */}
                <VerticalProductList
                  products={PRODUCTS}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                  onOpenQuickView={(p) => setQuickViewProduct(p)}
                  onOpenCatalogView={() => setViewMode('catalog')}
                />
              </div>
            </section>

            {/* Vùng Nguyên Liệu Bến Tre */}
            <OriginSection />

            {/* Câu Chuyện Thương Hiệu */}
            <BrandStorySection />

            {/* Cam Kết Chất Lượng */}
            <CommitmentSection
              onFeedbackClick={() => {
                const el = document.getElementById('lien-he-dat-hang');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* Liên Hệ & Tư Vấn Đặt Hàng */}
            <ContactSection onSubmitSuccess={handleContactSubmit} />
          </div>
        ) : (
          /* Catalog Screen (Screen 2: Full Filterable Store & Comparison Table) */
          <CatalogView
            products={PRODUCTS}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onOpenQuickView={(p) => setQuickViewProduct(p)}
            onOpenCoverage={() => setIsCoverageOpen(true)}
            onBackToHome={() => setViewMode('landing')}
            onSubmitSubscription={handleSubscriptionSubmit}
          />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSubscribeNews={handleNewsletterSubmit}
      />

      {/* 4. Floating Quick Jump TOC (Mục lục tự động nổi) */}
      {viewMode === 'landing' && (
        <FloatingTOC
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      )}

      {/* 5. Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onCheckoutComplete={handleCheckoutComplete}
      />

      {/* 6. Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* 7. Coverage Zone Modal */}
      <CoverageModal
        isOpen={isCoverageOpen}
        onClose={() => setIsCoverageOpen(false)}
      />

      {/* 8. Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => setQuickViewProduct(p)}
      />

      {/* 9. Order Confirmation Modal */}
      {orderConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
            onClick={() => setOrderConfirmation(null)}
          />
          <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl text-center space-y-4 z-10 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#003629]">
              Đặt Hàng Thành Công!
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Mã đơn hàng: <strong className="text-[#1b4d3e] font-mono">{orderConfirmation.orderId}</strong>
              <br />
              Đơn hàng của quý khách <strong>{orderConfirmation.name}</strong> ({orderConfirmation.phone}) đã được chuyển tới trung tâm kho lạnh phân phối.
            </p>

            <div className="p-3 bg-[#effdf1] rounded-2xl border border-[#c0c9c3]/30 text-xs text-left space-y-1">
              <div>📍 <strong>Địa chỉ giao:</strong> {orderConfirmation.address}</div>
              <div>❄️ <strong>Nhiệt độ giao:</strong> Chuỗi lạnh khép kín 2°C – 8°C</div>
              <div>💰 <strong>Tổng thanh toán:</strong> {orderConfirmation.total.toLocaleString('vi-VN')} VNĐ</div>
            </div>

            <button
              onClick={() => setOrderConfirmation(null)}
              className="w-full py-3 rounded-xl bg-[#1b4d3e] text-white font-bold text-xs hover:bg-[#003629] transition-colors cursor-pointer shadow"
            >
              Hoàn Tất & Tiếp Tục Mua Sắm
            </button>
          </div>
        </div>
      )}

      {/* 10. Toast Notification Stack */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
