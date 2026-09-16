import AppShell from "@/components/layout/AppShell";
import React from "react";

export default function NoPaddingWithNavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppShell>
      <div className="w-full mb-20 lg:mx-auto lg:mb-0 lg:max-w-7xl lg:px-8 lg:py-6">
        {children}
      </div>
    </AppShell>
  );
}
