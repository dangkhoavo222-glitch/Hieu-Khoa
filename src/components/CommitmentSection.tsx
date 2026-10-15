import React from 'react';

interface CommitmentSectionProps {
  onFeedbackClick: () => void;
}

export const CommitmentSection: React.FC<CommitmentSectionProps> = ({ onFeedbackClick }) => {
  return (
    <section
      className="py-16 lg:py-24 bg-[#effdf1] border-b border-[#c0c9c3]/30"
      id="cam-ket-chat-luong"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e3f1e6] border border-[#1c6c3f]/30 text-[#1c6c3f] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">security</span>
            Tiêu Chuẩn Vệ Sinh An Toàn Thực Phẩm
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003629]">
            4 Cam Kết Vàng Về Tiêu Chuẩn & Chất Lượng COCONA
          </h2>
          <p className="text-sm sm:text-base text-[#404945]">
            Mỗi giọt nước dừa đến tay quý khách là sự kết tinh của quy trình kiểm định nghiêm ngặt từ nông trại tới bàn ăn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cam kết 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#c0c9c3]/40 shadow-sm space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-[#e3f1e6] text-[#003629] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl text-[#1c6c3f]">task_alt</span>
            </div>
            <h3 className="text-lg font-bold text-[#003629]">1. Tuyển Chọn Khắt Khe</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed">
              100% buồng dừa xiêm được đo độ brix tự nhiên, chỉ thu hoạch khi đạt vị ngọt thanh mát, không chua, cơm dừa vừa mềm dẻo.
            </p>
          </div>

          {/* Cam kết 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#c0c9c3]/40 shadow-sm space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-[#e3f1e6] text-[#003629] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl text-[#1c6c3f]">filter_vintage</span>
            </div>
            <h3 className="text-lg font-bold text-[#003629]">2. Lọc Siêu Vi Cấp 3 Lần</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed">
              Loại bỏ hoàn toàn cặn xơ dừa li ti mà vẫn giữ nguyên vẹn ion Kali, Magie, vi khoáng điện giải tự nhiên có lợi cho sức khỏe.
            </p>
          </div>

          {/* Cam kết 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#c0c9c3]/40 shadow-sm space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-[#e3f1e6] text-[#003629] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl text-[#1c6c3f]">ac_unit</span>
            </div>
            <h3 className="text-lg font-bold text-[#003629]">3. Chuỗi Lạnh 2°C – 8°C</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed">
              Bảo quản lạnh nghiêm ngặt từ bồn chứa, kho trữ cho đến xe lạnh và thùng giữ nhiệt giao tận cửa, đảm bảo hạn sử dụng 7 ngày tươi nguyên.
            </p>
          </div>

          {/* Cam kết 4 */}
          <div className="bg-white rounded-2xl p-6 border border-[#c0c9c3]/40 shadow-sm space-y-3 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-xl bg-[#e3f1e6] text-[#003629] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-2xl text-[#1c6c3f]">recycling</span>
            </div>
            <h3 className="text-lg font-bold text-[#003629]">4. Bao Bì Sinh Thái Net Zero</h3>
            <p className="text-xs sm:text-sm text-[#404945] leading-relaxed">
              Sử dụng hộp giấy tiệt trùng Tetra Pak & thùng giấy Kraft có quai xách xơ dừa thân thiện môi trường, không dùng túi nilon nhựa một lần.
            </p>
          </div>
        </div>

        {/* Banner Cam Kết Đổi Trả 100% */}
        <div className="p-5 sm:p-6 rounded-2xl bg-[#003629] text-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#a5f4bb] text-[#003629] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-[#a5f4bb]">
                Chính Sách Hoàn Tiền / Đổi Trả 100%
              </h4>
              <p className="text-xs sm:text-sm text-gray-200">
                Nếu sản phẩm nhận được không đủ độ lạnh, tem seal bị rách hoặc có vị bất thường, COCONA đổi mới hoặc hoàn tiền ngay trong vòng 60 phút.
              </p>
            </div>
          </div>
          <button
            onClick={onFeedbackClick}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#a5f4bb] text-[#003629] font-bold text-xs sm:text-sm hover:bg-white transition-colors cursor-pointer"
          >
            Gửi Phản Hồi CSKH
          </button>
        </div>
      </div>
    </section>
  );
};
