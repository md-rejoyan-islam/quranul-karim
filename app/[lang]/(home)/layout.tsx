import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import type { Metadata, ResolvingMetadata } from "next";
import { getDictionary } from "./dictionaries";

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
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

export default function RootLayout({
  children,
  params: { lang = "en" },
  modal,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <>
      <Header lang={lang} />
      {modal}
      {children}
      <Footer />
    </>
  );
}
