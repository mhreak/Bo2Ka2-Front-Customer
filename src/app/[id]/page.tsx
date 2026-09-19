"use client";

import { useParams } from "next/navigation";
import React from "react";
import { IntroPage1 } from "./_components/IntroPage1";
import { useTransitionRouter } from "next-view-transitions";
import { IntroPage2 } from "./_components/IntroPage2";
import { IntroPage3 } from "./_components/IntroPage3";

type PageIndex = 1 | 2 | 3;

export default function IntroPages() {
  const { id } = useParams<{ id: string }>();
  const pageIndex: PageIndex = Number(id) as PageIndex;
  const router = useTransitionRouter();

  const pages = {
    1: <IntroPage1 onNext={() => router.push("/2")} />,
    2: <IntroPage2 onNext={() => router.push("/3")} />,
    3: <IntroPage3 onNext={() => router.push("/home")} />,
  };

  return <div className="h-full p-5">{pages[pageIndex]}</div>;
}
