interface ComplexItemProps {
  imageUrl: string;
  title: string;
  description?: string;
  // link:string;
}

export default function ComplexItem({
  imageUrl,
  title,
  description,
}: ComplexItemProps) {
  return (
    <div
      className="relative mb-5 rounded-4xl bg-cover bg-center p-8 h-60"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 via-black/30 to-transparent rounded-b-4xl" />
      <div className="mt-auto h-full flex flex-col justify-end z-50">
        <h2 className="font-semibold text-3xl text-white">{title}</h2>
        <p className="font-thin text-sm mt-1 text-white">{description}</p>
      </div>
    </div>
  );
}
