import React from "react";
import DesktopHeader from "@/components/navbar/DesktopHeader";
import BottomNavigation from "@/components/bottomNavigation/BottomNavigation";

const AppShell = ({
  children,
  headerClassName,
}: {
  children: React.ReactNode;
  headerClassName?: string;
}) => {
  return (
    <div className="flex min-h-full flex-col">
      <DesktopHeader headerClassName={headerClassName} />
      <div className="flex-1">{children}</div>
      <BottomNavigation />
    </div>
  );
};

export default AppShell;
