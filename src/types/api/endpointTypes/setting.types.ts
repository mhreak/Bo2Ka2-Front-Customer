// ---------- Setting ----------
export interface Setting {
  id: string;
  key: string;
  value: HomepageSetting;
  createdAt: string;
  updatedAt: string | null;
}

export interface HomepageSetting {
  sections: HomepageSection[];
}

// ---------- Sections (discriminated union) ----------
export type HomepageSection =
  | BannerSection
  | MainCategoriesSection
  | SimpleSection // sale, upcomingOccasion, priceCategories, expressDelivery, upcomingBirthday, trustedShops
  | GiftIdeasSection;

interface BaseSection {
  type: SectionType;
  order: number;
  isVisible: boolean;
  title: string | null;
}

export interface BannerSection extends BaseSection {
  type: "banner";
  bannerIds: string[];
}

export interface MainCategoriesSection extends BaseSection {
  type: "mainCategories";
  showViewAll: boolean;
  source: "homeCarousel";
  categories: HomeCarouselCategory[];
}

export interface GiftIdeasSection extends BaseSection {
  type: "giftIdeas";
  source: "giftIdeaCategories";
  categories: GiftIdeaCategory[];
}

// سکشن‌هایی که فقط فیلدهای پایه دارند
export interface SimpleSection extends BaseSection {
  type:
    | "sale"
    | "upcomingOccasion"
    | "priceCategories"
    | "expressDelivery"
    | "upcomingBirthday"
    | "trustedShops";
}

// ---------- Section types ----------
export type SectionType =
  | "banner"
  | "mainCategories"
  | "sale"
  | "upcomingOccasion"
  | "priceCategories"
  | "expressDelivery"
  | "giftIdeas"
  | "upcomingBirthday"
  | "bestSellers"
  | "newest"
  | "trustedShops";

// ---------- Categories ----------
export interface HomeCarouselCategory {
  id: string;
  name: string;
  imagePath: string;
  homeCarouselOrder: number;
}

export interface GiftIdeaCategory {
  id: string;
  name: string;
  imagePath: string;
}
