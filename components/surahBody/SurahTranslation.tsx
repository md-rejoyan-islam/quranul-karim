"use client";

import { useSettings } from "@/hooks/useSettings";

const SurahTranslation = ({ translation }: { translation: string }) => {
  const { showTranslate, isSmallletter, isLoading } = useSettings();

  if (isLoading) return null;

  return (
    <p
      className={` pt-4  ${!isSmallletter ? "text-[18px]" : "text-[28px]"} ${
        showTranslate ? "block" : "hidden"
      } `}
    >
      {translation}
    </p>
  );
};

export default SurahTranslation;
