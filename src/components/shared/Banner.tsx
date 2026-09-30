import { cn } from "@/lib/utils";

interface Props {
  imageSrc?: string;
  onClick: () => void;
  containerCalassName?: string;
  description?: string;
  title?: string;
}

const Banner = ({
  imageSrc,
  onClick,
  containerCalassName,
  description,
  title,
}: Readonly<Props>) => {
  return (
    <div className="flex-center w-full">
      <div
        className={cn(
          "flex flex-col justify-center items-start gap-5 p-10 rounded-4xl w-full h-47 lg:w-full lg:h-64",
          containerCalassName,
        )}
        onClick={onClick}
        style={{ backgroundImage: imageSrc && `url(${imageSrc})` }}
      >
        {title && <span className="text-3xl text-white">{title}</span>}
        {description && <span className="text-white">{description}</span>}
      </div>
    </div>
  );
};

export default Banner;
