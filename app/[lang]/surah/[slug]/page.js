import { detailsData, indexOfLang, mainData } from "./api";

export default async function Surah({ params: { slug, lang } }) {
  const response = await fetch(
    `${process.env.SERVER_URL}/${lang}/surah/${slug}`
  );
  const details = await response.json();

  return (
    <section className="px-4 max-w-[1276px] mx-auto dark:text-[#beccdf]">
      <div className="py-10 ">
        {details?.data?.verses?.map((verse) => (
          <div
            key={verse.id}
            className="py-8 border-b border-border_color dark:border-dark_border_color"
          >
            <p className="text-[22px] arabic_text" dir="rtl">
              {verse.text}
            </p>
            <p className="text-[18px] pt-4 translation_text">
              {verse.translation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
