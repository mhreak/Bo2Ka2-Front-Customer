'use client'
import dynamic from "next/dynamic";

const NeshanMap = dynamic(
  () => import("@/components/NeshanMap"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <div className="h-screen">
      <NeshanMap />
    </div>
  );
}