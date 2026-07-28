"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const IntroPage1 = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      className="h-full flex flex-col justify-start relative overflow-hidden"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex-between">
        <Image
          src="/images/intro-logo.png"
          width={62}
          height={62}
          alt="intro-logo"
        />
        <div className="border bg-neutral-200/20 border-neutral-300/30 backdrop-blur-lg rounded-full flex-center p-1">
          <X size={25} className="text-neutral-400" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/intro-image-1.png"
          width={500}
          height={500}
          alt="intro-image-1"
        />
        <h2 className="font-bold text-3xl">قصد خرید کنید</h2>
        <p className="text-muted-foreground text-center text-lg">
          با وارد شدن در اپلیکیشن بدو کادو میتوانید به آنچه میخواهید دست پیدا
          کنید
        </p>
        <div className="flex-center gap-3">
          <div className="size-2 rounded-full bg-gray-400"></div>
          <div className="size-2 rounded-full bg-gray-400"></div>
          <div className="size-4 rounded-full bg-linear-to-r from-primary-lighter to-primary"></div>
        </div>
      </div>
      <div>
        <Button variant={"gradient"} className={"w-full"} onClick={onNext}>
          بعدی
        </Button>
      </div>
    </motion.div>
  );
};

const IntroPage2 = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      className="h-full flex flex-col justify-start"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex-between">
        <Image
          src="/images/intro-logo.png"
          width={62}
          height={62}
          alt="intro-logo"
        />
        <div className="border border-gray-400 rounded-full flex-center p-1">
          <X size={30} className="text-gray-400" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/intro-image-2.png"
          width={500}
          height={500}
          alt="intro-image-2"
        />
        <h2 className="font-bold text-3xl">مقایسه کنید</h2>
        <p className="text-muted-foreground text-center text-lg">
          برای عزیزانتان، پروفایل‌هایی بسازید تا نسب به شخصیتشان کادو برای آنها
          پیشنهاد شود
        </p>
        <div className="flex-center gap-3">
          <div className="size-2 rounded-full bg-gray-400"></div>
          <div className="size-4 rounded-full bg-linear-to-r from-primary-lighter to-primary"></div>
          <div className="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div>
        <Button variant={"gradient"} className={"w-full"} onClick={onNext}>
          بعدی
        </Button>
      </div>
    </motion.div>
  );
};

const IntroPage3 = ({ onNext }: { onNext: () => void }) => {
  return (
    <motion.div
      className="h-full flex flex-col justify-start"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
    >
      <div className="flex-between">
        <Image
          src="/images/intro-logo.png"
          width={62}
          height={62}
          alt="intro-logo"
        />
        <div className="border border-gray-400 rounded-full flex-center p-1">
          <X size={30} className="text-gray-400" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <Image
          src="/images/intro-image-3.png"
          width={500}
          height={500}
          alt="intro-image-3"
        />
        <h2 className="font-bold text-3xl">دریافت کنید</h2>
        <p className="text-muted-foreground text-center text-lg">
          پس از دریافت پیشنهاد و خرید در اپلیکیشن منتظر ارسال سریع کالا به
          دستشان باشید
        </p>
        <div className="flex-center gap-3">
          <div className="size-4 rounded-full bg-linear-to-r from-primary-lighter to-primary"></div>
          <div className="size-2 rounded-full bg-gray-400"></div>
          <div className="size-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
      <div>
        <Button variant={"gradient"} className={"w-full"} onClick={onNext}>
          بعدی
        </Button>
      </div>
    </motion.div>
  );
};

export default function Page() {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const router = useRouter()

  const pages = [
    <IntroPage1
      key="page1"
      onNext={() => setPageIndex((prev) => (prev + 1) % 3)}
    />,
    <IntroPage2
      key="page2"
      onNext={() => setPageIndex((prev) => (prev + 1) % 3)}
    />,
    <IntroPage3
      key="page3"
      onNext={() => router.push("/home")}
    />,
  ];

  return (
    <div className="h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pageIndex}
          className="h-full"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          {pages[pageIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
