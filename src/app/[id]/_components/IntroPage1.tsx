import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export const IntroPage1 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="h-full flex flex-col justify-start relative overflow-hidden">
      <div className="flex-between">
        <Image
          src="/images/bodokado-logo.png"
          width={62}
          height={62}
          alt="bodokado-logo"
        />
        <div className="border bg-neutral-200/20 border-neutral-300/30 backdrop-blur-lg rounded-full flex-center p-1">
          <X size={25} className="text-neutral-400" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="relative aspect-square size-100">
          <Image src="/images/intro-image-1.png" fill alt="intro-image-1" />
        </div>
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
    </div>
  );
};
