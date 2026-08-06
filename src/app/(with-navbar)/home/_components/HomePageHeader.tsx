import { Bot } from "lucide-react";
import React from "react";
import ProfileHeader from "./ProfileHeader";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

const HomePageHeader = () => {
  return (
    <div className="flex flex-between">
      <ProfileHeader />
      <Link href={"/ai-assistant/gift-assistant"}>
      <Button variant={"gradient"} size={"icon"} className="[&_svg:not([class*='size-'])]:size-5" >
        <Bot className="text-primary-foreground" />

      </Button>
      </Link>
    </div>
  );
};

export default HomePageHeader;
