import { ProductSortENUM, ProductTypeENUM } from "../enum.types";

export interface Product {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  isDiscountEnabled: boolean;
  discountPrice: number | null;
  effectivePrice: number;
  discountPercent: number | null;
  isInStock: boolean;
  isSpecial: boolean;
  soldCount: number;
  primaryImagePath: string | null;
  productType: ProductTypeENUM;
  shopId: string;
  shopName: string;
  createdAt: string;
}

export interface ProductParams {
  Search?: string;
  ShopId?: string; // uuid
  ShopCategoryId?: string; // uuid
  Brand?: string;
  MinPrice?: number;
  MaxPrice?: number;
  IsSpecial?: boolean;
  HasDiscount?: boolean;
  InStockOnly?: boolean;
  ProductType?: ProductTypeENUM;
  SortBy?: ProductSortENUM; // e.g. "Newest"
  Page?: number; // int32
  PageSize?: number; // int32
}
