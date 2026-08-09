import { toPersianDigits } from "@/utils/numberConversions";
import { Mail, MessageSquareText, Phone } from "lucide-react";

export default function ContactUsSection() {
  return (
    <div className="bg-muted rounded-lg p-8">
      <h3 className="font-bold text-xl mb-5">ارتباط با ما</h3>
      <div className="bg-secondary text-secondary-foreground rounded-xl p-5 flex flex-row justify-start items-center gap-5 mb-3">
        <MessageSquareText className="text-secondary-foreground" />
        <p className="text-lg">شروع گفتگو</p>
      </div>
      <div className="rounded-xl p-5 py-2 flex flex-row justify-start items-center gap-5">
        <Mail />
        <div>
          <p className="text-md text-muted-foreground">ایمیل پشتیبانی</p>
          <p className="text-xl">support@bodokado.com</p>
        </div>
      </div>
      <div className="rounded-xl p-5 py-2 flex flex-row justify-start items-center gap-5">
        <Phone />
        <div>
          <p className="text-md text-muted-foreground">تلفن</p>
          <p className="text-xl">{toPersianDigits("03135227520")}</p>
        </div>
      </div>
    </div>
  );
}
