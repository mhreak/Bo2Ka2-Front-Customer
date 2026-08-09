import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import React from "react";

export default function NoPaddingWithNavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      {children}
      <BottomNavigation />
    </div>
  );
}
