"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ENV } from "@/config/env";
import { Story } from "@/types/api/endpointTypes/story.types";

interface StoryViewerProps {
  stories: Story[];
  activeIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

type Direction = 1 | -1;

const STORY_DURATION = 5000;

const slideVariants = {
  enter: (direction: Direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction: Direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.96,
  }),
};

const slideTransition = {
  x: {
    type: "spring" as const,
    stiffness: 280,
    damping: 30,
    mass: 0.8,
  },

  opacity: {
    duration: 0.2,
  },

  scale: {
    duration: 0.3,
  },
};

const StoryViewer = ({
  stories,
  activeIndex,
  onClose,
  onChange,
}: StoryViewerProps) => {
  const [direction, setDirection] = useState<Direction>(1);

  const isOpen = activeIndex !== null;

  /**
   * Auto play
   *
   * هر Story به مدت 5000ms نمایش داده می‌شود.
   */
  useEffect(() => {
    if (activeIndex === null || stories.length === 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      if (activeIndex < stories.length - 1) {
        setDirection(1);
        onChange(activeIndex + 1);
      } else {
        onClose();
      }
    }, STORY_DURATION);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeIndex, stories.length, onChange, onClose]);

  if (!isOpen) return null;

  const currentStory = stories[activeIndex];

  if (!currentStory) return null;

  const imageSrc = currentStory.mediaPath
    ? `${ENV.API_BASE_URL}/${currentStory.mediaPath}`
    : "/images/default-image.jfif";

  const hasPrevious = activeIndex > 0;
  const hasNext = activeIndex < stories.length - 1;

  const handlePrevious = () => {
    if (!hasPrevious) return;

    setDirection(-1);
    onChange(activeIndex - 1);
  };

  const handleNext = () => {
    if (!hasNext) return;

    setDirection(1);
    onChange(activeIndex + 1);
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="
          flex
          h-dvh
          lg:h-[103%]
          w-[101%]
          max-w-none
          items-center
          justify-center
          overflow-hidden
          rounded-none
          border-none
          bg-black/75
          p-0
          shadow-none
          outline-none
          sm:max-w-none
        "
      >
        <DialogTitle className="sr-only">
          {currentStory.storyButtonText || "استوری"}
        </DialogTitle>

        {/* Close */}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="
            absolute
            right-4
            top-6
            z-50
            size-10
            rounded-full
            bg-black/40
            text-white
            hover:bg-black/60
            hover:text-white
          "
        >
          <X className="size-5" />

          <span className="sr-only">بستن</span>
        </Button>

        {/* Previous */}
        {hasPrevious && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="
              absolute
              right-4
              top-1/2
              z-40
              size-10
              -translate-y-1/2
              rounded-full
              bg-black/40
              text-white
              hover:bg-black/60
              hover:text-white
              hidden md:flex
            "
          >
            <ChevronRight className="size-6" />

            <span className="sr-only">استوری قبلی</span>
          </Button>
        )}

        {/* Story */}
        <div
          className="
            relative
            h-[90dvh]
            w-[min(90vw,430px)]
            overflow-hidden
            rounded-2xl
          "
        >
          {/* Story Progress */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              z-30
              flex
              gap-1
              px-2
              pt-2
            "
          >
            {stories.map((story, index) => {
              const isCompleted = index < activeIndex;
              const isActive = index === activeIndex;

              return (
                <div
                  key={story.id}
                  className="
                    relative
                    h-1
                    flex-1
                    overflow-hidden
                    rounded-full
                    bg-white/30
                  "
                >
                  {isCompleted && <div className="absolute inset-0 bg-white" />}

                  {isActive && (
                    <motion.div
                      key={currentStory.id}
                      className="
                        absolute
                        inset-y-0
                        right-0
                        rounded-full
                        bg-white
                      "
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: STORY_DURATION / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile touch zones */}
          <div className="absolute inset-0 z-20 md:hidden">
            {/* Right side → Previous */}
            {hasPrevious && (
              <button
                type="button"
                aria-label="استوری قبلی"
                onClick={handlePrevious}
                className="
        absolute
        inset-y-0
        right-0
        w-1/2
        cursor-pointer
      "
              />
            )}

            {/* Left side → Next */}
            {hasNext && (
              <button
                type="button"
                aria-label="استوری بعدی"
                onClick={handleNext}
                className="
        absolute
        inset-y-0
        left-0
        w-1/2
        cursor-pointer
      "
              />
            )}
          </div>

          {/* Animated Story */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentStory.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className="absolute inset-0"
            >
              <Image
                src={imageSrc}
                alt={currentStory.storyButtonText || "استوری"}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 640px) 90vw, 430px"
              />

              {/* Top gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-32
                  bg-linear-to-b
                  from-black/70
                  to-transparent
                "
              />

              {/* Bottom gradient */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-32
                  bg-linear-to-t
                  from-black/70
                  to-transparent
                "
              />

              {/* Story title */}
              {currentStory.storyButtonText && (
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    px-5
                    pb-5
                    text-center
                  "
                >
                  <p className="text-sm font-medium text-white">
                    {currentStory.storyButtonText}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next */}
        {hasNext && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="
              absolute
              left-4
              top-1/2
              z-40
              size-10
              -translate-y-1/2
              rounded-full
              bg-black/40
              text-white
              hover:bg-black/60
              hover:text-white
              hidden md:flex
            "
          >
            <ChevronLeft className="size-6" />

            <span className="sr-only">استوری بعدی</span>
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StoryViewer;
