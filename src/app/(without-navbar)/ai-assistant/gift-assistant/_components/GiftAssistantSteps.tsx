
import { Check, User, FileText, CheckCircle2, type LucideIcon } from "lucide-react";
import GiftReceiver from "./steps/GiftReceiver";

interface Step {
  title: string;
  description: string;
  contentNode: React.ReactNode;
  icon: LucideIcon;
}

export const steps: Step[] = [
  {
    title: "گیرنده",
    description: "Create your account",
    contentNode: <GiftReceiver />,
    icon: User,
  },
  {
    title: "شخصیت",
    description: "Set up your profile",
    contentNode: <div></div>,
    icon: FileText,
  },
  {
    title: "سلایق",
    description: "Review and finish",
    contentNode: <div></div>,
    icon: CheckCircle2,
  },
  {
    title: "قیمت",
    description: "Review and finish",
    contentNode: <div></div>,
    icon: CheckCircle2,
  },
];