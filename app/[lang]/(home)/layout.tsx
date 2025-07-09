import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ModalLayoutProps, ModalMetaDataProps } from "@/lib/definitions";
import type { Metadata } from "next";
import { getDictionary } from "./dictionaries";

export async function generateMetadata({
  params: { lang },
}: ModalMetaDataProps): Promise<Metadata> {
  const dictionary = await getDictionary(lang);

  return {
    metadataBase: new URL(`${process.env.CLIENT_URL}`),
    title: dictionary?.title,
    description: dictionary?.description,
    openGraph: {
      images: `${process.env.CLIENT_URL}/quran.webp`,
      title: dictionary?.title,
      description: dictionary?.description,
      url: `/${lang}`,
    },
  };
}

export default function layout({
  children,
  params: { lang = "en" },
  modal,
}: ModalLayoutProps) {
  return (
    <>
      <Header lang={lang} />
      {modal}
      {children}
      <Footer />
    </>
  );
}
