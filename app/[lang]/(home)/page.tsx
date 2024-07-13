import Footer from "@/components/Footer";
import SurahCard from "@/components/SurahCard";

import { getDictionary } from "./dictionaries";
import { numberConverter } from "@/helper/helper";

type Props = {
  params: { lang: string };
};

interface Surah {
  id: string;
  name: string;
  transliteration: string;
  translation: string;
  arabic: string;
  slug: string;
}

const getSurahs = async (lang: string): Promise<Surah[]> => {
  const response = await fetch(`${process.env.SERVER_URL}/${lang}/surah`);
  const data = await response.json();
  return data.data;
};

export default async function Home({ params: { lang = "en" } }: Props) {
  const dictionary = await getDictionary(lang);

  const data = await getSurahs(lang);

  return (
    <main className="max-w-[1276px] mx-auto  dark:text-[#bcccdf] pb-10 progress-bar">
      <div className=" lg:flex flex-col hidden justify-center items-center p-10">
        <h1 className="text-[34px] text-[#e49733] dark:text-[#38bdf8]">
          {dictionary?.title}
        </h1>
        <h4 className="text-[20px]"> {dictionary?.sub_title} </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto">
        {data?.map((data, index) => {
          return (
            <SurahCard
              key={index}
              meaning={data.translation}
              number={numberConverter(lang, data.id)}
              arabic={data?.arabic}
              url={data.slug}
              name={data.transliteration}
              lang={lang}
            />
          );
        })}
      </div>
    </main>
  );
}
