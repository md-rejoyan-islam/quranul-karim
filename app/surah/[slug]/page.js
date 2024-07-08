import {
  detailsData,
  getIdName,
  indexOfLang,
  mainData,
  revelationLang,
} from "./api";
import TitleCard from "@/components/TitleCard";

export default async function Surah({ params }) {
  const lang = "english";
  const data = await mainData(params?.slug);

  const details = await detailsData(data?.id);

  const revelation = await revelationLang(details.revelation, lang);

  return (
    <main className="px-4 max-w-[1276px] mx-auto dark:text-[#beccdf]">
      <TitleCard
        name={data.transliteration[lang]}
        number={await getIdName(data.id, lang)}
        meaning={data.translation[lang]}
        verses={await getIdName(data.total_verses, lang)}
        revelation={revelation}
        lang={lang}
      />
      <div className="py-10 ">
        {details?.verses?.map((verse) => (
          <div key={verse.id} className="py-8 border-b dark:border-slate-800">
            <p className="text-[22px] " dir="rtl">
              {verse.text}
            </p>
            <p className="text-[18px] pt-4">
              {verse.translations[indexOfLang(lang)]}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
