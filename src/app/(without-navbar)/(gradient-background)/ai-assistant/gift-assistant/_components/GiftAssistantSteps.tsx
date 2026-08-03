
import { User, type LucideIcon, UserStar, Heart, CircleDollarSign } from "lucide-react";
import GiftReceiver from "./steps/GiftReceiver";
import GiftPersonality from "./steps/GiftPersonality";
import GiftFavorite from "./steps/GiftFavorite";
import GiftPrice from "./steps/GiftPrice";

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
    contentNode: <GiftPersonality />,
    icon: UserStar,
  },
  {
    title: "سلایق",
    description: "Review and finish",
    contentNode: <GiftFavorite />,
    icon: Heart,
  },
  {
    title: "قیمت",
    description: "Review and finish",
    contentNode: <GiftPrice />,
    icon: CircleDollarSign,
  },
];