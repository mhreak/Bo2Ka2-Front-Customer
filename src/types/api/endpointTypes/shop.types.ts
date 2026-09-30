import { ShopSortENUM } from "../enum.types";

export interface Shop {
  id: string;
  shopName: string;
  avatarFileId: string | null;
  avatarPath: string | null;
  coverFileId: string | null;
  coverPath: string | null;
  shopCategoryId: string;
  shopCategoryName: string;
  cityId: string;
  cityName: string;
  textAddress: string;
  isOpenNow: boolean;
  enableStories: boolean;
  productCount: number;
  createdAt: string;
  isNew: boolean;
}
export interface ShopParams {
  search?: string;
  shopCategoryId?: string; // UUID به صورت رشته (string) در نظر گرفته می‌شود
  cityId?: string;
  provinceId?: string;
  onlyOpenNow?: boolean;
  hasStories?: boolean;
  hasSpecialProducts?: boolean;
  onlyNew?: boolean;
  sortBy?: ShopSortENUM;
  page?: number;
  pageSize?: number;
}
