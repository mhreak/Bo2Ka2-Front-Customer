import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

interface ProfileAvatarSectionProps {
  avatarImagePath?: string;
  name?: string;
  role?: string;
}

export default function ProfileAvatarSection({
  avatarImagePath,
  name,
  role,
}: ProfileAvatarSectionProps) {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <Image
          src={avatarImagePath || "/images/default-user-avatar.jpg"}
          alt="sample-avatar"
          className="rounded-full border-2 border-gradient "
          width={92}
          height={92}
        />
        {/* <Badge className='absolute -bottom-1 right-0 bg-gradient rounded-full'>{"نخبگان"}</Badge> */}
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      {role && (
        <div className="flex-between gap-2">
          <Star className="text-accent size-3" fill="currentColor" />
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      )}
    </div>
  );
}
