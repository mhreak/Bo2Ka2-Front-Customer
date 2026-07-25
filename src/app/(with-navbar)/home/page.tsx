"use client";

import SearchInput from "@/components/shared/inputs/SearchInput";
import HomePageHeader from "./_components/HomePageHeader";
import Stories from "./_components/Stories";
import Banner from "@/components/shared/Banner";
import Categories from "./_components/Categories";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 overflow-auto mb-20">
      <HomePageHeader />
      <SearchInput value="" onChange={() => {}} placeholder="جستجو" />
      <Stories />
      <Banner
        onClick={() => {}}
        containerCalassName="bg-pink-300 w-[326px] h-[188px]"
      />
      <Categories />
      <Banner
        onClick={() => {}}
        containerCalassName="bg-gradient w-[326px] h-[100px]"
      />
    </div>
  );
};

export default HomePage;
