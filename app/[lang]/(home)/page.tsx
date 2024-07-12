import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { getDictionary } from "./dictionaries";
import { numberConverter } from "@/helper/helper";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary?.title,
    description: dictionary?.description,
    openGraph: {
      images: "/quran.webp",
      title: dictionary?.title,
      description: dictionary?.description,
      url: new URL(`${process.env.CLIENT_URL}/${params.lang}`),
    },
  };
}

export default async function Home({
  params: { lang = "en" },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  numberConverter(lang);

  const response = await fetch(`${process.env.SERVER_URL}/${lang}/surah`);
  const data = await response.json();

  return (
    <>
      <Header lang={lang} />

      <main className="max-w-[1276px] mx-auto  dark:text-[#bcccdf] pb-10 progress-bar">
        <div className=" lg:flex flex-col hidden justify-center items-center p-10">
          <h1 className="text-[34px] text-[#e49733] dark:text-[#38bdf8]">
            {dictionary?.title}
          </h1>
          <h4 className="text-[20px]"> {dictionary?.sub_title} </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto">
          {data?.data?.map((data, index) => {
            return (
              <Card
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
    </>
  );
}