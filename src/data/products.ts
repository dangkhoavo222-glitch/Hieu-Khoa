import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'cocona-classic',
    name: 'COCONA Classic (500ml)',
    subtitle: '100% Nước dừa tươi nguyên chất Bến Tre',
    volume: '500ml',
    price: 34900,
    tag: 'Cốt Lõi',
    badgeCategory: '1. DÒNG CỐT LÕI',
    certBadge: 'Chuẩn VietGAP',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEwEPuxE6CYoMCiHEqkLyoglR3bu8RywwQ707wbQ-_tekaBkx94oeW7pS5EBXg44qHiid-iOvSxuhv6yyq8UTzFXpaVi7CA05TTdnu3hRoeemytcRvnuTa0MtVJDQuQ0oNWg2C-2qnCb7ZFJilS5JTP46KCljrNcmuaLoEnT3TzZG5nvNB2KfoT1g0MxTEbaCetmKW0eQqUb3x-NFmvJhgt0lgOfvTcsYq5N_y7X0zas0_YpBeoZINQIHbF3oED88q8g',
    description: '100% Nước dừa tươi Bến Tre tuyển chọn, bù điện giải tức thì. Vị thanh ngọt dịu mát tự nhiên, bù nước và khoáng chất tức thì sau vận động. Giữ trọn vị tươi như vừa hái từ cây.',
    shelfLife: '7 ngày lạnh',
    storageTemp: '2°C – 8°C',
    packaging: 'Hộp tiệt trùng Tetra Pak',
    category: 'classic',
    capacityType: '500ml',
    priceRange: 'under40',
    isVietgap: true,
    isEcoPackaging: true,
    ingredients: '100% Nước dừa tươi tự nhiên nguyên chất Bến Tre. Tuyệt đối không chất bảo quản, không đường pha.',
    nutrition: {
      calories: '19 kcal / 100ml',
      potassium: '250mg (Bù điện giải)',
      magnesium: '25mg',
      sugar: '0% Đường bổ sung',
      sodium: '105mg'
    },
    features: [
      'Bảo quản lạnh khép kín 2°C – 8°C',
      'Hạn sử dụng 7 ngày tươi nguyên',
      '0% Đường tinh luyện thêm',
      'Vô trùng công nghệ màng lọc lạnh'
    ]
  },
  {
    id: 'cocona-plus',
    name: 'COCONA Plus Nha Đam (500ml)',
    subtitle: '85% Nước dừa tươi + 15% Thạch nha đam hữu cơ',
    volume: '500ml',
    price: 39900,
    tag: 'Nha Đam',
    badgeCategory: '2. TRẢI NGHIỆM',
    certBadge: '15% Nha Đam Giòn Sạch',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgjwtZK4LQxL2RVvSefXCGkHWe4nv4dMQACICDyQ-mKM4DRQ8NBXHtqxcz9NhqMN0s4WBYrIEi7SuoNSQ3iHk-csM3DndNaUkAXyu-OOTFDG3z_tO0WRF12ZeXau7tzX02uZdgAXmbDnecjFNM7gbArCn5NntsGjVr71QsyPmxlpGk9F_YHe5dqXqYPiGEqAIxZsbSEsfj_3Wc56Y01uiJt3Q8cDaAAp37-YWuszfohGoAyx8mQukkIaNLsSnnfZhIlg',
    description: '85% Nước dừa tươi Bến Tre kết hợp 15% thạch nha đam thanh giòn sần sật. Mang lại trải nghiệm nhai thú vị, hỗ trợ thanh nhiệt và chăm sóc làn da mịn màng tươi sáng.',
    shelfLife: '7 ngày lạnh',
    storageTemp: '2°C – 8°C',
    packaging: 'Hộp tiệt trùng nắp vặn',
    category: 'plus',
    capacityType: '500ml',
    priceRange: 'under40',
    isVietgap: true,
    isEcoPackaging: true,
    ingredients: '85% Nước dừa tươi Bến Tre, 15% thạch nha đam giòn rửa sạch bằng nước ion kiềm.',
    nutrition: {
      calories: '22 kcal / 100ml',
      potassium: '220mg',
      magnesium: '22mg',
      sugar: '0% Đường nhân tạo',
      sodium: '95mg'
    },
    features: [
      'Bảo quản lạnh 2°C – 8°C',
      'Thạch nha đam tự nhiên giòn sạch',
      'Nắp vặn tiện dụng mang theo',
      'Hỗ trợ thanh nhiệt và đẹp da'
    ]
  },
  {
    id: 'cocona-family',
    name: 'COCONA Gia Đình (1 Lít)',
    subtitle: 'Dung tích lớn kinh tế - Chia sẻ cho cả nhà',
    volume: '1.000ml (1 Lít)',
    price: 59900,
    tag: '1 Lít Tiết Kiệm',
    badgeCategory: '3. TIẾT KIỆM GIA ĐÌNH',
    certBadge: 'Tiết Kiệm 14.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsAPoOsGCWiA2QBXrwbs0VcSZhN-Q8thkAoYE_l7E8BINpbWZVJerpoABvQEd6XijDPshFq_S9I1T1KkjRRL8Dq7YN8mDTt5HziaTPJqMC624TlPPUx55gbIC6Tn-sU-ADi-EABFPv0gVAaqakmxeGFKCLIBCp5f1IcPa4ccq3l58reqsB8ddeoOAK14kk0p8OcBCnSsfO9pojhAq6y_G0hz_tQdhX5vvd_gugorapmWZlCRk05nIDDBhkUUp79G9Gdg',
    description: 'Dung tích lớn 1.000ml tối ưu chi phí cho cả gia đình, tiết kiệm hơn 14.000đ so với mua 2 hộp lẻ 500ml. Thiết kế hộp nắp rót thông minh dễ bảo quản trong cánh cửa tủ lạnh.',
    shelfLife: '7 ngày lạnh',
    storageTemp: '2°C – 8°C',
    packaging: 'Hộp lớn nắp rót chống trào',
    category: 'family',
    capacityType: '1000ml',
    priceRange: '40to70',
    isVietgap: true,
    isEcoPackaging: true,
    ingredients: '100% Nước dừa tươi nguyên chất Bến Tre chiết rót bồn lạnh thể tích lớn.',
    nutrition: {
      calories: '19 kcal / 100ml',
      potassium: '250mg',
      magnesium: '25mg',
      sugar: '0% Đường pha',
      sodium: '105mg'
    },
    features: [
      'Tiết kiệm 14.000đ cho mỗi bữa ăn gia đình',
      'Nắp khóa kép kín khí giữ trọn hương vị',
      'Vừa vặn hoàn hảo cánh tủ lạnh gia đình',
      'Bảo quản lạnh 2°C – 8°C tươi suốt 7 ngày'
    ]
  },
  {
    id: 'cocona-combo',
    name: 'COCONA Combo Set (4 Hộp)',
    subtitle: 'Thùng giấy Kraft xách tay sinh thái • 4 x 500ml (2 Lít)',
    volume: '4 x 500ml (2 Lít)',
    price: 119000,
    originalPrice: 139600,
    tag: 'Combo Kraft',
    badgeCategory: '4. BÁN CHẠY NHẤT',
    certBadge: '100% Eco Kraft Giấy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBV54uA7LbqI6MFNPT-1eSmgQ3Vj6JYAaJDKWIavZNsgFjo_TcjOFwxXL_mMnZBB7atrtqoaYMWlfuKD3-gUNEIVg1SRgBhSbLyG_8PU3khTzJ-GbuzOUoPbYAjfZq_Vvvd4zl1hOKHo5wkzJjKY-kGYZT8YKLsDkB7kROMSol7NUJi-AO2vgLzlj7-OOQSe4gjjE4xBfBvcsgFblQI-HsvkHiBGcohW_EHJfVRJtXekHCQE2254rLOUSfCpikCDy2T2A',
    description: 'Thùng giấy Kraft phân hủy sinh học có quai xách bằng xơ dừa bện thủ công, không màng keo nhựa. Combo tiết kiệm hoàn hảo cho cả tuần làm việc hoặc làm quà biếu sức khỏe xanh.',
    shelfLife: '7 ngày lạnh',
    storageTemp: '2°C – 8°C',
    packaging: 'Thùng Kraft quai xách xơ dừa sinh thái',
    category: 'combo',
    capacityType: 'combo',
    priceRange: 'over100',
    isVietgap: true,
    isEcoPackaging: true,
    ingredients: '4 Hộp x 500ml COCONA Classic 100% nước dừa tươi nguyên chất đóng thùng sinh thái.',
    nutrition: {
      calories: '19 kcal / 100ml',
      potassium: '1.000mg tổng hộp',
      magnesium: '100mg tổng hộp',
      sugar: '0% Đường thêm',
      sodium: '420mg'
    },
    features: [
      'Ưu đãi Combo giảm 15% so với giá bán lẻ',
      'Quai xách bện xơ dừa Bến Tre thủ công',
      '100% Giấy Kraft tái chế không phủ màng nhựa',
      'Bảo quản lạnh giao hỏa tốc 2 giờ kèm túi giữ nhiệt'
    ]
  },
  {
    id: 'cocona-limited',
    name: 'COCONA Premium Limited (500ml)',
    subtitle: '100% Nước dừa Organic tuyển chọn khắt khe',
    volume: '500ml',
    price: 65000,
    tag: 'Limited Edition',
    badgeCategory: '5. LIMITED EDITION',
    certBadge: 'Tặng Kèm Túi Giấy Cao Cấp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvZ5qih6NZbETgqDhXwxrYFYQISxI95SL8OAIXG25iYRnvYDMnSp3HB-bKq5Hk2MBD1yllKJx0Mc-TDLCHbLscd11sRevrV72tYqP-iMRnd24T2Rt9BAW6771bV_VHQaCAmmJHSA8EvFlbZX_Ua5nWnjtlnFfycAhp7GYDYvYV8LeKVOWIg2YHhzcUMNL7vtQWI09YYOBtJO8JPxlA2SwLJrO7ArJD8wuUptTjxqprOd2UPMmvy9jfPtzr64PK3D_67A',
    description: 'Hộp đen ép kim dập nổi biểu tượng dừa Bến Tre sang trọng, mực in sinh học từ đậu nành. Áp dụng kỹ thuật lọc siêu vi 3 cấp độ cho nước dừa trong suốt như pha lê, lưu giữ trọn vẹn hậu vị ngọt mát.',
    shelfLife: '7 ngày lạnh',
    storageTemp: '2°C – 8°C',
    packaging: 'Hộp đen ép kim + Túi xách giấy Kraft cao cấp',
    category: 'limited',
    capacityType: '500ml',
    priceRange: '40to70',
    isOrganic: true,
    isVietgap: true,
    isEcoPackaging: true,
    ingredients: '100% Nước dừa Organic từ vườn dừa cổ thụ tuyển chọn Bến Tre, lọc siêu vi 3 cấp.',
    nutrition: {
      calories: '20 kcal / 100ml',
      potassium: '270mg (Hàm lượng điện giải cao nhất)',
      magnesium: '28mg',
      sugar: '0% Đường pha',
      sodium: '110mg'
    },
    features: [
      'Công nghệ lọc siêu vi 3 tầng độc quyền',
      'Mực in đậu nành sinh học thân thiện môi trường',
      'Tặng kèm túi giấy Kraft ép kim cao cấp làm quà',
      'Chứng nhận Organic và OCOP tiêu biểu'
    ]
  }
];

export const IMAGES = {
  classicBottle: PRODUCTS[0].image,
  plusBottle: PRODUCTS[1].image,
  familyBottle: PRODUCTS[2].image,
  comboSet: PRODUCTS[3].image,
  limitedBottle: PRODUCTS[4].image,
  gardenBenTre: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqYkO8ixpWdZ3Db0-QDU9Yf9H8XKCAVITbYmlAiyvvLm-CRccJixbgr8I9PjPF63lzxwu8xQ2IXsSfcaO0nHfJ91LIR-NUXXM8jqPcckX8jtsnB3aQ0xSvavTIs0mjbXdchwcQ2mD-IaSB37gE0MYqNubxlbTX6LanmonnW6FPasboFapdrk6zmzt8NU3RvPGVSRA4p8j0_Sw5Ew_Fpp6nKqxGGRLFshQ3Q8kSeWdlnzEmp7D4br-E1wpefpTL6rulsg',
  boatHarvest: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzfMWgbK2GY6VdAwkgXixBjQnzS7vc9MUxjKwL3FqETV0mWeNqy6jUqbEybFSPWmuhb1Tn2KPaYnPbJSML7KqOF-8kWPySjpFu9niiQ-Rn415HUjvDcsJk9P7rW1iT0sRUhQYP7-z4NImTvJA2HkaaQ4b6NTmBL2hLN9VWbSef05Ldub0k1m8-PB66ko2CwGztdW0X3GXJlLTjd28j13TTNlhDcoLQtT31-o3PmyOn0_1mdkSx_4chikJvFrxclrN6lQ',
  brandLogoMockup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsGy6jKCUbJtx-A6sLofB0TYHoQzfeONcVgKQMWOPah4alWHmbkBZZ9W6cfkSuFFzMuL1hW-YoZSJbPCdsmm037lZ1W-Ay_hPw4eolESdn1j0HbiYEcNHQsWvd4YYKqW5u6710ubpUqJ_G1DWjPdQexLrK4BmL2DdZ9UmTqxUsUo6iqOs6az-t6D1qatKWxWp63M28neTj-1o4sW4kXkiXuFvgV6AmGSVUBPdQCWz9IY9PKlhRTj8UxSAdK39ryXhpFg'
};
