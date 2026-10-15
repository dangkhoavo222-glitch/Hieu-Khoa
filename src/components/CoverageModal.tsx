import React from 'react';

interface CoverageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CoverageModal: React.FC<CoverageModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#c0c9c3]/50 z-10 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#1c6c3f] text-2xl">local_shipping</span>
            <h3 className="font-bold text-lg text-[#003629]">Tra Cứu Vùng Giao Lạnh COCONA</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#e3f1e6] hover:bg-[#c0c9c3] text-[#003629] flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
            aria-label="Đóng"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#404945]">
          <div className="p-3.5 bg-[#effdf1] rounded-2xl border border-[#c0c9c3]/30 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#003629]">
              <span className="material-symbols-outlined text-sm text-[#1c6c3f]">ac_unit</span>
              <span>Khu Vực Hỏa Tốc Trong 2 Giờ (TP.HCM)</span>
            </div>
            <p className="text-gray-600">
              Quận 1, 3, 4, 5, 6, 8, 10, 11, Tân Bình, Phú Nhuận, Bình Thạnh, Gò Vấp và Quận 7. Thùng giữ nhiệt lạnh 2°C – 8°C giao tận tay.
            </p>
          </div>

          <div className="p-3.5 bg-[#effdf1] rounded-2xl border border-[#c0c9c3]/30 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#003629]">
              <span className="material-symbols-outlined text-sm text-[#1c6c3f]">schedule</span>
              <span>Khu Vực Giao 3 - 4 Giờ hoặc Đặt Trước</span>
            </div>
            <p className="text-gray-600">
              TP. Thủ Đức, Quận 12, Bình Tân, Hóc Môn, Nhà Bè, Bình Chánh. Vẫn đảm bảo chuỗi lạnh giữ nhiệt có đá gel chuyên dụng.
            </p>
          </div>

          <div className="p-3.5 bg-[#effdf1] rounded-2xl border border-[#c0c9c3]/30 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-[#003629]">
              <span className="material-symbols-outlined text-sm text-[#1c6c3f]">home_pin</span>
              <span>Khu Vực Bến Tre (Tại Nguồn)</span>
            </div>
            <p className="text-gray-600">
              TP. Bến Tre, Huyện Châu Thành, Giồng Trôm, Mỏ Cày Bắc, Ba Tri. Giao trực tiếp từ xưởng chiết rót lạnh trong ngày.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#deece0] text-[11px] text-[#003629] font-medium">
            💡 <strong>Chính sách Freeship:</strong> Miễn phí vận chuyển cho tất cả đơn hàng từ 150.000 VNĐ.
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1b4d3e] text-white font-bold text-xs hover:bg-[#003629] transition-colors cursor-pointer shadow"
        >
          Đã Hiểu & Tiếp Tục Mua Sắm
        </button>
      </div>
    </div>
  );
};
