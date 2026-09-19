/**
 * OrbitAvatarBadge
 * -----------------
 * کامپوننت مستقل برای Next.js + Tailwind CSS v4 (TypeScript)
 * دایره‌ی پروفایل با حلقه‌های گرادیانی و آیکون‌های شناور (ستاره/اتم یا هر لوگوی دیگر)
 *
 * استفاده:
 * <OrbitAvatarBadge
 *   avatarSrc="/images/girl.png"
 *   decorations={[
 *     { src: "/logos/star-1.png", top: "4%", left: "8%", size: 40 },
 *     { src: "/logos/atom-1.png", top: "2%", right: "6%", size: 60 },
 *     { src: "/logos/atom-2.png", top: "38%", left: "-4%", size: 34 },
 *     { src: "/logos/star-2.png", bottom: "18%", right: "-2%", size: 52 },
 *     { src: "/logos/star-3.png", bottom: "2%", left: "14%", size: 44 },
 *   ]}
 * />
 *
 * هر آیتم decorations شامل src (مسیر عکس لوگو/آیکون) و موقعیت (top/left/right/bottom)
 * و اختیاری size / delay / duration برای کنترل انیمیشن شناور است.
 * اگر decorations پاس داده نشود، از یک آرایه‌ی نمونه (placeholder) استفاده می‌شود.
 */

export interface OrbitDecoration {
  src: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  delay?: string;
  duration?: string;
  blur?: number;
}

export interface OrbitAvatarBadgeProps {
  avatarSrc?: string;
  avatarAlt?: string;
  decorations?: OrbitDecoration[];
  size?: number;
}

const defaultDecorations: OrbitDecoration[] = [
  {
    src: "/icons/star-1.png",
    top: "4%",
    left: "6%",
    size: 38,
    delay: "0s",
    duration: "6s",
    blur: 1.5,
  },
  {
    src: "/icons/atom-1.png",
    top: "0%",
    right: "2%",
    size: 58,
    delay: "0.8s",
    duration: "5s",
  },
  {
    src: "/icons/atom-1.png",
    top: "40%",
    left: "-6%",
    size: 32,
    delay: "1.5s",
    duration: "7s",
    blur: 1,
  },
  {
    src: "/icons/star-1.png",
    bottom: "36%",
    right: "-5%",
    size: 30,
    delay: "1s",
    duration: "6.5s",
    blur: 1,
  },
  {
    src: "/icons/atom-1.png",
    bottom: "10%",
    right: "8%",
    size: 52,
    delay: "0.5s",
    duration: "8s",
    blur: 1.5,
  },
  {
    src: "/icons/star-1.png",
    bottom: "0%",
    left: "12%",
    size: 60,
    delay: "0.4s",
    duration: "5.5s",
  },
];

export default function GiftPersonAvatar({
  avatarSrc,
  avatarAlt = "Profile photo",
  decorations = defaultDecorations,
  size = 340,
}: OrbitAvatarBadgeProps) {
  const ringScales = [1, 0.86, 0.72];

  return (
    <div
      className="relative flex items-center justify-center w-full mx-auto mb-16 mt-5"
      style={{ width: size, height: size }}
    >
      {/* درخشش نرم پس‌زمینه */}
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(196,168,255,0.35), rgba(255,214,240,0.15) 55%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* حلقه‌های هم‌مرکز با گرادیان بنفش-صورتی */}
      {ringScales.map((scale, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size * scale,
            height: size * scale,
            background:
              "conic-gradient(from 200deg, #c4b5fd, #f9a8d4 35%, #ffffff 55%, #a78bfa 80%, #c4b5fd)",
            WebkitMask:
              "radial-gradient(farthest-side, transparent calc(100% - 6.5px), #000 calc(100% - 2.5px))",
            mask: "radial-gradient(farthest-side, transparent calc(100% - 6.5px), #000 calc(100% - 2.5px))",
            opacity: 0.3 + i * 0.32,
          }}
        />
      ))}

      {/* دایره‌ی مرکزی - عکس پروفایل */}
      <div
        className="relative rounded-full overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.25)]"
        style={{
          width: size * 0.5,
          height: size * 0.5,
          background: "radial-gradient(circle at 50% 25%, #DFADE7, #595A8D)",
        }}
      >
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt={avatarAlt}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* آیکون‌ها / لوگوهای شناور دور دایره */}
      {decorations.map((d, i) => (
        <img
          key={i}
          src={d.src}
          alt=""
          aria-hidden="true"
          className="absolute orbit-float select-none pointer-events-none drop-shadow-[0_6px_14px_rgba(124,58,237,0.25)]"
          style={{
            width: d.size ?? 46,
            height: d.size ?? 46,
            top: d.top,
            left: d.left,
            right: d.right,
            bottom: d.bottom,
            animationDelay: d.delay ?? "0s",
            animationDuration: d.duration ?? "5s",
            filter: `blur(${d.blur ?? 0}px)`,
          }}
        />
      ))}

      <style>{`
        @keyframes orbitFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        .orbit-float {
          animation-name: orbitFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .orbit-float { animation: none; }
        }
      `}</style>
    </div>
  );
}

//   <div className="w-full mx-auto mb-16 flex-center">
//     <div className=" border-gradient-avatar rounded-full w-fit ">
//       <div className=" border-gradient-avatar rounded-full w-fit m-4">
//         <div className="size-60 bg-radial-[at_50%_25%] from-[#DFADE7] to-[#595A8D] rounded-full m-10"></div>
//       </div>
//     </div>
//   </div>;
