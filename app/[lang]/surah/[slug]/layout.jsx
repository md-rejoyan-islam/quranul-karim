import SurahHeader from "@/components/SurahHeader";
import { detailsData, getIdName, mainData, revelationLang } from "./api";

export default async function Layout({ children, params }) {
  const lang = "bengali";
  const data = await mainData(params?.slug);

  const details = await detailsData(data?.id);

  const revelation = await revelationLang(details.revelation, lang);

  return (
    <main className="bg-bg_secondary dark:bg-dark_bg_primary">
      <SurahHeader
        name={data.transliteration[lang]}
        number={await getIdName(data.id, lang)}
        meaning={data.translation[lang]}
        verses={await getIdName(data.total_verses, lang)}
        revelation={revelation}
        lang={lang}
      />
      {children}
    </main>
  );
}
