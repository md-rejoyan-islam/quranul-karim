import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDictionary } from "./dictionaries";
import { LayoutProps, MetaDataProps } from "@/lib/definitions";

export async function generateMetadata(
  { params, modal }: MetaDataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    metadataBase: new URL(`${process.env.CLIENT_URL}/${params.lang}`),
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

export default function layout({
  children,
  params: { lang = "en" },
  modal,
}: LayoutProps) {
  return (
    <>
      <Header lang={lang} />
      {modal}
      {children}
      <Footer />
    </>
  );
}
