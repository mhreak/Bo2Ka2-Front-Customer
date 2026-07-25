import localFont from "next/font/local";

export const yekanBakh = localFont({
  src: [
    {
      path: "./YekanBakh/YekanBakhLight.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "./YekanBakh/YekanBakhRegular.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./YekanBakh/YekanBakhMedium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./YekanBakh/YekanBakhBold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./YekanBakh/YekanBakhHeavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "./YekanBakh/YekanBakhFat.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});
