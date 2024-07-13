import { Surah, SurahDetails } from "./definitions";

export const getAllSurahs = async (lang: string): Promise<Surah[]> => {
  const response = await fetch(`${process.env.SERVER_URL}/${lang}/surah`);
  const data = await response.json();
  return data.data;
};

export const getSurahBySlug = async (
  lang: string,
  slug: string
): Promise<SurahDetails> => {
  const response = await fetch(
    `${process.env.SERVER_URL}/${lang}/surah/${slug}`
  );
  const { data } = await response.json();

  return data;
};
