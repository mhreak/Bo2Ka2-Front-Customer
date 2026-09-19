import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export const IntroPage3 = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="h-full flex flex-col justify-start">
      <div className="flex-between">
        <Image
          src="/images/bodokado-logo.png"
          width={62}
          height={62}
          alt="bodokado-logo"
        />
        <div className="border border-gray-400 rounded-full flex-center p-1">
          <X size={30} className="text-gray-400" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="relative aspect-square size-100">
          <Image src="/images/intro-image-3.png" fill alt="intro-image-3" />
        </div>
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
    </div>
  );
};
