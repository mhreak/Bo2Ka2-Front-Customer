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

export interface HomepageSection {
  type: SectionType;
  order: number;
  isVisible: boolean;
  title: string | null;
  style?: SectionStyle;
}

export type SectionType =
  | "stories"
  | "banner"
  | "categories"
  | "bestSellers"
  | "newest"
  | "souvenirs"
  | "trustedShops";

export interface SectionStyle {
  backgroundImage: string | null;
  backgroundColor: string;
  pattern: string;
  gradient: Gradient | null;
}

export interface Gradient {
  from: string;
  to: string;
  angle: number;
}
