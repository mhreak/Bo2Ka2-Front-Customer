"use client";

import { NumberTicker } from "@/components/shadcn-space/number-ticker/number-ticker-03";
import React, { useEffect, useState } from "react";

interface Props {
  seconds: number;
}

const CountdownBanner = ({ seconds }: Props) => {
  const [sec, setSec] = useState(seconds);

  useEffect(() => {
    setSec(seconds);
  }, [seconds]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="bg-gradient rounded-4xl min-w-54 h-64 flex flex-col justify-center items-center p-3 gap-8">
      <NumberTicker seconds={sec} className="text-3xl " />
      <p className="font-extrabold text-4xl text-primary-foreground text-center">
        تخفیف های ویژه
      </p>
    </div>
  );
};

export default CountdownBanner;
