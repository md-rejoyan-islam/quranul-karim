import SurahHeader from "@/components/SurahHeader";
import {
  mainData,
  detailsData,
  indexOfLang,
  revelationLang,
  getIdName,
} from "../../../surah/[slug]/api";
import Modal from "./Modal";

export default async function Surah({ params }) {
  const lang = "bengali";
  const data = await mainData(params?.slug);

  const details = await detailsData(data?.id);

  const revelation = await revelationLang(details.revelation, lang);

  return (
    <Modal>
      <SurahHeader
        name={data.transliteration[lang]}
        number={await getIdName(data.id, lang)}
        meaning={data.translation[lang]}
        verses={await getIdName(data.total_verses, lang)}
        revelation={revelation}
        lang={lang}
        showCross={true}
      />
      <section className="px-4 bg-transparent max-w-[1276px] mx-auto dark:text-[#beccdf]">
        <div className="py-10 ">
          {details?.verses?.map((verse) => (
            <div
              key={verse.id}
              className="py-8 border-b border-border_color dark:border-dark_border_color"
            >
              <p className="text-[22px] " dir="rtl">
                {verse.text}
              </p>
              <p className="text-[18px] pt-4">
                {verse.translations[indexOfLang(lang)]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Modal>
  );
}
