import React from 'react';
import { IMAGES } from '../data/products';

export const BrandStorySection: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-white border-b border-[#c0c9c3]/30"
      id="cau-chuyen-thuong-hieu"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e3f1e6] text-[#1c6c3f] text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">history_edu</span>
              Hành Trình Giữ Trọn Giọt Mật Phù Sa
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003629] leading-tight">
              Câu Chuyện COCONA • Từ Vườn Cây Bến Tre Đến Bàn Ăn
            </h2>
            <p className="text-sm sm:text-base text-[#404945] leading-relaxed">
              COCONA sinh ra từ trăn trở: Làm sao để người tiêu dùng đô thị được uống nước dừa tươi nguyên bản đúng chuẩn như vừa chặt tại gốc – mà không cần phải dùng dừa đun sôi tiệt trùng ở nhiệt độ cao làm mất đi vị thanh dịu và khoáng chất tự nhiên?
            </p>
            <p className="text-sm sm:text-base text-[#404945] leading-relaxed">
              Giải pháp của COCONA là kết hợp công nghệ chiết rót lạnh khép kín, lọc siêu vi 3 cấp độ và chuỗi giao hàng lạnh giữ nhiệt 2°C – 8°C. Chúng tôi tôn trọng nguyên bản tự nhiên, không thêm một hạt đường, không chất bảo quản công nghiệp, và triệt tiêu bao bì nhựa dùng một lần.
            </p>

            {/* 4 Giá trị cốt lõi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#effdf1] border border-[#c0c9c3]/30">
                <span className="material-symbols-outlined text-[#1c6c3f] text-xl mt-0.5">nature</span>
                <div>
                  <h4 className="font-bold text-[#003629] text-xs">1. Thuần Khiết Tự Nhiên</h4>
                  <p className="text-[11px] text-gray-600">Tuyệt đối không pha hương liệu</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#effdf1] border border-[#c0c9c3]/30">
                <span className="material-symbols-outlined text-[#1c6c3f] text-xl mt-0.5">visibility</span>
                <div>
                  <h4 className="font-bold text-[#003629] text-xs">2. Minh Bạch Nguồn Gốc</h4>
                  <p className="text-[11px] text-gray-600">Truy xuất mã lô VietGAP</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#effdf1] border border-[#c0c9c3]/30">
                <span className="material-symbols-outlined text-[#1c6c3f] text-xl mt-0.5">recycling</span>
                <div>
                  <h4 className="font-bold text-[#003629] text-xs">3. Bao Bì Sinh Thái Kraft</h4>
                  <p className="text-[11px] text-gray-600">Quai xách xơ dừa thân thiện</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#effdf1] border border-[#c0c9c3]/30">
                <span className="material-symbols-outlined text-[#1c6c3f] text-xl mt-0.5">favorite</span>
                <div>
                  <h4 className="font-bold text-[#003629] text-xs">4. Đồng Hành Cùng Nông Dân</h4>
                  <p className="text-[11px] text-gray-600">Giá thu mua ổn định bền vững</p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo & Brand Identity Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="bg-[#effdf1] rounded-3xl p-5 sm:p-6 border border-[#c0c9c3]/40 shadow-lg w-full max-w-lg">
              <div className="overflow-hidden rounded-2xl bg-white shadow-inner mb-4 flex items-center justify-center p-2">
                <img
                  alt="Bộ nhận diện thương hiệu COCONA Bến Tre"
                  className="w-full h-auto object-contain max-h-[290px]"
                  src={IMAGES.brandLogoMockup}
                />
              </div>
              <div className="text-center space-y-1">
                <span className="text-xs font-bold text-[#1c6c3f] uppercase tracking-wider block">
                  Hình 1.1 Logo & Bộ Nhận Diện COCONA
                </span>
                <p className="text-xs text-[#404945]">
                  Tone màu xanh rêu nguyên bản (#1B4D3E) biểu trưng cho vườn dừa bạt ngàn, hòa quyện sắc xanh non tươi mát (#1C6C3F) và chất giấy Kraft thủ công mộc mạc của xứ dừa Nam Bộ.
                </p>
              </div>

              {/* Color swatches preview matching the style sheet */}
              <div className="flex items-center justify-center gap-2 mt-4 pt-3 border-t border-[#c0c9c3]/40">
                <div className="flex items-center gap-1.5 text-[11px] text-[#003629] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#1b4d3e] border border-white shadow-xs"></span>
                  <span>#1B4D3E</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#003629] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#1c6c3f] border border-white shadow-xs"></span>
                  <span>#1C6C3F</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#003629] font-medium">
                  <span className="w-4 h-4 rounded-full bg-[#effdf1] border border-gray-300 shadow-xs"></span>
                  <span>#EFFDF1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
