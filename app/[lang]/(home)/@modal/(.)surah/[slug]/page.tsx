import SurahHeader from "@/components/SurahHeader";
import Modal from "./Modal";
import { getDictionary } from "../../../dictionaries";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string; slug: string };
};

const getSurah = async (lang, slug) => {
  const response = await fetch(
    `${process.env.SERVER_URL}/${lang}/surah/${slug}`
  );
  const { data } = await response.json();

  return data;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang, slug } = params;
  const data = await getSurah(lang, slug);

  return {
    title: data?.name,
    description: data?.description,
    url: `/${params.id}`,
  };
}

export default async function Surah({ params: { lang, slug } }) {
  const data = await getSurah(lang, slug);

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
