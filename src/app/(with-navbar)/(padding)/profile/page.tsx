"use client";

import React from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileAvatarSection from "./_components/ProfileAvatarSection";
import WalletSection from "./_components/WalletSection";
import CampaignSection from "./_components/campaign/CampaignSection";
import AccountSettingSection from "./_components/AccountSettingSection";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileAvatarSection />
      <WalletSection balance={150000} onUpgradeClick={() => {}} />
      <CampaignSection />
      <AccountSettingSection />
      <Button variant={"ghost"} className={"w-full mb-5"}>
        خروج از حساب
      </Button>
      <Button variant={"destructive"} className={"w-full mb-8"}>
        حذف حساب
      </Button>
    </div>
  );
};

export default ProfilePage;
