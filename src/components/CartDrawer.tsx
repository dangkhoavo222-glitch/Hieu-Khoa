import React, { useState } from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckoutComplete: (orderInfo: {
    name: string;
    phone: string;
    address: string;
    total: number;
  }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onCheckoutComplete,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [deliverySlot, setDeliverySlot] = useState('express');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const freeShipThreshold = 150000;
  const isFreeShip = subtotal >= freeShipThreshold || subtotal === 0;
  const shippingFee = isFreeShip ? 0 : 25000;
  const grandTotal = subtotal + shippingFee;
  const percentToFreeShip = Math.min(100, Math.round((subtotal / freeShipThreshold) * 100));

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim() || !customerAddress.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onCheckoutComplete({
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
        total: grandTotal,
      });
      setIsCheckingOut(false);
      onClearCart();
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity cursor-pointer"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#003629] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-[#a5f4bb]">
                shopping_bag
              </span>
              <div>
                <h3 className="font-bold text-base leading-tight">Giỏ Hàng COCONA</h3>
                <span className="text-[11px] text-[#9ed1bd]">
                  Chuỗi lạnh 2°C – 8°C giao hỏa tốc 2 giờ
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Đóng"
            >
              ✕
            </button>
          </div>

          {/* Freeship Progress Bar */}
          <div className="p-3 bg-[#e9f7ec] border-b border-[#c0c9c3]/40 text-xs">
            {isFreeShip && subtotal > 0 ? (
              <div className="flex items-center gap-1.5 text-[#1c6c3f] font-bold">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>Chúc mừng! Bạn được MIỄN PHÍ vận chuyển lạnh hỏa tốc.</span>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-[#003629]">
                  <span>
                    Mua thêm <strong>{(freeShipThreshold - subtotal).toLocaleString('vi-VN')}đ</strong> để Freeship
                  </span>
                  <span className="font-bold">{percentToFreeShip}%</span>
                </div>
                <div className="w-full bg-[#c0c9c3]/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#1c6c3f] h-full transition-all duration-300"
                    style={{ width: `${percentToFreeShip}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#e3f1e6] text-[#003629] flex items-center justify-center mx-auto">
                  <span className="material-symbols-outlined text-3xl">remove_shopping_cart</span>
                </div>
                <h4 className="font-bold text-[#003629] text-base">Giỏ hàng của bạn đang trống</h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Hãy chọn những sản phẩm nước dừa tươi nguyên chất Bến Tre mát lành để bù khoáng cho cơ thể nhé!
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-[#1b4d3e] text-white font-bold text-xs shadow hover:bg-[#003629] cursor-pointer"
                >
                  Khám Phá Sản Phẩm Ngay
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Checkout Form */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200">
                  <span className="font-bold text-sm text-[#003629]">Thông Tin Nhận Hàng</span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-[#1c6c3f] font-semibold underline cursor-pointer"
                  >
                    Quay lại giỏ
                  </button>
                </div>

                <div>
                  <label className="block font-bold text-[#003629] mb-1">Họ và tên người nhận *</label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b4d3e]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#003629] mb-1">Số điện thoại liên hệ *</label>
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="0901 xxx xxx"
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b4d3e]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#003629] mb-1">Địa chỉ giao hàng (TP.HCM / Bến Tre) *</label>
                  <input
                    type="text"
                    required
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#1b4d3e]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#003629] mb-1">Khung giờ giao hàng</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliverySlot('express')}
                      className={`p-2 rounded-xl text-left border cursor-pointer ${
                        deliverySlot === 'express'
                          ? 'border-[#1b4d3e] bg-[#e3f1e6] font-bold text-[#003629]'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="block font-bold">Hỏa tốc 2 giờ</span>
                      <span className="text-[10px] text-gray-500">Giữ thùng lạnh tận cửa</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliverySlot('morning')}
                      className={`p-2 rounded-xl text-left border cursor-pointer ${
                        deliverySlot === 'morning'
                          ? 'border-[#1b4d3e] bg-[#e3f1e6] font-bold text-[#003629]'
                          : 'border-gray-200'
                      }`}
                    >
                      <span className="block font-bold">Sáng mai (6:30 - 8:30)</span>
                      <span className="text-[10px] text-gray-500">Bù khoáng đầu ngày</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#003629] mb-1">Phương thức thanh toán</label>
                  <div className="space-y-1.5">
                    <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-[#effdf1] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'cod'}
                        onChange={() => setPaymentMethod('cod')}
                        className="accent-[#1b4d3e]"
                      />
                      <span>Thanh toán khi nhận hàng (COD)</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-[#effdf1] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'vietqr'}
                        onChange={() => setPaymentMethod('vietqr')}
                        className="accent-[#1b4d3e]"
                      />
                      <span>Chuyển khoản ngân hàng VietQR</span>
                    </label>
                    <label className="flex items-center gap-2 p-2 rounded-xl border border-gray-200 hover:bg-[#effdf1] cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === 'momo'}
                        onChange={() => setPaymentMethod('momo')}
                        className="accent-[#1b4d3e]"
                      />
                      <span>Ví MoMo / VNPay</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-[#1b4d3e] hover:bg-[#003629] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>{isSubmitting ? 'Đang tạo đơn...' : 'Xác Nhận Đặt Hàng'}</span>
                </button>
              </form>
            ) : (
              /* Cart Items List */
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-[#effdf1] rounded-2xl border border-[#c0c9c3]/30 flex items-center gap-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-white rounded-xl p-1 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-[#003629] truncate">
                        {item.product.name}
                      </h4>
                      <span className="text-[11px] text-gray-500 block">
                        {item.product.price.toLocaleString('vi-VN')} VNĐ
                      </span>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center bg-white rounded-lg border border-gray-200 px-1 py-0.5">
                          <button
                            onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                            className="px-1.5 font-bold text-gray-600 hover:text-black cursor-pointer text-xs"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-[#003629]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                            className="px-1.5 font-bold text-gray-600 hover:text-black cursor-pointer text-xs"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-extrabold text-xs text-[#1b4d3e]">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')}đ
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="text-gray-400 hover:text-red-600 p-1 cursor-pointer transition-colors"
                      title="Xóa"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Summary */}
          {items.length > 0 && !isCheckingOut && (
            <div className="p-4 sm:p-5 bg-[#f7fcf8] border-t border-gray-200 space-y-3">
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Tiền hàng:</span>
                  <span className="font-semibold text-gray-900">
                    {subtotal.toLocaleString('vi-VN')} VNĐ
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phí vận chuyển lạnh 2-8°C:</span>
                  <span className="font-semibold text-gray-900">
                    {shippingFee === 0 ? (
                      <span className="text-[#1c6c3f] font-bold">Miễn phí (Freeship)</span>
                    ) : (
                      `${shippingFee.toLocaleString('vi-VN')} VNĐ`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-[#003629] pt-2 border-t border-gray-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-base text-[#1b4d3e]">
                    {grandTotal.toLocaleString('vi-VN')} VNĐ
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-3.5 rounded-xl bg-[#1b4d3e] hover:bg-[#003629] text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Tiến Hành Đặt Hàng</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
