import { Home, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export const navItems: NavItem[] = [
  {
    id: "home",
    label: "خانه",
    icon: (
      <Link href="/home">
        <Home size={24} />
      </Link>
    ),
    activeIcon: (
      <div className="text-primary-lighter bg-clip-text bg-linear-to-r from-primary-lighter to-primary">
        <Home size={24} />
      </div>
    ),
  },
  {
    id: "search",
    label: "جستجو",
    icon: (
      <Link href="/search">
        <Search size={24} />
      </Link>
    ),
    activeIcon: (
      <div className="text-primary-lighter bg-clip-text bg-linear-to-r from-primary-lighter to-primary">
        <Search size={24} />
      </div>
    ),
  },
  {
    id: "assistant",
    label: "دستیار هوشمند",
    icon: (
      <Link href="/ai-assistant">
        <div className="relative -mt-8">
          <Image
            src="/images/orb-symbol.png"
            alt="دستیار هوشمند"
            width={88}
            height={88}
            className="object-contain"
          />
        </div>
      </Link>
    ),
    activeIcon: (
      <motion.div
        className="relative -mt-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image
          src="/images/orb-symbol.png"
          alt="دستیار هوشمند"
          width={98}
          height={98}
          className="object-contain "
        />
        {/* حلقه نورانی دور عکس */}
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary-lighter to-primary opacity-20 blur-md -z-10" />
      </motion.div>
    ),
  },
  {
    id: "cart",
    label: "سبدخرید",
    icon: (
      <Link href="/cart">
        <ShoppingBag size={24} />
      </Link>
    ),
    activeIcon: (
      <div className="text-primary-lighter bg-clip-text bg-linear-to-r from-primary-lighter to-primary">
        <ShoppingBag size={24} />
      </div>
    ),
  },
  {
    id: "profile",
    label: "پروفایل",
    icon: (
      <Link href="/profile">
        <User size={24} />
      </Link>
    ),
    activeIcon: (
      <div className="text-primary-lighter bg-clip-text bg-linear-to-r from-primary-lighter to-primary">
        <User size={24} />
      </div>
    ),
  },
];
