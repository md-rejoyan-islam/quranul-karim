import type { Metadata, ResolvingMetadata } from "next";
import SurahHeader from "@/components/SurahHeader";
import Modal from "./Modal";
import { getDictionary } from "../../../dictionaries";
import { ParamProps, SurahDetails } from "@/lib/definitions";
import { getSurahBySlug } from "@/lib/fetch";

export async function generateMetadata(
  { params: { lang, slug } }: ParamProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getSurahBySlug(lang, slug);

  return {
    metadataBase: new URL(`${process.env.CLIENT_URL}/${lang}/surah/${slug}`),
    title: data?.name,
    description: data?.description,
    openGraph: {
      images: `${process.env.CLIENT_URL}/quran.webp`,
      title: data?.name,
      description: data?.description,
      url: new URL(`${process.env.CLIENT_URL}/${lang}/surah/${slug}`),
    },
  };
}

export default async function Surah({ params: { lang, slug } }: ParamProps) {
  const data = await getSurahBySlug(lang, slug);
  const dictionary = await getDictionary(lang);

  return (
    <Modal>
      <SurahHeader
        name={data?.name}
        number={data?.id}
        meaning={data?.translation}
        verses={data?.total_verses}
        revelation={data?.revelation}
        dictionary={dictionary}
      />
      <section className="px-4 bg-transparent max-w-[1276px] mx-auto dark:text-[#beccdf]">
        <div className="py-10 ">
          {data?.verses?.map((verse) => (
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
    </Modal>
  );
}
