export interface Product {
  id: string;
  name: string;
  subtitle: string;
  volume: string;
  price: number;
  originalPrice?: number;
  tag: string;
  badgeCategory: string;
  certBadge?: string;
  image: string;
  description: string;
  shelfLife: string;
  storageTemp: string;
  packaging: string;
  category: 'classic' | 'plus' | 'family' | 'combo' | 'limited';
  capacityType: '500ml' | '1000ml' | 'combo';
  priceRange: 'under40' | '40to70' | 'over100';
  isOrganic?: boolean;
  isVietgap?: boolean;
  isEcoPackaging?: boolean;
  ingredients: string;
  nutrition: {
    calories: string;
    potassium: string; // Kali
    magnesium: string; // Magie
    sugar: string;
    sodium: string;
  };
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FilterState {
  category: string;
  capacity: string;
  priceRanges: string[];
  standards: {
    pure100: boolean;
    organic: boolean;
    vietgap: boolean;
    ecoPackaging: boolean;
  };
  sort: 'default' | 'price-asc' | 'price-desc' | 'bestseller';
}

export interface ToastMessage {
  id: string;
  title: string;
  desc: string;
  type?: 'success' | 'info' | 'cart';
}
