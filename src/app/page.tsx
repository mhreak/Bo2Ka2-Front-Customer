"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTransitionRouter } from "next-view-transitions";

export default function Page() {
  const router = useTransitionRouter();

  useEffect(() => {
    router.push("/1");
  }, []);

  return (
    <div className="h-full overflow-hidden mx-auto xl:60 2xl:mx-100"></div>
  );
}
