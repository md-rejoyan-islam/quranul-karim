"use client";

import { SettingsContext } from "@/context/SettingsContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const initialSettings = {
  showArabic: true,
  showTranslate: true,
  isSmallletter: false,
  isSmallArabic: false,
};

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  const [settings, setSettings] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const savedSettings = localStorage.getItem("appSettings");
        if (savedSettings) {
          const parsedSettings = JSON.parse(savedSettings);
          return { ...initialSettings, ...parsedSettings };
        }
      } catch (error) {
        console.error(
          "Failed to load settings from localStorage on initial state:",
          error
        );
        // If localStorage data is corrupted, clear it to prevent continuous errors
        localStorage.removeItem("appSettings");
      }
    }
    return initialSettings;
  });

  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && !isLoading) {
      try {
        localStorage.setItem("appSettings", JSON.stringify(settings));
      } catch (error) {
        console.error("Failed to save settings to localStorage:", error);
      }
    }
  }, [settings, isLoading]);

  const setShowArabic = (value: boolean) =>
    setSettings((prev: typeof initialSettings) => ({
      ...prev,
      showArabic: value,
    }));

  const setShowTranslate = (value: boolean) =>
    setSettings((prev: typeof initialSettings) => ({
      ...prev,
      showTranslate: value,
    }));

  const setIsSmallletter = (value: boolean) =>
    setSettings((prev: typeof initialSettings) => ({
      ...prev,
      isSmallletter: value,
    }));

  const setIsSmallArabic = (value: boolean) =>
    setSettings((prev: typeof initialSettings) => ({
      ...prev,
      isSmallArabic: value,
    }));

  const contextValue = {
    ...settings,
    setShowArabic,
    setShowTranslate,
    setIsSmallletter,
    setIsSmallArabic,
    isLoading,
    setAllSettings: setSettings,
  };

  return (
    <SettingsContext.Provider value={contextValue}>
      {children}
    </SettingsContext.Provider>
  );
};
