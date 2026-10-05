"use client";

import { useEffect, useState } from "react";
import { Share, PlusSquare, CheckCircle2 } from "lucide-react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { toPersianDigits } from "@/utils/numberConversions";
import { Button } from "./ui/button";

interface IOSInstallDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const IOSInstallDialog = ({ open, onOpenChange }: IOSInstallDialogProps) => {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [internalOpen, setInternalOpen] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const ios =
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      // iOS Safari
      (
        window.navigator as Navigator & {
          standalone?: boolean;
        }
      ).standalone === true;

    console.log("ios:", ios);

    setIsIOS(ios);
    setIsStandalone(standalone);

    if (ios && !standalone) {
      setInternalOpen(true);
    }
  }, []);

  const isControlled = open !== undefined;
  const dialogOpen = isControlled ? open : internalOpen;

  const handleOpenChange = (value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }

    onOpenChange?.(value);
  };

  if (!isIOS || isStandalone) {
    return null;
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className={cn(
          "w-[calc(100%-2rem)]",
          "max-w-md",
          "rounded-3xl",
          "p-0 gap-1",
          "overflow-hidden",
        )}
      >
        {/* Header */}
        <DialogHeader className="px-6 pt-6 text-center">
          <DialogTitle className="text-xl font-bold text-center">
            نصب اپلیکیشن
          </DialogTitle>

          <DialogDescription className="text-sm leading-7">
            برای نصب این اپلیکیشن روی آیفون، مراحل زیر را انجام دهید.
          </DialogDescription>
        </DialogHeader>

        {/* Steps */}
        <div className="space-y-3 px-6 py-5">
          {/* Step 1 */}
          <div className="flex items-start gap-3 rounded-2xl border bg-muted/40 p-4">
            <StepNumber number={1} />

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold">دکمه Share را بزنید</h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                در پایین صفحه Safari روی آیکون
                <span className="mx-1 inline-flex items-center align-middle">
                  <Share className="size-4" />
                </span>
                <strong>Share</strong> بزنید.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-3 rounded-2xl border bg-muted/40 p-4">
            <StepNumber number={2} />

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold">
                Add to Home Screen را انتخاب کنید
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                در منوی باز شده گزینه
                <span className="mx-1 font-semibold text-foreground">
                  Add to Home Screen
                </span>
                را انتخاب کنید.
              </p>
            </div>

            <PlusSquare className="mt-1 size-5 shrink-0 text-primary" />
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-3 rounded-2xl border bg-muted/40 p-4">
            <StepNumber number={3} />

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold">نصب را تأیید کنید</h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                روی
                <span className="mx-1 font-semibold text-foreground">Add</span>
                بزنید تا اپلیکیشن به صفحه اصلی آیفون اضافه شود.
              </p>
            </div>

            <CheckCircle2 className="mt-1 size-5 shrink-0 text-primary" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t bg-muted/20 px-6 py-4">
          <p className="text-center text-xs leading-6 text-muted-foreground">
            بعد از نصب، می‌توانید اپلیکیشن را مستقیماً از صفحه اصلی آیفون اجرا
            کنید.
          </p>
        </div>
        <DialogClose
          render={
            <Button
              variant={"gradient"}
              size={"lg"}
              className={"m-2 mb-4 mx-auto w-[60%]"}
            >
              متوجه شدم
            </Button>
          }
        ></DialogClose>
      </DialogContent>
    </Dialog>
  );
};

interface StepNumberProps {
  number: number;
}

const StepNumber = ({ number }: StepNumberProps) => {
  return (
    <div
      className={cn(
        "flex size-8 shrink-0 items-center justify-center",
        "rounded-full",
        "bg-gradient",
        "text-sm font-bold",
        "text-primary-foreground",
      )}
    >
      {toPersianDigits(number)}
    </div>
  );
};

export default IOSInstallDialog;
