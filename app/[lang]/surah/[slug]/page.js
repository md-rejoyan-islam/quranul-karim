import { detailsData, indexOfLang, mainData } from "./api";

export default async function Surah({ params }) {
  const lang = "bengali";
  const data = await mainData(params?.slug);

  const details = await detailsData(data?.id);

  return (
    <section className="px-4 max-w-[1276px] mx-auto dark:text-[#beccdf]">
      <div className="py-10 ">
        {details?.verses?.map((verse) => (
          <div
            key={verse.id}
            className="py-8 border-b border-border_color dark:border-dark_border_color"
          >
            <p className="text-[22px] arabic_text" dir="rtl">
              {verse.text}
            </p>
            <p className="text-[18px] pt-4 translation_text">
              {verse.translations[indexOfLang(lang)]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
