"use client";

import React, { useEffect, useState } from "react";
import { Gift, Heart, Calendar, Users, Sparkles } from "lucide-react";
import Image from "next/image";

import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Story } from "@/types/api/endpointTypes/story.types";
import storiesApi from "@/api/services/ApiService/storiesApi";
import { Skeleton } from "@/components/ui/skeleton";
import { ENV } from "@/config/env";
import StoryViewer from "./StoryViewer";

const Stories = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);

  const {
    data: storiesData,
    isLoading: storiesLoading,
    execute: getstories,
  } = useApi<APIGetTemplate<Story[]>, { showPlace: Story["showPlace"] }>(
    storiesApi.get,
  );

  useEffect(() => {
    getstories({
      showPlace: "ApplicationHomePageTopStorySection",
    });
  }, []);

  const stories = storiesData?.data ?? [];

  const handleStoryClick = (index: number) => {
    setActiveStoryIndex(index);
  };

  const handleCloseViewer = () => {
    setActiveStoryIndex(null);
  };

  if (storiesLoading) {
    return (
      <div className="flex items-center justify-start gap-4 overflow-x-auto hide-scrollbar lg:justify-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i + 1}
            className="size-20 min-w-20 rounded-full lg:min-w-0"
          />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full">
        <div className="flex flex-row items-center justify-start gap-0 overflow-x-auto overflow-y-hidden px-2 py-4 scroll-smooth hide-scrollbar lg:justify-center lg:gap-5 lg:px-0">
          {stories.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleStoryClick(idx)}
              className=" flex h-fit w-20 shrink-0 cursor-pointer flex-col items-center gap-2 outline-none"
            >
              {/* Story ring */}
              <div
                className="
                  rounded-full
                  border-2
                  border-rose-400
                  p-0.5
                  transition-colors
                  duration-200
                  hover:border-rose-500
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-2
                "
              >
                <div className="relative size-16 aspect-square lg:size-20">
                  <Image
                    src={
                      item.mediaPath
                        ? `${ENV.API_BASE_URL}/${item.mediaPath}`
                        : "/images/default-image.jfif"
                    }
                    alt={item.storyButtonText || "استوری"}
                    fill
                    className="rounded-full object-cover"
                    priority={idx < 4}
                    sizes="80px"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <StoryViewer
        stories={stories}
        activeIndex={activeStoryIndex}
        onClose={handleCloseViewer}
        onChange={setActiveStoryIndex}
      />
    </>
  );
};

export default Stories;
