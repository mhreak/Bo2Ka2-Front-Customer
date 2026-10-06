import ImageUploadInput from "@/components/shared/inputs/ImageUploadInput";

interface EditAccountAvatarSectionProps {
  avatarFile?: File | null;
  onChangeAvatarFile?: (file: File | null) => void;
  avatarImagePath?: string;
  name?: string;
}

export default function EditAccountAvatarSection({
  avatarFile,
  onChangeAvatarFile,
  avatarImagePath,
  name,
}: EditAccountAvatarSectionProps) {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <ImageUploadInput
          value={avatarFile}
          onChange={onChangeAvatarFile}
          showCameraIcon={true}
          defaultImage={avatarImagePath}
        />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
    </div>
  );
}
