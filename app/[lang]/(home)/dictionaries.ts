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

export const getDictionary = async (locale) => {
  const locales = process.env.LOCALES.split(",");

  if (locales.includes(locale)) {
    return dictionaries[locale]();
  } else return;
};
