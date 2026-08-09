import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import React from "react";

export default function NoPaddingWithNavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full mb-20">
      {children}
      <BottomNavigation />
    </div>
  );
}
