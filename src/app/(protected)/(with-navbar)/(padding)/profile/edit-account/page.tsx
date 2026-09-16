"use client";

import EditAccountAvatarSection from "./_components/EditAccountAvatarSection";
import SharedPageHeader from "@/components/shared/SharedPageHeader";
import { FormConfig } from "@/components/formBuilder/types";
import { FormRenderer } from "@/components/formBuilder/components/form-renderer";
import { IdCard, Mail, UserRound } from "lucide-react";

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
    id: "birthdate",
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
  return (
    <div>
      <SharedPageHeader title="ویرایش حساب" />
      <EditAccountAvatarSection />
      <FormRenderer
        config={editProfileFormConfig}
        onSubmit={(data) => {
          console.log(data);
        }}
        submitButtonText="ذخیره تغییرات"
      />
    </div>
  );
}
