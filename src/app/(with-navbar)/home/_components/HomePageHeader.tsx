import { Bell } from "lucide-react";
import React from "react";
import ProfileHeader from "./ProfileHeader";

const HomePageHeader = () => {
  return (
    <div className="flex flex-between">
      <ProfileHeader />
      <Bell />
    </div>
  );
};

export default HomePageHeader;
