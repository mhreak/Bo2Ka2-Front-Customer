export interface ProductCategory {
  id: string;
  name: string;
  isActive: boolean;
  parentCategoryId: string | null;
  parentCategoryName: string | null;
  imageId: string | null;
  imagePath: string | null;
  children: ProductCategory[];
  createdAt: string;
}
