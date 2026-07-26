import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import React from "react";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default WithNavbarLayout;
