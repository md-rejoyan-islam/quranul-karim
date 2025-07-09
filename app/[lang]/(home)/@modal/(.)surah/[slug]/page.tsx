import SurahBody from "@/components/surahBody/SurahBody";
import SurahHeader from "@/components/SurahHeader";
import { ParamProps } from "@/lib/definitions";
import { getSurahBySlug } from "@/lib/fetch";
import type { Metadata } from "next";
import { getDictionary } from "../../../dictionaries";
import Modal from "./Modal";

export async function generateMetadata({
  params: { lang, slug },
}: ParamProps): Promise<Metadata> {
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
      <SurahBody verses={data?.verses || []} />;
    </Modal>
  );
}
