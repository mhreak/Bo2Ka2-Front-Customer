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
  shopCategoryId?: string;
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

export interface ShopGet {
  id: string;
  shopName: string;
  avatarFileId: string | null;
  avatarPath: string | null;
  coverFileId: string | null;
  coverPath: string | null;
  shopCategoryId: string;
  shopCategoryName: string;
  textAddress: string;
  cityId: string;
  cityName: string;
  latitude: number;
  longitude: number;
  returnPolicy: string;
  isOpenNow: boolean;
  enableStories: boolean;
  productCount: number;
  workingHours: WorkingHour[];
  createdAt: string;
}

export interface WorkingHour {
  dayOfWeek:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  isClosed: boolean;
  openTime: string | null;
  closeTime: string | null;
}
