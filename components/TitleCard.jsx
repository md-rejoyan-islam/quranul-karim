import { revelationLang } from "@/app/surah/[slug]/api";

export default async function TitleCard({
  name,
  meaning,
  number,
  verses,
  revelation,
  lang,
}) {
  return (
    <div className="middle flex flex-col justify-end items-center relative">
      <div className="text__title flex justify-center items-center">
        <h2 className="">{name}</h2>
        <span className=" mr-[2px] text-[10px] ml-[6px] ">( {meaning} )</span>
      </div>
      <div className="text__sub__title text-[10px] flex flex-row justify-center items-center mt-[-2px] mb-[-5px]">
        <span className="mr-[2px] ">
          {await revelationLang("surah", lang)}:
        </span>
        <li className="mr-[6px] text-[12px] flex">{number}</li>
        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]">
          {await revelationLang("surah", lang)}
        </span>
        <li className="mr-[2px] text-[12px] flex">{verses}</li>
        <span className="mr-[6px]">টি</span>
        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]">অবতীর্ণঃ</span>
        <span className="mr-[2px]">{revelation}</span>
      </div>
    </div>
  );
}
