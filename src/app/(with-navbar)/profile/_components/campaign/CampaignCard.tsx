import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";


export default function CampaignCard() {
  return (
    <div className="bg-card p-5 rounded-md flex flex-col gap-3">
      <div className="flex-between mb-8">
        <h5 className="font-semibold text-lg">هدیه بازنشستگی مدیر</h5>
        <p className="font-semibold">۱۵۰،۰۰۰ تومان</p>
      </div>
      <Progress value={33} />
      <div className="flex-between">
        <AvatarGroup className="grayscale">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+۱۲</AvatarGroupCount>
        </AvatarGroup>
        
            <Button
              variant="link"
            >
              <span className="text-gradient font-semibold">{"مشارکت"}</span>
              <ArrowLeft className="size-6" />
          
            </Button>
      </div>
    </div>
  );
}
