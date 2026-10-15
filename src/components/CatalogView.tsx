import React, { useState, useMemo } from 'react';
import { Product } from '../types';

interface CatalogViewProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onOpenQuickView: (product: Product) => void;
  onOpenCoverage: () => void;
  onBackToHome: () => void;
  onSubmitSubscription: (name: string, phone: string) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  onAddToCart,
  onBuyNow,
  onOpenQuickView,
  onOpenCoverage,
  onBackToHome,
  onSubmitSubscription,
}) => {
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');
  const [priceFilters, setPriceFilters] = useState<string[]>(['under40', '40to70', 'over100']);
  const [standardFilters, setStandardFilters] = useState({
    pure100: true,
    organic: false,
    vietgap: false,
    ecoPackaging: false,
  });
  const [sortOption, setSortOption] = useState<string>('default');

  // Quantities per product
  const [quantities, setQuantities] = useState<Record<string, number>>({
    'cocona-classic': 1,
    'cocona-plus': 1,
    'cocona-family': 1,
    'cocona-combo': 1,
    'cocona-limited': 1,
  });

  // Subscription inputs
  const [subName, setSubName] = useState('');
  const [subPhone, setSubPhone] = useState('');

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handlePriceToggle = (range: string) => {
    setPriceFilters((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedCapacity('all');
    setPriceFilters(['under40', '40to70', 'over100']);
    setStandardFilters({
      pure100: true,
      organic: false,
      vietgap: false,
      ecoPackaging: false,
    });
    setSortOption('default');
  };

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Capacity filter
      if (selectedCapacity !== 'all') {
        if (selectedCapacity === '500ml' && p.capacityType !== '500ml') return false;
        if (selectedCapacity === '1000ml' && p.capacityType !== '1000ml') return false;
        if (selectedCapacity === 'combo' && p.capacityType !== 'combo') return false;
      }
      // Price range filter
      if (priceFilters.length > 0 && !priceFilters.includes(p.priceRange)) {
        return false;
      }
      // Standards filter
      if (standardFilters.organic && !p.isOrganic) {
        return false;
      }
      if (standardFilters.vietgap && !p.isVietgap) {
        return false;
      }
      if (standardFilters.ecoPackaging && !p.isEcoPackaging) {
        return false;
      }
      return true;
    });

    // Sorting
    if (sortOption === 'price-asc') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'bestseller') {
      // Combo or Classic first
      result = [...result].sort((a, b) => (b.category === 'combo' || b.category === 'classic' ? 1 : -1));
    }

    return result;
  }, [products, selectedCategory, selectedCapacity, priceFilters, standardFilters, sortOption]);

  const handleSubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subPhone.trim()) return;
    onSubmitSubscription(subName || 'Quý khách', subPhone);
    setSubName('');
    setSubPhone('');
  };

  return (
    <div className="w-full bg-[#effdf1] pt-6 pb-20">
      {/* Banner Ưu Đãi & Chuỗi Lạnh 2H */}
      <section className="w-full bg-[#e3f1e6] py-4 mb-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#003629] text-white rounded-2xl p-4 lg:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">ac_unit</span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#1c6c3f] text-white uppercase font-bold">
                    Cold-Chain Express
                  </span>
                  <span className="text-xs text-[#9ed1bd]">Nhiệt độ tối ưu 2°C – 8°C</span>
                </div>
                <h2 className="text-xl font-bold mt-1 text-white">
                  Giao Hàng Lạnh Hỏa Tốc Trong 2 Giờ
                </h2>
                <p className="text-xs sm:text-sm text-[#9ed1bd] mt-0.5">
                  Thùng giữ nhiệt chân không đảm bảo độ tươi thuần khiết và vi chất bù điện giải tự nhiên đến tận tay bạn.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-between md:justify-end">
              <div className="hidden xl:flex flex-col text-right pr-4">
                <span className="text-xs text-[#a5f4bb] font-semibold">Freeship nội thành TP.HCM</span>
                <span className="text-sm font-bold">Đơn từ 150.000 VNĐ</span>
              </div>
              <button
                onClick={onOpenCoverage}
                className="w-full md:w-auto px-4 py-2 rounded-full bg-[#a5f4bb] text-[#003629] font-bold text-xs sm:text-sm hover:bg-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">local_shipping</span>
                <span>Tra Cứu Khu Vực</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tiêu Đề Danh Mục & Breadcrumb */}
      <section className="w-full pb-6">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#404945] uppercase tracking-wider mb-1">
                <button
                  onClick={onBackToHome}
                  className="hover:text-[#003629] transition-colors cursor-pointer"
                >
                  Trang chủ
                </button>
                <span>/</span>
                <span className="text-[#003629] font-bold">Sản Phẩm COCONA</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#003629] tracking-tight">
                Danh Mục Nước Dừa Tươi
              </h1>
              <p className="text-sm sm:text-base text-[#404945] mt-1 max-w-2xl">
                Chiết xuất trực tiếp từ những trái dừa tuyển chọn tại Bến Tre. Tự nhiên 100%, không chất bảo quản công nghiệp, giàu khoáng vi lượng bù điện giải nhanh chóng.
              </p>
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="px-3 py-1.5 rounded-full bg-[#e3f1e6] text-xs font-bold text-[#1c6c3f] flex items-center gap-1 border border-[#c0c9c3]/40">
                <span className="material-symbols-outlined text-sm">verified</span>
                5 Dòng Sản Phẩm Sẵn Sàng
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Nội Dung Chính: Sidebar Filter + Product Grid */}
      <section className="w-full pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* SIDEBAR FILTERS (3-4 Cột) */}
            <aside className="lg:col-span-4 xl:col-span-3">
              <div className="bg-white rounded-2xl p-5 space-y-6 shadow-sm border border-[#c0c9c3]/40 sticky top-24">
                <div className="flex items-center justify-between pb-2 border-b border-[#e3f1e6]">
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[#1c6c3f]">tune</span>
                    <span className="font-bold text-base text-[#003629]">Bộ Lọc Tìm Kiếm</span>
                  </div>
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#404945] hover:text-[#1c6c3f] underline font-medium cursor-pointer"
                  >
                    Đặt lại
                  </button>
                </div>

                {/* Danh Mục Dòng Sản Phẩm */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#003629] block uppercase tracking-wider">
                    Dòng Sản Phẩm
                  </span>
                  <div className="space-y-1">
                    {[
                      { id: 'all', label: 'Tất cả sản phẩm', count: 5 },
                      { id: 'classic', label: 'COCONA Classic (Cốt lõi)', count: 1 },
                      { id: 'plus', label: 'COCONA Plus (Nha đam)', count: 1 },
                      { id: 'family', label: 'COCONA Gia Đình (1 Lít)', count: 1 },
                      { id: 'combo', label: 'Combo Set Giấy Kraft', count: 1 },
                      { id: 'limited', label: 'Premium Limited Edition', count: 1 },
                    ].map((cat) => (
                      <label
                        key={cat.id}
                        className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition-colors ${
                          selectedCategory === cat.id
                            ? 'bg-[#e9f7ec] text-[#003629] font-bold'
                            : 'hover:bg-[#f2fbf4] text-[#404945]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === cat.id}
                            onChange={() => setSelectedCategory(cat.id)}
                            className="accent-[#1c6c3f] w-3.5 h-3.5 cursor-pointer"
                          />
                          <span>{cat.label}</span>
                        </div>
                        <span className="text-[11px] text-gray-500">{cat.count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Dung Tích Đóng Hộp */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#003629] block uppercase tracking-wider">
                    Dung Tích Đóng Hộp
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCapacity(selectedCapacity === '500ml' ? 'all' : '500ml')
                      }
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-colors cursor-pointer ${
                        selectedCapacity === '500ml'
                          ? 'bg-[#003629] text-white shadow-sm'
                          : 'bg-[#e3f1e6] text-[#003629] hover:bg-[#c0c9c3]'
                      }`}
                    >
                      500 ml
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCapacity(selectedCapacity === '1000ml' ? 'all' : '1000ml')
                      }
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-colors cursor-pointer ${
                        selectedCapacity === '1000ml'
                          ? 'bg-[#003629] text-white shadow-sm'
                          : 'bg-[#e3f1e6] text-[#003629] hover:bg-[#c0c9c3]'
                      }`}
                    >
                      1 Lít (1000ml)
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedCapacity(selectedCapacity === 'combo' ? 'all' : 'combo')
                      }
                      className={`col-span-2 py-2 px-2.5 rounded-xl text-xs font-bold text-center transition-colors cursor-pointer ${
                        selectedCapacity === 'combo'
                          ? 'bg-[#003629] text-white shadow-sm'
                          : 'bg-[#e3f1e6] text-[#003629] hover:bg-[#c0c9c3]'
                      }`}
                    >
                      Set 4 Hộp (4 x 500ml)
                    </button>
                  </div>
                </div>

                {/* Mức Giá */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#003629] block uppercase tracking-wider">
                    Mức Giá
                  </span>
                  <div className="space-y-1.5 text-xs text-[#404945]">
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={priceFilters.includes('under40')}
                        onChange={() => handlePriceToggle('under40')}
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span>Dưới 40.000 VNĐ</span>
                    </label>
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={priceFilters.includes('40to70')}
                        onChange={() => handlePriceToggle('40to70')}
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span>40.000đ – 70.000 VNĐ</span>
                    </label>
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={priceFilters.includes('over100')}
                        onChange={() => handlePriceToggle('over100')}
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span>Trên 100.000 VNĐ</span>
                    </label>
                  </div>
                </div>

                {/* Tiêu Chuẩn Nông Nghiệp Xanh */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#003629] block uppercase tracking-wider">
                    Tiêu Chuẩn & Thành Phần
                  </span>
                  <div className="space-y-1.5 text-xs text-[#404945]">
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={standardFilters.pure100}
                        onChange={(e) =>
                          setStandardFilters({ ...standardFilters, pure100: e.target.checked })
                        }
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1c6c3f]">eco</span>
                        100% Nước Dừa Tươi
                      </span>
                    </label>
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={standardFilters.organic}
                        onChange={(e) =>
                          setStandardFilters({ ...standardFilters, organic: e.target.checked })
                        }
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1c6c3f]">spa</span>
                        100% Organic USDA
                      </span>
                    </label>
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={standardFilters.vietgap}
                        onChange={(e) =>
                          setStandardFilters({ ...standardFilters, vietgap: e.target.checked })
                        }
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1c6c3f]">
                          verified
                        </span>
                        Chứng nhận VietGAP
                      </span>
                    </label>
                    <label className="flex items-center gap-2 p-1 rounded hover:bg-[#e9f7ec] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={standardFilters.ecoPackaging}
                        onChange={(e) =>
                          setStandardFilters({ ...standardFilters, ecoPackaging: e.target.checked })
                        }
                        className="accent-[#1c6c3f] rounded w-3.5 h-3.5 cursor-pointer"
                      />
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm text-[#1c6c3f]">
                          recycling
                        </span>
                        Bao bì Kraft thân thiện
                      </span>
                    </label>
                  </div>
                </div>

                {/* Khung Hỗ Trợ Nhiệt Độ */}
                <div className="p-3.5 rounded-xl bg-[#deece0] space-y-1">
                  <div className="flex items-center gap-1 text-[#1c6c3f] text-xs font-bold">
                    <span className="material-symbols-outlined text-base">thermostat</span>
                    <span>Yêu Cầu Bảo Quản</span>
                  </div>
                  <p className="text-xs text-[#404945] leading-relaxed">
                    Luôn giữ lạnh 2°C – 8°C. Không tiếp xúc trực tiếp ánh nắng gắt để duy trì chất khoáng tự nhiên.
                  </p>
                </div>
              </div>
            </aside>

            {/* PRODUCT LIST (8-9 Cột) */}
            <main className="lg:col-span-8 xl:col-span-9 space-y-6">
              {/* Thanh điều khiển sắp xếp */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3.5 rounded-2xl shadow-sm border border-[#c0c9c3]/30">
                <span className="text-xs text-[#404945]">
                  Hiển thị <strong className="text-[#003629] font-bold">{filteredProducts.length}</strong> sản phẩm tươi mới thu hoạch
                </span>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <span className="text-xs text-[#404945] font-semibold">Sắp xếp:</span>
                  <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="bg-[#e3f1e6] text-[#003629] text-xs font-semibold px-3 py-1.5 rounded-xl focus:outline-none focus:bg-[#deece0] cursor-pointer"
                  >
                    <option value="default">Đề xuất cho bạn (Mặc định)</option>
                    <option value="price-asc">Giá tăng dần</option>
                    <option value="price-desc">Giá giảm dần</option>
                    <option value="bestseller">Bán chạy nhất (Combo)</option>
                  </select>
                </div>
              </div>

              {/* Lưới sản phẩm */}
              {filteredProducts.length === 0 ? (
                <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-[#c0c9c3] space-y-3">
                  <span className="material-symbols-outlined text-4xl text-gray-400">inventory_2</span>
                  <p className="text-sm font-bold text-[#003629]">
                    Không tìm thấy sản phẩm phù hợp với bộ lọc hiện tại.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-[#1b4d3e] text-white text-xs font-bold rounded-full shadow hover:bg-[#003629] cursor-pointer"
                  >
                    Đặt lại bộ lọc
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-6">
                  {filteredProducts.map((product) => {
                    const qty = quantities[product.id] || 1;
                    return (
                      <article
                        key={product.id}
                        className={`bg-white rounded-2xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all border ${
                          product.id === 'cocona-limited'
                            ? 'border-2 border-[#003629]/30'
                            : 'border-[#c0c9c3]/30'
                        } flex flex-col lg:flex-row gap-6 group`}
                      >
                        <div
                          onClick={() => onOpenQuickView(product)}
                          className="relative w-full lg:w-2/5 h-64 lg:h-72 rounded-xl bg-[#e9f7ec] overflow-hidden flex items-center justify-center shrink-0 cursor-pointer"
                        >
                          <img
                            alt={product.name}
                            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                            src={product.image}
                          />
                          <div className="absolute top-2 left-2 flex flex-col gap-1">
                            <span className="text-[11px] px-2.5 py-1 rounded-full bg-[#1b4d3e] text-white font-semibold shadow-sm">
                              {product.badgeCategory}
                            </span>
                            {product.certBadge && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#a5f4bb] text-[#003629] font-medium">
                                {product.certBadge}
                              </span>
                            )}
                          </div>
                          <span className="absolute bottom-2 right-2 text-xs px-2.5 py-1 rounded-full bg-[#d8e6db] text-[#003629] font-bold">
                            {product.volume}
                          </span>
                        </div>

                        <div className="flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-1.5 text-[#1c6c3f] text-xs font-bold">
                              <span className="material-symbols-outlined text-base">water_drop</span>
                              <span>{product.subtitle}</span>
                            </div>

                            <h2
                              onClick={() => onOpenQuickView(product)}
                              className="text-xl sm:text-2xl font-bold text-[#003629] group-hover:text-[#1c6c3f] transition-colors cursor-pointer"
                            >
                              {product.name}
                            </h2>

                            <p className="text-sm text-[#404945] leading-relaxed">
                              {product.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1 text-xs">
                              <span className="px-2.5 py-1 rounded-full bg-[#e3f1e6] text-[#1c6c3f] font-semibold flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">ac_unit</span>
                                Bảo quản lạnh {product.storageTemp}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-[#e3f1e6] text-[#404945]">
                                HSD: {product.shelfLife}
                              </span>
                              <span className="px-2.5 py-1 rounded-full bg-[#e3f1e6] text-[#404945]">
                                {product.packaging}
                              </span>
                            </div>
                          </div>

                          <div className="pt-3 border-t border-[#c0c9c3]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex flex-col">
                              {product.originalPrice && (
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-400 line-through">
                                    {product.originalPrice.toLocaleString('vi-VN')} đ
                                  </span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#a5f4bb] text-[#003629] font-bold">
                                    Ưu đãi Combo -15%
                                  </span>
                                </div>
                              )}
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-2xl sm:text-3xl font-extrabold text-[#003629]">
                                  {product.price.toLocaleString('vi-VN')}
                                </span>
                                <span className="text-xs font-bold text-gray-500">
                                  VNĐ / {product.id === 'cocona-combo' ? 'set 4 hộp' : product.volume}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                              <div className="flex items-center justify-between bg-[#effdf1] rounded-full p-1 border border-gray-300 shrink-0">
                                <button
                                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#003629] hover:bg-gray-100 transition-colors font-bold shadow-xs cursor-pointer"
                                  type="button"
                                  onClick={() => updateQty(product.id, -1)}
                                >
                                  -
                                </button>
                                <span className="w-7 text-center text-xs text-[#003629] font-bold">
                                  {qty}
                                </span>
                                <button
                                  className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#003629] hover:bg-gray-100 transition-colors font-bold shadow-xs cursor-pointer"
                                  type="button"
                                  onClick={() => updateQty(product.id, 1)}
                                >
                                  +
                                </button>
                              </div>

                              <button
                                onClick={() => onAddToCart(product, qty)}
                                className="px-4 py-2.5 rounded-full bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-base">
                                  add_shopping_cart
                                </span>
                                <span>Thêm Giỏ</span>
                              </button>

                              <button
                                onClick={() => onBuyNow(product, qty)}
                                className="px-5 py-2.5 rounded-full bg-[#1b4d3e] hover:bg-[#003629] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow cursor-pointer"
                                type="button"
                              >
                                <span className="material-symbols-outlined text-base">bolt</span>
                                <span>Mua Ngay</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Bảng So Sánh Thông Số & Hướng Dẫn Bảo Quản */}
      <section className="w-full bg-[#e9f7ec] py-16 border-t border-b border-[#c0c9c3]/30">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold text-[#1c6c3f] uppercase tracking-widest">
              Minh Bạch Tiêu Chuẩn
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003629]">
              Bảng So Sánh Các Dòng Sản Phẩm COCONA
            </h2>
            <p className="text-xs sm:text-sm text-[#404945]">
              Tất cả sản phẩm đều tuân thủ cam kết 0% chất bảo quản – 0% hương liệu nhân tạo.
            </p>
          </div>

          {/* Bảng Thông Số Responsive */}
          <div className="bg-white rounded-2xl shadow-sm overflow-x-auto border border-[#c0c9c3]/40">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#e3f1e6] text-[#003629] font-bold">
                  <th className="p-3.5 sm:p-4">Dòng Sản Phẩm</th>
                  <th className="p-3.5 sm:p-4">Dung Tích</th>
                  <th className="p-3.5 sm:p-4">Thành Phần Chính</th>
                  <th className="p-3.5 sm:p-4">Quy Cách Đóng Gói</th>
                  <th className="p-3.5 sm:p-4">Hạn Sử Dụng</th>
                  <th className="p-3.5 sm:p-4 text-right">Đơn Giá</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-[#effdf1] transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-[#003629]">1. COCONA Classic</td>
                  <td className="p-3.5 sm:p-4">500 ml</td>
                  <td className="p-3.5 sm:p-4">100% Nước dừa tươi Bến Tre</td>
                  <td className="p-3.5 sm:p-4">Hộp tiệt trùng Tetra Pak</td>
                  <td className="p-3.5 sm:p-4">7 ngày (Lạnh 2-8°C)</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1b4d3e] text-right">34.900đ</td>
                </tr>
                <tr className="hover:bg-[#effdf1] transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-[#003629]">2. COCONA Plus</td>
                  <td className="p-3.5 sm:p-4">500 ml</td>
                  <td className="p-3.5 sm:p-4">85% Nước dừa + 15% Thạch nha đam</td>
                  <td className="p-3.5 sm:p-4">Hộp tiệt trùng nắp vặn</td>
                  <td className="p-3.5 sm:p-4">7 ngày (Lạnh 2-8°C)</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1b4d3e] text-right">39.900đ</td>
                </tr>
                <tr className="hover:bg-[#effdf1] transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-[#003629]">3. COCONA Gia Đình</td>
                  <td className="p-3.5 sm:p-4">1.000 ml (1 Lít)</td>
                  <td className="p-3.5 sm:p-4">100% Nước dừa tươi Bến Tre</td>
                  <td className="p-3.5 sm:p-4">Hộp lớn nắp rót chống trào</td>
                  <td className="p-3.5 sm:p-4">7 ngày (Lạnh 2-8°C)</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1b4d3e] text-right">59.900đ</td>
                </tr>
                <tr className="hover:bg-[#effdf1] transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-[#003629]">4. COCONA Combo Set</td>
                  <td className="p-3.5 sm:p-4">4 x 500 ml (2 Lít)</td>
                  <td className="p-3.5 sm:p-4">4 Hộp COCONA Classic nguyên chất</td>
                  <td className="p-3.5 sm:p-4">Thùng Kraft xách tay sinh thái</td>
                  <td className="p-3.5 sm:p-4">7 ngày (Lạnh 2-8°C)</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1b4d3e] text-right">119.000đ</td>
                </tr>
                <tr className="hover:bg-[#effdf1] transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-[#003629]">5. COCONA Premium Limited</td>
                  <td className="p-3.5 sm:p-4">500 ml</td>
                  <td className="p-3.5 sm:p-4">100% Dừa Organic lọc 3 tầng</td>
                  <td className="p-3.5 sm:p-4">Hộp đen ép kim + Túi xách giấy Kraft</td>
                  <td className="p-3.5 sm:p-4">7 ngày (Lạnh 2-8°C)</td>
                  <td className="p-3.5 sm:p-4 font-extrabold text-[#1b4d3e] text-right">65.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3 Cột Hướng Dẫn & Cam Kết Bảo Quản */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-white p-5 rounded-2xl space-y-2 shadow-sm border border-[#c0c9c3]/30">
              <div className="w-10 h-10 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">ac_unit</span>
              </div>
              <h3 className="font-bold text-base text-[#003629]">1. Duy Trì Nhiệt Độ 2°C – 8°C</h3>
              <p className="text-xs text-[#404945] leading-relaxed">
                Do hoàn toàn không dùng chất bảo quản hóa học, nước dừa phải luôn được bảo quản ở ngăn mát tủ lạnh ngay sau khi nhận hàng để giữ trọn vị thanh ngọt.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl space-y-2 shadow-sm border border-[#c0c9c3]/30">
              <div className="w-10 h-10 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">timer</span>
              </div>
              <h3 className="font-bold text-base text-[#003629]">2. Sử Dụng Tốt Nhất Trong 24H</h3>
              <p className="text-xs text-[#404945] leading-relaxed">
                Sau khi mở nắp hộp, nên uống hết trong vòng 24 giờ. Đậy kín nắp nếu chưa dùng hết và bảo quản đứng trong ngăn mát tủ lạnh.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl space-y-2 shadow-sm border border-[#c0c9c3]/30">
              <div className="w-10 h-10 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">swap_horiz</span>
              </div>
              <h3 className="font-bold text-base text-[#003629]">3. Cam Kết Đổi Trả 100%</h3>
              <p className="text-xs text-[#404945] leading-relaxed">
                Hoàn tiền hoặc đổi sản phẩm mới ngay lập tức nếu khi nhận hàng thùng không đủ lạnh, tem niêm phong rách hoặc hộp có hiện tượng rò rỉ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Băng Thông Tin Nguồn Gốc Bến Tre & Đăng Ký Thuê Bao Uống Tuần */}
      <section className="w-full py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1b4d3e] text-white rounded-3xl p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#a5f4bb] text-[#003629] text-xs font-bold">
                <span className="material-symbols-outlined text-sm">cached</span>
                <span>Gói Định Kỳ COCONA SUBSCRIPTION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Đặt Nước Dừa Định Kỳ Mỗi Sáng
              </h2>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Tiết kiệm thêm 15% cùng dịch vụ giao hàng chu kỳ vào khung giờ 6:30 - 8:30 sáng mỗi ngày. Bù khoáng tự nhiên khởi đầu ngày làm việc tràn đầy sức sống.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#baeed9]">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Hủy hoặc đổi lịch bất cứ lúc nào</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#baeed9]">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Tặng 1 túi Kraft cao cấp</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-[#121e17] p-6 rounded-2xl w-full lg:w-96 shadow-lg shrink-0 space-y-3">
              <span className="text-lg font-bold text-[#003629] block">
                Tư Vấn Gói Uống Tuần
              </span>
              <p className="text-xs text-[#404945]">
                Để lại số điện thoại, nhân viên COCONA sẽ thiết kế gói uống phù hợp với gia đình bạn.
              </p>
              <form className="space-y-3" onSubmit={handleSubSubmit}>
                <input
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#e9f7ec] text-xs focus:outline-none focus:ring-1 focus:ring-[#1b4d3e]"
                  placeholder="Họ và tên của bạn"
                  type="text"
                  value={subName}
                  onChange={(e) => setSubName(e.target.value)}
                />
                <input
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#e9f7ec] text-xs focus:outline-none focus:ring-1 focus:ring-[#1b4d3e]"
                  placeholder="Số điện thoại nhận tư vấn *"
                  type="tel"
                  required
                  value={subPhone}
                  onChange={(e) => setSubPhone(e.target.value)}
                />
                <button
                  className="w-full py-2.5 px-4 rounded-xl bg-[#003629] text-white hover:bg-[#1c6c3f] transition-colors text-xs font-bold flex items-center justify-center gap-1 shadow cursor-pointer"
                  type="submit"
                >
                  <span>Đăng Ký Tư Vấn Miễn Phí</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </button>
              </form>
              <span className="text-[11px] text-gray-400 text-center block">
                Bảo mật thông tin khách hàng tuyệt đối.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
