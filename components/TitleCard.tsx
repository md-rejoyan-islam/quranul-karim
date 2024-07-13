import { revelationLang } from "@/app/[lang]/surah/[slug]/api";

export default async function TitleCard({
  name,
  meaning,
  number,
  verses,
  revelation,
  lang,
}: {
  name: string;
  meaning: string;
  number: number;
  verses: number;
  revelation: string;
  lang: string;
}) {
  return (
    <div className="middle flex flex-col justify-end items-center relative pt-4 pb-1 border-b dark:border-slate-800 w-fit mx-auto">
      <div className=" flex justify-center gap-1 items-center">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <span className="text-[12px] mt-[3px]  ">( {meaning} )</span>
      </div>
      <div className=" text-[13px] flex flex-row justify-center  items-baseline ">
        <span className="mr-[2px] ">
          {await revelationLang("surah", lang)}&#2435;
        </span>
        <li className="mr-[6px] text-[12px] flex">{number}</li>
        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]">
          {await revelationLang("surah", lang)}&#2435;
        </span>
        <li className="mr-[2px] text-[12px] flex">{verses}</li>
        <span className="mr-[6px]">{await revelationLang("t", lang)}</span>
        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]">
          {await revelationLang("Revelation", lang)}&#2435;
        </span>
        <span className="mr-[2px]">{revelation}</span>
      </div>
    </div>
  );
}
