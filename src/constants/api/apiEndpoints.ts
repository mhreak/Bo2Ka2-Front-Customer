type EndpointGroup = {
  endpoint: string;
  actions: Record<string, string>;
};

type ApiEndpoints = Record<string, EndpointGroup>;

export const API_ENDPOINT = {
  settings: "/settings",
  stories: "/stories",
  banners: "/Banners",
  productCategories: "/ProductCategories",
  products: "/products",
  shops: "/shops",
};
