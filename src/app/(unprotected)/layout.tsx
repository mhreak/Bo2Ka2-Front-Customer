import React from "react";

export default function UnprotectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-gradient-light h-full w-full p-5">{children}</div>;
}
