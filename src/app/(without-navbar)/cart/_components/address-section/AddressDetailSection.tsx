import { Button } from "@/components/ui/button";
import  Link  from "next/link";
import React from "react";

interface AddressDetailSectionProps {
  title: string;
  descrption: string;
  changeButtonText?: string;
}

export default function AddressDetailSection({
  title,
  descrption,
  changeButtonText = "تغییر",
}: AddressDetailSectionProps) {
  return (
    <div className="pt-8 flex flex-row justify-start gap-4">
      <div className="flex-1 flex flex-col gap-1">
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground text-md">{descrption}</p>
      </div>
      <div>
        <Link href="/map">
          <Button variant={"link"} className={"text-primary-lighter"}>
            {changeButtonText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
