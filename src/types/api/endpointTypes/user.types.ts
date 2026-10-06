export interface User {
  id: string;
  phoneNumber: string;
  firstName: string | null;
  lastName: string | null;
  fullName: string;
  nationalCode: string | null;
  email: string | null;
  birthDate: string | null;
  shamsiBirthDate: string | null;
  gender: string | null;
  address: string | null;
  cityId: string | null;
  cityName: string | null;
  latitude: number | null;
  longitude: number | null;
  avatarFileId: string | null;
  avatarPath: string | null;
  walletCredit: number;
  isActive: boolean;
  hasPassword: boolean;
  roles: UserRole[];
}

export type UserRole = "customer" | "admin" | "vendor" | string;
export type Gender = "Male" | "Female" | "Other";

export interface UserEdit {
  firstName?: string;
  lastName?: string;
  nationalCode?: string;
  email?: string;
  birthDate?: string;
  shamsiBirthDate?: string;
  gender?: Gender;
  address?: string;
  cityId?: string;
  latitude?: number;
  longitude?: number;
  avatarFileId?: string;
}
