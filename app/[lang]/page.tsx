import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);

  console.log(dictionary);

  const response = await fetch(`${process.env.SERVER_URL}/${lang}/surah`);
  const data = await response.json();

  return (
    <>
      <Header />
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
                number={data.id}
                arabic={data?.arabic}
                url={data.slug}
                name={data.transliteration}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
