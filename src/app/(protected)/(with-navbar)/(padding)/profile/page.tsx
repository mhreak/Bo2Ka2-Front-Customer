"use client";

import React, { useEffect } from "react";
import ProfileHeader from "./_components/ProfileHeader";
import ProfileAvatarSection from "./_components/ProfileAvatarSection";
import WalletSection from "./_components/WalletSection";
import CampaignSection from "./_components/campaign/CampaignSection";
import AccountSettingSection from "./_components/AccountSettingSection";
import { Button } from "@/components/ui/button";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";

import usersApi from "@/api/services/ApiService/usersApi";
import { User } from "@/types/api/endpointTypes/user.types";
import { toPersianDigits } from "@/utils/numberConversions";

const ProfilePage = () => {
  const {
    data: userData,
    isLoading,
    execute: getUserProfile,
  } = useApi<APIGetTemplate<User>>(usersApi.getProfile);

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <ProfileHeader />
      <ProfileAvatarSection
        avatarImagePath={userData?.data.avatarPath || undefined}
        name={
          userData?.data.fullName || toPersianDigits(userData?.data.phoneNumber)
        }
      />
      <WalletSection
        balance={userData?.data.walletCredit}
        onUpgradeClick={() => {}}
      />
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
