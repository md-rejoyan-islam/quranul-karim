import "server-only";

const dictionaries = {
  bn: () =>
    import("../dictionaries/bn/bn.dictionary.json").then(
      (module) => module.default
    ),
  en: () =>
    import("../dictionaries/en/en.dictionary.json").then(
      (module) => module.default
    ),
  fr: () =>
    import("../dictionaries/fr/fr.dictionary.json").then(
      (module) => module.default
    ),
  ru: () =>
    import("../dictionaries/ru/ru.dictionary.json").then(
      (module) => module.default
    ),
  ur: () =>
    import("../dictionaries/ur/ur.dictionary.json").then(
      (module) => module.default
    ),
  zh: () =>
    import("../dictionaries/zh/zh.dictionary.json").then(
      (module) => module.default
    ),
};

// Step 1: Define a type for the keys of `dictionaries`.
type LocaleKey = keyof typeof dictionaries;

export const getDictionary = async (
  locale: string
): Promise<
  | {
      title: string;
      description: string;
      sub_title: string;
      surah: string;
      ayat: string;
      t: string;
      revelation: string;
      setting: string;
      theme_title: string;
      light: string;
      dark: string;
      show_arabic_text: string;
      yes: string;
      no: string;
      arabic_font_size_title: string;
      small: string;
      big: string;
      show_translation: string;
      translation_font_size_title: string;
      translation_demo_text: string;
    }
  | undefined
> => {
  const locales = process.env.LOCALES
    ? process.env.LOCALES.split(",")
    : undefined;

  // Step 2: Check if `locale` is one of the keys before accessing it.
  if (locales?.includes(locale) && locale in dictionaries) {
    // Here we assert that `locale` is a key of `dictionaries`.
    const key = locale as LocaleKey;
    return dictionaries[key]();
  } else return undefined;
};
