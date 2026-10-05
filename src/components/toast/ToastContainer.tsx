"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";

import ToastItem from "./ToastItem";
import { useToast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const containerClasses = cn(
    // Position
    "fixed top-4 left-1/2 z-50",
    "-translate-x-1/2",

    // Layout
    "flex flex-col items-center gap-3",

    // Size
    "w-[calc(100%-2rem)]",
    "sm:w-[calc(100%-4rem)]",
    "md:w-[calc(100%-6rem)]",
    "max-w-xl",

    // Height
    "max-h-[calc(100vh-2rem)]",
    "overflow-hidden",

    // Padding
    "p-4 sm:p-6",

    // PWA / Safe area
    "pt-safe",
    "pb-safe",
    "safe-bottom",
    "safe-right",

    // Prevent interaction when empty
    toasts.length === 0 && "pointer-events-none",
  );

  return createPortal(
    <div className={containerClasses} aria-live="polite" aria-atomic="false">
      <AnimatePresence initial={false} mode="popLayout">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>,
    document.body,
  );
};

export default ToastContainer;
