import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import mainData from "@/data/main.json";

export default function Home() {
  const lang = "bengali";

  return (
    <div className="max-w-[1276px] mx-auto  dark:text-[#bcccdf] pb-10 progress-bar">
      <div className=" lg:flex flex-col hidden justify-center items-center p-10">
        <h1 className="text-[34px] text-[#e49733] dark:text-[#38bdf8]">
          কুরআনুল কারীম
        </h1>
        <h4 className="text-[20px]">বাংলা অনুবাদ ও সংক্ষিপ্ত তাফসীর</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  m-auto">
        {mainData.map((data, index) => {
          return (
            <Card
              key={index}
              meaning={data.translation[lang]}
              number={data.id}
              lang={lang}
              arabic={data?.name}
              url={data.slug}
              name={data.transliteration[lang]}
            />
          );
        })}
      </div>
    </div>
  );
}
