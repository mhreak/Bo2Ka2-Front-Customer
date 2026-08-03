import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import React from "react";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="mb-18 p-5">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default WithNavbarLayout;
