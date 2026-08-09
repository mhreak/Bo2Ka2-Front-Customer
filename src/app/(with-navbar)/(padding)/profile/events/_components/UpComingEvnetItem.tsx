import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React from "react";

const upComingEvnetItemVariants = cva(
  "relative rounded-2xl p-5 flex flex-row justify-between items-center min-w-80 mb-16",
  {
    variants: {
      variant: {
        default: "bg-muted",
        primary: "bg-gradient text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface UpcomingEventItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof upComingEvnetItemVariants> {
  title: string;
  description: string;
  avatarImagePath: string;
  personName: string;
  iconPathName?: string;
}

const UpComingEvnetItem = React.forwardRef<
  HTMLDivElement,
  UpcomingEventItemProps
>(
  (
    { className, variant, title, description, avatarImagePath, personName,iconPathName, ...props },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(upComingEvnetItemVariants({ variant }),className)} {...props}> 
        <div className="flex flex-col gap-2">
            <p className={cn("text-sm font-extralight", variant==="default" && "text-gradient")}>{description}</p>
            <h3 className="font-bold text-3xl">{title}</h3>
            <div className="flex flex-row items-center gap-2 mt-4">
                <Image src={avatarImagePath} alt={avatarImagePath} width={25} height={25} className={cn("object-cover rounded-full",variant==="default"&&"ring-2 ring-muted-foreground")}/>
                <p className="text-xs font-thin">{personName}</p>
            </div>
        </div>
        {iconPathName && <Image src={iconPathName} alt={iconPathName} width={80} height={80} className={cn("absolute bottom-0 left-5")}/>}
      </div>
    );
  },
);

export default UpComingEvnetItem;
