import AppShell from "@/components/layout/AppShell";
import React from "react";

const WithNavbarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell>
      <div className="mb-18 p-5 lg:mx-auto lg:mb-0 lg:max-w-7xl lg:px-8 lg:py-8">
        {children}
      </div>
    </AppShell>
  );
};

export default WithNavbarLayout;
