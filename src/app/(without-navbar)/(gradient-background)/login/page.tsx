"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Phone, User } from "lucide-react";

import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  PersonalAccountLoginFormValues,
  personalAccountLoginSchema,
} from "./personalAccountLogin.shema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  OrganizationAccountLoginFormValues,
  organizationAccountLoginSchema,
} from "./organizationAccountLogin.schema";
import PasswordInput from "@/components/shared/inputs/PasswordInput";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const {
    register,
    handleSubmit: handlePersonalAccountSubmit,
    formState: { errors: personalErrors },
  } = useForm<PersonalAccountLoginFormValues>({
    resolver: zodResolver(personalAccountLoginSchema),
    defaultValues: {
      mobile: undefined,
    },
  });
  const {
    control,
    register: organizationRegister,
    handleSubmit: handleOrganizationSubmit,
    formState: { errors: organizationErrors },
  } = useForm<OrganizationAccountLoginFormValues>({
    resolver: zodResolver(organizationAccountLoginSchema),
    defaultValues: {
      username: undefined,
      password: undefined,
    },
  });

  return (
    <div className="flex flex-col justify-end items-start gap-5 mx-12 h-full">
      <div className="flex flex-row justify-start items-center gap-5 mt-30">
        <Image
          src="/images/bodokado-logo.png"
          width={50}
          height={50}
          alt="bodokado-logo"
        />
        <h3 className="font-semibold text-lg">ورود به حساب</h3>
      </div>
      <p className="text-sm text-muted-foreground">
        ابتدا از طریق تب ها نوع اکانت خود را انتخاب کنید، سپس با وارد کردن
        اطلاعات درست به حساب کاربری خود دسترسی پیدا کنید
      </p>
      <Tabs className={"w-full flex-1"}>
        <TabsList className={"w-full"}>
          <TabsTrigger value={"personalAccount"}>حساب شخصی</TabsTrigger>
          <TabsTrigger value={"organizationAccount"}>حساب سازمانی</TabsTrigger>
        </TabsList>
        <TabsContent value={"personalAccount"} className={"flex flex-col"}>
          <div className="mt-20 h-60">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-medium text-text/70">
                شماره موبایل
              </label>
              <InputGroup className="rounded-4xl bg-background border-none">
                <InputGroupInput
                  {...register("mobile")}
                  placeholder="لطفاً شماره موبایل خود را وارد کنید"
                  className={cn(
                    "text-text placeholder:text-muted-foreground/50",
                    personalErrors.mobile &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                />
                <InputGroupAddon align="inline-start">
                  <Phone className="size-6 text-muted-foreground/50" />
                </InputGroupAddon>
              </InputGroup>
              {personalErrors.mobile && (
                <p className="text-xs text-red-500">
                  {personalErrors.mobile.message}
                </p>
              )}
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <Button variant={"gradient"} type="submit" className={"mt-auto"}>
              ورود
            </Button>
          </div>
        </TabsContent>
        <TabsContent value={"organizationAccount"} className={"flex flex-col"}>
          <div className="mt-20 h-60">
            <div className="flex flex-col gap-4 mb-8">
              <label className="text-lg font-medium text-text/70">
                نام کاربری
              </label>
              <InputGroup className="rounded-4xl bg-background border-none">
                <InputGroupInput
                  {...organizationRegister("username")}
                  placeholder="لطفاً نام کاربری خود را وارد کنید"
                  className={cn(
                    "text-text placeholder:text-muted-foreground/50",
                    organizationErrors.username &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                />
                {/* <InputGroupAddon align="inline-start">
                  <User className="size-6 text-muted-foreground/50" />
                </InputGroupAddon> */}
              </InputGroup>
              {organizationErrors.username && (
                <p className="text-xs text-red-500">
                  {organizationErrors.username.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <label className="text-lg font-medium text-text/70">
                رمز عبور
              </label>
              <Controller
                control={control}
                name="password"
                render={({
                  field: { onChange, onBlur, value, ref },
                  fieldState: { error },
                }) => (
                  <PasswordInput
                    id={"password"}
                    placeholder={"لطفا رمز عبور خود را وارد کنید"}
                    value={value ?? ""}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    className={cn(
                      "placeholder:text-muted-foreground/50",
                      error &&
                        "border-destructive focus-visible:ring-destructive",
                    )}
                    inputClassName="border-none rounded-4xl bg-background px-4"
                  />
                )}
              />
            </div>
          </div>
          <div className="h-full flex flex-col justify-end">
            <Button variant={"gradient"} type="submit" className={"mt-auto"}>
              ورود
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
