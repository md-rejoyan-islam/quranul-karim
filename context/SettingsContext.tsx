import { createContext, Dispatch, SetStateAction } from "react";

interface AppSettings {
  showArabic: boolean;
  showTranslate: boolean;
  isSmallletter: boolean;
  isSmallArabic: boolean;
}

interface SettingsContextValue extends AppSettings {
  setShowArabic: (value: boolean) => void;
  setShowTranslate: (value: boolean) => void;
  setIsSmallletter: (value: boolean) => void;
  setIsSmallArabic: (value: boolean) => void;
  isLoading: boolean;
  setAllSettings: Dispatch<SetStateAction<AppSettings>>;
}

export const SettingsContext = createContext<SettingsContextValue | undefined>(
  undefined
);
