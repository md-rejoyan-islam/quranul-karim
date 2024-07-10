import "server-only";

const dictionaries = {
  bn: async () =>
    import("./dictionaries/bn/bn.dictionary.json").then(
      (module) => module.default
    ),
  en: async () =>
    import("./dictionaries/en/en.dictionary.json").then(
      (module) => module.default
    ),
  fr: async () =>
    import("./dictionaries/fr/fr.dictionary.json").then(
      (module) => module.default
    ),
  ru: async () =>
    import("./dictionaries/ru/ru.dictionary.json").then(
      (module) => module.default
    ),
  ur: async () =>
    import("./dictionaries/ur/ur.dictionary.json").then(
      (module) => module.default
    ),
  zh: async () =>
    import("./dictionaries/zh/zh.dictionary.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => dictionaries[locale]();
