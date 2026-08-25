import React from "react";

export default function EmptyBackgroundPaddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-full p-5 overflow-y-auto">{children}</div>;
}
