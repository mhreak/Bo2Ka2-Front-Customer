export interface Banner {
  id: string;
  title: string;
  description: string;
  imageId: string | null;
  imagePath: string | null;
  link: string;
  showOrder: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}
