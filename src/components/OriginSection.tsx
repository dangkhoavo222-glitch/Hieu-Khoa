import React from 'react';
import { IMAGES } from '../data/products';

export const OriginSection: React.FC = () => {
  return (
    <section
      className="py-16 lg:py-24 bg-[#effdf1] border-b border-[#c0c9c3]/30"
      id="vung-nguyen-lieu"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e3f1e6] border border-[#1c6c3f]/30 text-[#1c6c3f] text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">water</span>
            Địa Linh Phù Sa Sông Tiền & Sông Hàm Luông
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#003629]">
            Vùng Nguyên Liệu Bến Tre • Cội Nguồn Dưỡng Chất Phù Sa
          </h2>
          <p className="text-sm sm:text-base text-[#404945]">
            Nằm trọn giữa 3 dải cù lao trù phú Hàm Luông, Cổ Chiên và Ba Tri. Những vườn dừa xiêm bạt ngàn được bồi đắp lượng khoáng chất màu mỡ quanh năm từ mạng lưới sông ngòi mênh mông Tây Nam Bộ.
          </p>
        </div>

        {/* 2 Hình ảnh thực tế từ tài liệu nguồn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Hình 11.1 */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#c0c9c3]/40 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="overflow-hidden rounded-2xl h-72 sm:h-80 bg-gray-100 mb-4 relative">
              <img
                alt="Vườn dừa nguyên liệu tại Bến Tre"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={IMAGES.gardenBenTre}
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-semibold backdrop-blur-xs">
                Châu Thành & Giồng Trôm
              </span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#1c6c3f] uppercase tracking-wider block mb-1">
                Hình 11.1 Vườn dừa nguyên liệu tỉnh Bến Tre
              </span>
              <h3 className="text-lg font-bold text-[#003629]">
                Thổ Nhưỡng Độc Bản & Canh Tác Thuần Sinh Thái
              </h3>
              <p className="text-xs sm:text-sm text-[#404945] mt-1">
                COCONA ký kết thu hoạch trực tiếp cùng hơn 150 nông hộ đạt chuẩn VietGAP tại Châu Thành và Giồng Trôm. Không sử dụng thuốc trừ sâu hóa học, tận dụng dòng phù sa ngọt lành tự nhiên nuôi dưỡng từng quả dừa.
              </p>
            </div>
          </div>

          {/* Hình 11.2 */}
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#c0c9c3]/40 shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
            <div className="overflow-hidden rounded-2xl h-72 sm:h-80 bg-gray-100 mb-4 relative">
              <img
                alt="Hoạt động thu hoạch dừa tại vùng nguyên liệu Bến Tre"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={IMAGES.boatHarvest}
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-black/60 text-white text-[11px] font-semibold backdrop-blur-xs">
                Thu hoạch bến sông
              </span>
            </div>
            <div>
              <span className="text-xs font-bold text-[#1c6c3f] uppercase tracking-wider block mb-1">
                Hình 11.2 Hoạt động thu hoạch dừa tại vùng nguyên liệu
              </span>
              <h3 className="text-lg font-bold text-[#003629]">
                Ghe Thuyền Vận Chuyển Trong Vòng 4 Tiếng
              </h3>
              <p className="text-xs sm:text-sm text-[#404945] mt-1">
                Từng buồng dừa được hái bằng tay khi đạt đúng độ tuổi 7-8 tháng (lúc nước ngọt đậm đà nhất). Ghe thuyền len lỏi qua rạch nước vận chuyển về xưởng lạnh trong ngày để ép vô trùng, giữ trọn vị tươi.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Thẻ cam kết vùng trồng */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#c0c9c3]/40 text-center space-y-1 hover:border-[#1c6c3f] transition-colors">
            <span className="material-symbols-outlined text-[#1c6c3f] text-3xl">diversity_3</span>
            <h4 className="font-bold text-[#003629] text-sm">150+ Nông Hộ Hợp Tác</h4>
            <p className="text-xs text-gray-500">Cam kết bao tiêu giá ổn định dài hạn</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#c0c9c3]/40 text-center space-y-1 hover:border-[#1c6c3f] transition-colors">
            <span className="material-symbols-outlined text-[#1c6c3f] text-3xl">verified</span>
            <h4 className="font-bold text-[#003629] text-sm">Chứng Nhận OCOP 4 Sao</h4>
            <p className="text-xs text-gray-500">Đặc sản nông nghiệp xứ dừa Bến Tre</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#c0c9c3]/40 text-center space-y-1 hover:border-[#1c6c3f] transition-colors">
            <span className="material-symbols-outlined text-[#1c6c3f] text-3xl">schedule</span>
            <h4 className="font-bold text-[#003629] text-sm">Thu Hoạch 7 - 8 Tháng Tuổi</h4>
            <p className="text-xs text-gray-500">Thời điểm dừa đạt độ brix hoàn hảo</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-[#c0c9c3]/40 text-center space-y-1 hover:border-[#1c6c3f] transition-colors">
            <span className="material-symbols-outlined text-[#1c6c3f] text-3xl">compost</span>
            <h4 className="font-bold text-[#003629] text-sm">Nông Nghiệp Tái Sinh</h4>
            <p className="text-xs text-gray-500">Tận dụng vỏ & xơ dừa làm mùn hữu cơ</p>
          </div>
        </div>
      </div>
    </section>
  );
};
