"use client";

import { useSettings } from "@/hooks/useSettings";

const SurahText = ({ text }: { text: string }) => {
  const { showArabic, isSmallArabic, isLoading } = useSettings();

  if (isLoading) return null;
  return (
    <p
      className={` ${showArabic ? "block" : "hidden"} ${
        !isSmallArabic ? "text-[22px] " : "text-[30px]"
      }`}
      dir="rtl"
    >
      {text}
    </p>
  );
};

export default SurahText;
