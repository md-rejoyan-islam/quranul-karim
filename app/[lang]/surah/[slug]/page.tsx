import SurahBody from "@/components/surahBody/SurahBody";
import { ParamProps } from "@/lib/definitions";
import { getSurahBySlug } from "@/lib/fetch";

export default async function Surah({ params: { slug, lang } }: ParamProps) {
  const data = await getSurahBySlug(lang, slug);

  return <SurahBody verses={data?.verses || []} />;
}
