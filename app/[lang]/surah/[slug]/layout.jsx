import SurahHeader from "@/components/SurahHeader";

export default async function Layout({ children, params: { lang, slug } }) {
  const response = await fetch(
    `${process.env.SERVER_URL}/${lang}/surah/${slug}`
  );
  const { data } = await response.json();

  return (
    <main className="bg-bg_secondary dark:bg-dark_bg_primary">
      <SurahHeader
        name={data?.name}
        number={data?.id}
        meaning={data?.translation}
        verses={data?.total_verses}
        revelation={data?.revelation}
      />
      {children}
    </main>
  );
}
