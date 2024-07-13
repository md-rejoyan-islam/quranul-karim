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
    metadataBase: new URL(
      `${process.env.CLIENT_URL}/${params.lang}/surah/${slug}`
    ),
    title: data?.name,
    description: data?.description,

    openGraph: {
      images: "/quran.webp",
      title: data?.name,
      description: data?.description,
      url: new URL(`${process.env.CLIENT_URL}/${params.lang}/surah/${slug}`),
    },
  };
}

export default async function Surah({ params: { slug, lang } }) {
  const data = await getSurah(lang, slug);

  return (
    <section className="px-4 max-w-[1276px] mx-auto dark:text-[#beccdf]">
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
  );
}
