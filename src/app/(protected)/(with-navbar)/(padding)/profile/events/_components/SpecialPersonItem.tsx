import { Badge } from "@/components/ui/badge";
import { Calendar, Pencil, Heart, Palette, Wind } from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

interface SpecialPersonItemProps {
  id: number;
  name: string;
  avatarImagePath: string;
  description: string;
  colorPalette: string[];
  notes: string[];
  favorites: string[];
}

export default function SpecialPersonItem({
  id,
  name,
  avatarImagePath,
  description,
  colorPalette,
  notes,
  favorites,
}: SpecialPersonItemProps) {
  return (
    <div className="relative border border-border rounded-3xl p-5 mb-5">
      <div className="flex flex-row justify-start items-center gap-3 mb-8">
        <Image
          src={avatarImagePath}
          alt={name}
          width={60}
          height={60}
          className="rounded-full"
        />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <div className="flex items-center gap-2">
            <Calendar className="text-primary size-4" />
            <p className="text-gradient text-xs">{description}</p>
          </div>
        </div>
      </div>

      <div className="space-y-1 mb-5">
        <div className="flex flex-row items-center">
          <Palette className="size-5 ml-5" />
          <p>پالت رنگی</p>
        </div>
        <div className="flex flex-row items-center gap-3 mr-10">
          {colorPalette.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color }}
              className="size-6 rounded-full border border-[#D5C2C6]"
            />
          ))}
        </div>
      </div>

      <div className="space-y-1 mb-5">
        <div className="flex flex-row items-center">
          <Wind className="size-5 ml-5" />
          <p>یادداشت های امضا</p>
        </div>
        <div className="mr-10">
          {notes.map((note) => (
            <Badge key={note} variant={"ghost"} className="ml-1 px-4 py-3">
              {note}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex flex-row items-center">
          <Heart className="size-5 ml-5" />
          <p>علاقه مندی ها</p>
        </div>
        <div className="mr-10">
          {favorites.map((favorite) => (
            <Badge
              key={favorite}
              variant={"secondary"}
              className="ml-1 px-4 py-3 font-extralight"
            >
              {favorite}
            </Badge>
          ))}
        </div>
      </div>

      <Link href={`/profile/events/add-person?mode=edit&id=${id}`}>
        <Pencil className="absolute top-5 left-5 size-5" />
      </Link>
    </div>
  );
}
