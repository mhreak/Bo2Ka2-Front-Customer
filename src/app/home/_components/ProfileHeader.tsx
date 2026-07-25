import Image from "next/image";
import React from "react";
import ProfileTitle from "./ProfileTitle";

const ProfileHeader = () => {
  return (
    <div className="flex flex-row justify-start gap-3">
      <div className="flex justify-center items-center">
        <Image
          src={"/samples/sample-avater.jpg"}
          alt="avatar-image"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <ProfileTitle />
    </div>
  );
};

export default ProfileHeader;
