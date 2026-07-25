"use client";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Image from "next/image";
import SendInput from "@/components/shared/inputs/SendInput";
import { ListSortDescending } from "lucide-react";
import BackButton from "@/components/shared/BackButton";

const AIAssistant = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="flex-between">
        <BackButton />
        <Button variant={"outline"} size={"icon-lg"}>
          <ListSortDescending direction={"right"} />
        </Button>
      </div>
      <Empty className="flex-1">
        <EmptyHeader>
          <EmptyMedia>
            <Image
              src="/images/orb-symbol.png"
              alt="دستیار هوشمند"
              width={88}
              height={88}
              className="object-contain"
            />
          </EmptyMedia>
          <EmptyTitle className="font-bold">چطوری میتونم کمکت کنم؟</EmptyTitle>
        </EmptyHeader>
        <EmptyContent className="flex-col justify-center gap-2">
          <Button variant={"outline"} size={"sm"}>
            بهترین کادو برای روز مادر چیست؟
          </Button>
          <Button variant="outline" size={"sm"}>
            بهترین کادو برای روز پدر چیست؟
          </Button>
        </EmptyContent>
      </Empty>
      <SendInput value="" onChange={() => {}} placeholder="دنبال چی هستی؟" />
    </div>
  );
};

export default AIAssistant;
