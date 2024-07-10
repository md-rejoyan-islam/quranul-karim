import SurahHeader from "@/components/SurahHeader";
import Modal from "./Modal";
export default async function Surah({ params: { lang, slug } }) {
  const response = await fetch(
    `${process.env.SERVER_URL}/${lang}/surah/${slug}`
  );
  const { data } = await response.json();

  return (
    <Modal>
      <SurahHeader
        name={data?.name}
        number={data?.id}
        meaning={data?.translation}
        verses={data?.total_verses}
        revelation={data?.revelation}
      />
      <section className="px-4 bg-transparent max-w-[1276px] mx-auto dark:text-[#beccdf]">
        <div className="py-10 ">
          {data?.verses?.map((verse) => (
            <div
              key={verse.id}
              className="py-8 border-b border-border_color dark:border-dark_border_color"
            >
              <p className="text-[22px] " dir="rtl">
                {verse.text}
              </p>
              <p className="text-[18px] pt-4">{verse.translation}</p>
            </div>
          ))}
        </div>
      </section>
    </Modal>
  );
}
