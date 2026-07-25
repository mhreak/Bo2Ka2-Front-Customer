import React from "react";
import { Gift, Heart, Calendar, Users, Sparkles } from "lucide-react";
import Image from "next/image";

const Stories = () => {
  const items = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "تمین کنندگان",
      imageSrc: "/samples/sample-story-1.jpg",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      label: "جديد",
      imageSrc: "/samples/sample-story-2.jpg",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "سلامتی",
      imageSrc: "/samples/sample-story-3.jpg",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      label: "هدیه",
      imageSrc: "/samples/sample-story-4.jpg",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "مناسبت",
      imageSrc: "/samples/sample-story-5.jpg",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "سلامتی",
      imageSrc: "/samples/sample-story-3.jpg",
    },
    {
      icon: <Gift className="w-6 h-6" />,
      label: "هدیه",
      imageSrc: "/samples/sample-story-4.jpg",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "مناسبت",
      imageSrc: "/samples/sample-story-5.jpg",
    },
  ];

  return (
    <div className="w-full relative">
      {/* Container with horizontal scroll */}
      <div className="flex flex-row justify-start items-center gap-1 overflow-x-auto overflow-y-hidden py-4 px-2 scroll-smooth hide-scrollbar">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex flex-col items-center gap-2"
            style={{ width: "80px" }} // Fixed width for each item
          >
            {/* Story ring */}
            <div className="border-2 border-rose-400 rounded-full p-0.5 hover:border-rose-500 transition-colors duration-200">
              <Image
                src={item.imageSrc}
                alt={item.label}
                width={56}
                height={56}
                className="rounded-full object-cover"
                priority={idx < 4}
              />
            </div>

            {/* Label */}
            <span className="text-xs text-muted-foreground truncate w-full text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      {/* Styles to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default Stories;
