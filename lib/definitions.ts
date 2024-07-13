import React from "react";

export interface Surah {
  id: string;
  name: string;
  transliteration: string;
  translation: string;
  arabic: string;
  slug: string;
}

export interface SurahDetails {
  id: string;
  title: string;
  description: string;
  name: string;
  revelation: string;
  number: string;
  total_verses: string;
  translation: string;
  verses: Verse[];
}

export interface Verse {
  id: string;
  text: string;
  translation: string;
}

export type ParamProps = {
  params: { lang: string; slug: string };
};

export type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string; slug: string };
};

export type ModalLayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
  modal: React.ReactNode;
};

export type MetaDataProps = {
  params: { lang: string };
  modal: React.ReactNode;
};

export type ModalMetaDataProps = {
  params: { lang: string };
  modal: React.ReactNode;
};

export type SurahCardProps = {
  number: number;
  name: string;
  meaning: string;
  arabic: string;
  url: string;
  lang: string;
};

export type SurahHeaderProps = {
  name: string;
  meaning: string;
  number: string;
  verses: string;
  revelation: string;
  dictionary:
    | {
        surah: string;
        ayat: string;
        revelation: string;
      }
    | undefined;
};

export type SurahTitleProps = {
  name: string;
  meaning: string;
  number: number;
  verses: number;
  revelation: string;
};

export type Langs = {
  en: string;
  fr: string;
  zh: string;
  ur: string;
  ru: string;
  bn: string;
};
