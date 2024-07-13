import SurahHeader from "@/components/SurahHeader";
import { getDictionary } from "../../(home)/dictionaries";
import { LayoutProps, ParamProps } from "@/lib/definitions";
import { getSurahBySlug } from "@/lib/fetch";
import type { Metadata, ResolvingMetadata } from "next";
import Footer from "@/components/Footer";

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
      images: "/quran.webp",
      title: data?.name,
      description: data?.description,
      url: new URL(`${process.env.CLIENT_URL}/${lang}/surah/${slug}`),
    },
  };
}

export default async function Layout({
  children,
  params: { lang, slug },
}: LayoutProps) {
  const data = await getSurahBySlug(lang, slug);

  const dictionary = await getDictionary(lang);

  return (
    <>
      <SurahHeader
        name={data?.name}
        number={data?.id}
        meaning={data?.translation}
        verses={data?.total_verses}
        revelation={data?.revelation}
        lang={lang}
        dictionary={dictionary}
      />
      <main className="bg-bg_secondary dark:bg-dark_bg_primary">
        {children}
      </main>
      <Footer />
    </>
  );
}
