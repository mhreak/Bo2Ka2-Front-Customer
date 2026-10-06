"use client";

import AuthService from "@/api/services/AuthService";
import { NumberTicker } from "@/components/shadcn-space/number-ticker/number-ticker-03";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
import useToast from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function OtpPage() {
  const searchParams = useSearchParams();

  const expiresIn = searchParams.get("expiresIn");
  const phoneNumber = searchParams.get("phoneNumber") ?? "";
  const returnUrl = searchParams.get("returnUrl");

  const router = useTransitionRouter();

  const { error, success } = useToast();

  const [value, setValue] = useState("");
  const [sec, setSec] = useState(120);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLogging, setIsLogging] = useState<boolean>(false);

  useEffect(() => {
    if (expiresIn) {
      setSec(Number(expiresIn));
    }
  }, [expiresIn]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOtpSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === "") error("لطفا کد ارسال شده را وارد کنید");
    else if (value.length < 5)
      error("لطفا کد ارسال شده را به صورت کامل وارد کنید");
    else {
      setIsLoading(true);
      try {
        await AuthService.loginOtp({
          code: value,
          mobile: phoneNumber,
        });
        // if (returnUrl) router.push(`${returnUrl}`);
        // else
        router.push("/home");
        success("به وب سایت بدو کادو خوش آمدید", "ورود موفق", 3000);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSendAgain = async () => {
    setIsLogging(true);
    try {
      const response = await AuthService.sendOtpGeneral({
        mobile: phoneNumber,
      });
      setSec(response.data.expiresIn);
    } catch (error) {
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <form onSubmit={(e) => handleOtpSubmit(e)}>
      <div className="mx-auto flex h-full w-full max-w-md flex-col justify-center items-center gap-14">
        <div className="flex flex-col items-center justify-center gap-5 mt-30">
          <Image
            src="/images/bodokado-logo.png"
            width={50}
            height={50}
            alt="bodokado-logo"
          />
          <h3 className="font-semibold text-lg">کد ارسال شد</h3>
          <p className="text-muted-foreground text-center">{`ما کد را به شماره ${phoneNumber}  ارسال کرده ایم ،برای احراز هویت لطفا آن را وارد کنید :`}</p>
          <NumberTicker
            showHours={false}
            seconds={sec}
            className="text-xl flex gap-0"
            numberClassName="bg-transparent"
            seperatorClassName="text-text"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div dir="ltr">
            <InputOTP
              dir="ltr"
              maxLength={5}
              pattern={REGEXP_ONLY_DIGITS}
              value={value}
              onChange={(value) => setValue(value)}
              className="[&_input]:text-left [&_input]:direction-ltr input-otp"
              style={{ direction: "ltr" }}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <span>
            کد را دریافت نکردید؟
            <button
              className={cn(
                "text-gradient mr-2 cursor-pointer active:translate-y-0.5 transition-default",
                (sec !== 0 || isLogging) &&
                  "text-muted-foreground cursor-not-allowed",
              )}
              disabled={sec !== 0 || isLogging}
              onClick={handleSendAgain}
            >
              ارسال دوباره
            </button>
          </span>
        </div>
        <div className="h-full w-full flex flex-col justify-end">
          <Button
            variant={"gradient"}
            type="submit"
            className={"mt-auto"}
            disabled={isLoading}
          >
            {isLoading && <Spinner />}
            {isLoading ? "در حال ورود..." : "ورود"}
          </Button>
        </div>
      </div>
    </form>
  );
}
