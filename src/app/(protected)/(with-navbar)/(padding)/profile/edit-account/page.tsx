"use client";

import EditAccountAvatarSection from "./_components/EditAccountAvatarSection";
import SharedPageHeader from "@/components/shared/SharedPageHeader";
import { FormConfig } from "@/components/formBuilder/types";
import { FormRenderer } from "@/components/formBuilder/components/form-renderer";
import { IdCard, Mail, UserRound } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { User, UserEdit } from "@/types/api/endpointTypes/user.types";
import usersApi from "@/api/services/ApiService/usersApi";
import { useEffect, useState } from "react";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { toPersianDigits } from "@/utils/numberConversions";
import { generateFormConfig } from "@/utils/utillityFunctions";
import useToast from "@/hooks/useToast";
import { Skeleton } from "@/components/ui/skeleton";
import fileApi from "@/api/services/ApiService/filesApi";
import {
  FileUploadData,
  FileUploadResponse,
} from "@/types/api/endpointTypes/files.types";

const formIconsClassName = "size-5";

const editProfileFormConfig: FormConfig = [
  {
    id: "fullName",
    label: "نام و نام خانوادگی",
    type: "text",
    placeholder: "اشکان طهماسبی",
    icon: "UserRound",
  },
  {
    id: "nationalCode",
    label: "کد ملی",
    type: "nationalcode",
    placeholder: "۱۲۷۴۷۵۱۹۸۵۶",
    icon: "IdCard",
  },
  {
    id: "email",
    label: "ایمیل",
    type: "email",
    placeholder: "ashkan@gmail.com",
    icon: "Mail",
  },
  {
    id: "birthDate",
    label: "تاریخ تولد",
    type: "date",
    placeholder: "1405/05/25",
  },
  {
    id: "address-section",
    title: "جزئیات آدرس",
    type: "section",
    wrapperVariant: "bordered",
    children: [
      {
        id: "address",
        label: "آدرس",
        type: "textarea",
        placeholder: "اصفهان،خیابان نظر شرقی",
      },
      {
        id: "location",
        label: "موقعیت مکانی",
        type: "location",
      },
    ],
  },
];

export default function EditAccountPage() {
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const { success } = useToast();

  const {
    data: userData,
    isLoading,
    execute: getUserProfile,
  } = useApi<APIGetTemplate<User>>(usersApi.getProfile);

  const { isLoading: isSettingProfile, execute: setUserProfile } = useApi<
    APIGetTemplate<UserEdit>,
    UserEdit
  >(usersApi.setProfile, {
    onSuccess() {
      success("پروفایل با موفقیت ویرایش شد.");
      getUserProfile();
    },
  });

  const { execute: uploadFile, isLoading: isUploadingFile } = useApi<
    APIGetTemplate<FileUploadResponse>,
    FileUploadData
  >(fileApi.uploadFile);

  const isSubmitting = isUploadingFile || isSettingProfile;

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleSubmitForm = async (data: any) => {
    let avatarFileId = undefined;

    if (avatarFile) {
      const uploadResponse = await uploadFile({
        File: avatarFile,
        FileType: "Avatar",
      });

      avatarFileId = uploadResponse.data.id;
    }

    const formattedData: UserEdit = {
      firstName: data.fullName.split(" ")[0],
      lastName: data.fullName.split(" ")[1],
      nationalCode: data.nationalCode,
      email: data.email,
      birthDate: data.birthDate,
      address: data.address,
      avatarFileId,
    };

    await setUserProfile(formattedData);
  };

  const formConfig = generateFormConfig(editProfileFormConfig, {
    values: userData?.data,
  });

  if (isLoading)
    return (
      <div className="mt-30 flex flex-col items-center gap-8">
        <Skeleton className="size-24 rounded-full" />
        <Skeleton className="w-40 h-5 rounded-lg mb-14" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
        <Skeleton className="w-[70%] h-14 rounded-xl" />
      </div>
    );
  return (
    <div>
      <SharedPageHeader title="ویرایش حساب" />
      <EditAccountAvatarSection
        name={
          userData?.data.fullName || toPersianDigits(userData?.data.phoneNumber)
        }
        avatarImagePath={userData?.data.avatarPath || undefined}
        avatarFile={avatarFile}
        onChangeAvatarFile={setAvatarFile}
      />
      <FormRenderer
        config={formConfig}
        onSubmit={handleSubmitForm}
        submitButtonText="ذخیره تغییرات"
        isSubmitting={isSubmitting}
        isSubmittingText="در حال ارسال اطلاعات..."
        disableSubmitButton={isSubmitting}
      />
    </div>
  );
}
