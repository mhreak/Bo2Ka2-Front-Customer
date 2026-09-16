import React from "react";
import CampaignCard from "./CampaignCard";
import { CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CampaignHeader from "./CampaignHeader";

export default function CampaignSection() {
  return (
    <div className="px-5 py-8">
      <CampaignHeader />

      <div className="my-6">
        <CampaignCard />
      </div>

      <Button variant={"gradient"} className="w-full">
        <CirclePlus />
        ایجاد کمپین جدید
      </Button>
    </div>
  );
}
