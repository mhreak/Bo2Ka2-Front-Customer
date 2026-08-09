import React from "react";
import { OrderData, OrderStatus } from "../_types/order.type";
import Image from "next/image";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperNav,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/reui/stepper";
import { CheckIcon, Package, PackageCheck, Truck } from "lucide-react";
import InvitationCode from "@/assets/icons/InvitationCode";
import { Button } from "@/components/ui/button";

interface ActiveOrderItemProps {
  order: OrderData;
}

const stepperIcons: Record< number, React.ReactNode> = {
    0: <CheckIcon className="size-5" />,
    1: <Package className="size-5" />,
    2: <Truck className="size-5" />,
    3: <PackageCheck className="size-5" />,
}
const activeStepperMapper: Record< OrderStatus, number> = {
    "registered": 1,
    "packed": 2,
    "shipping": 3,
    "delivered": 4,
}

export default function ActiveOrderItem({ order }: ActiveOrderItemProps) {
  return (
    <div className="border border-border rounded-2xl p-5 flex flex-col justify-start gap-8 mb-5">
      <div className="flex flex-row justify-start gap-5 mb-8">
        <Image
          src={order.product.image}
          alt={order.product.title}
          width={80}
          height={80}
          className={"rounded-2xl"}
        />
        <div className="flex flex-col">
          <p className="text-accent">کد سفارش: {order.orderCode}</p>
          <h4 className="text-xl text-text">{order.product.title}</h4>
          <p className="text-muted-foreground mt-5">
            {order.product.description}
          </p>
        </div>
      </div>
      <Stepper
        className="w-full max-w-md space-y-8"
        defaultValue={activeStepperMapper[order.status.current]}
        indicators={{
          completed: <CheckIcon className="size-5" />,
        }}
      >
        <StepperNav>
          {order.status.steps.map((step, index) => (
            <StepperItem
              key={index}
              step={index + 1}
              className="relative flex-1 items-start"
              >
                {order.status.steps.length > index + 1 && (
                  <StepperSeparator/>
                )}
              <StepperTrigger className="flex flex-col gap-2.5">
                <StepperIndicator>{stepperIcons[index]}</StepperIndicator>
                <StepperTitle>{step.title}</StepperTitle>
              </StepperTrigger>
            </StepperItem>
          ))}
        </StepperNav>
      </Stepper>
      <hr />
      <div className="flex flex-row justify-start gap-14">
        <div className="w-1/2 ">
            <p className="text-muted-foreground">زمان تقریبی رسیدن</p>
             <p className="text-xl">{order.schedule.date} {order.schedule.timeFrom} {"تا"} {order.schedule.timeTo}</p>
        </div>
        <div className="w-1/2">
          <p className="text-muted-foreground">آدرس حمل و نقل</p>
          <p className="text-xl">{order.delivery.address}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4">
          <div className="border border-border rounded-full p-4"><InvitationCode /></div>
          <Button className={"w-fit flex-1"} variant={"gradient"}>پیگیری محموله</Button>
      </div>
    </div>
  );
}
