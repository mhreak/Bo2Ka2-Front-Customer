import React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mx-auto w-full lg:max-w-3xl">{children}</div>;
}
