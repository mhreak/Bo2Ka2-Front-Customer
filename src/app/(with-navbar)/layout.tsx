import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";
import React from "react";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default WithNavbarLayout;
