import React, { useState } from 'react';

interface FloatingTOCProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const FloatingTOC: React.FC<FloatingTOCProps> = ({ activeSection, onNavigate }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sections = [
    { id: 'trang-chu', label: '1. Đầu Trang & Hero' },
    { id: 'san-pham', label: '2. Menu Sản Phẩm' },
    { id: 'vung-nguyen-lieu', label: '3. Vùng Nguyên Liệu' },
    { id: 'cau-chuyen-thuong-hieu', label: '4. Câu Chuyện COCONA' },
    { id: 'cam-ket-chat-luong', label: '5. Cam Kết Chất Lượng' },
    { id: 'lien-he-dat-hang', label: '6. Đặt Hàng & Liên Hệ' },
  ];

  return (
    <aside
      aria-label="Mục lục trang"
      className="fixed right-4 bottom-20 z-40 hidden lg:flex flex-col items-end group/toc"
      id="quick-toc"
    >
      <div className="bg-white/95 backdrop-blur-md border border-[#c0c9c3]/60 rounded-2xl p-2.5 shadow-2xl transition-all duration-300 w-56 hover:w-64 hover:shadow-[0_12px_32px_rgba(0,54,41,0.18)]">
        <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-[#e3f1e6]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-[#1b4d3e]">toc</span>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#003629]">
              Mục Lục Tự Động
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[10px] text-[#1c6c3f] font-semibold bg-[#e3f1e6] px-1.5 py-0.5 rounded-full">
              Quick Jump
            </span>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-gray-400 hover:text-black p-0.5 cursor-pointer text-xs"
              title={isCollapsed ? 'Mở rộng' : 'Thu gọn'}
            >
              <span className="material-symbols-outlined text-xs">
                {isCollapsed ? 'expand_more' : 'expand_less'}
              </span>
            </button>
          </div>
        </div>

        {!isCollapsed && (
          <nav className="flex flex-col space-y-1 text-xs">
            {sections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => onNavigate(sec.id)}
                  className={`toc-item flex items-center gap-2 px-2.5 py-1.5 rounded-xl transition-all text-left cursor-pointer ${
                    isActive
                      ? 'active bg-[#1b4d3e] text-white font-bold shadow-sm'
                      : 'text-[#404945] hover:text-[#003629] hover:bg-[#effdf1]'
                  }`}
                >
                  <span
                    className={`toc-bullet w-2 h-2 rounded-full shrink-0 transition-colors ${
                      isActive ? 'bg-[#a5f4bb]' : 'bg-[#c0c9c3]'
                    }`}
                  ></span>
                  <span className="truncate">{sec.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        <button
          className="mt-2 w-full py-1 text-[11px] font-bold text-[#1b4d3e] bg-[#effdf1] hover:bg-[#e3f1e6] rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="material-symbols-outlined text-sm">vertical_align_top</span>
          <span>Về Đầu Trang</span>
        </button>
      </div>
    </aside>
  );
};
