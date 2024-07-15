import SurahCard from "@/components/SurahCard";
import { getDictionary } from "./dictionaries";
import { numberConverter } from "@/lib/helper";
import { ParamProps, Surah } from "@/lib/definitions";
import { getAllSurahs } from "@/lib/fetch";

export default async function Home({ params: { lang = "en" } }: ParamProps) {
  const dictionary = await getDictionary(lang);

  const data = await getAllSurahs(lang);

  return (
    <main className="max-w-[1276px] mx-auto  dark:text-[#bcccdf] pb-10 progress-bar">
      <div className=" flex flex-col  justify-center items-center p-10">
        <h1 className="text-2xl sm:text-[34px] text-[#e49733] dark:text-[#38bdf8]">
          {dictionary?.title}
        </h1>
        <h4 className=" sm:text-[20px]"> {dictionary?.sub_title} </h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto">
        {data?.map((data, index) => {
          return (
            <SurahCard
              key={index}
              meaning={data?.translation}
              number={numberConverter(lang, data?.id)}
              arabic={data?.arabic}
              url={data?.slug}
              name={data?.transliteration}
              lang={lang}
            />
          );
        })}
      </div>
    </main>
  );
}
