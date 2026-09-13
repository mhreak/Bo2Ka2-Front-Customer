import React from "react";

export default function EmptyBackgroundPaddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full p-5 overflow-y-auto lg:px-8 lg:py-8">
      <div className="mx-auto w-full lg:max-w-4xl">{children}</div>
    </div>
  );
}
