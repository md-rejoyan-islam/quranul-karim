import { SurahCardProps } from "@/lib/definitions";
import Link from "next/link";
import SurahCardBody from "./SurahCardBody";

export default function SurahCard({
  number,
  name,
  meaning,
  arabic,
  url,
  lang,
}: SurahCardProps) {
  return (
    <SurahCardBody>
      <div className="left-part flex justify-between items-center">
        <ul className="flex shadow-inner w-[2.7rem] h-[2.7rem] rounded-full items-center justify-center   mr-4">
          <li className="text-[17px] bg-bg_surah_number dark:bg-dark_bg_surah_number w-full h-full grid place-content-center  rounded-full">
            {number}
          </li>
        </ul>
        <div className="flex flex-col justify-center">
          <h2 className="text-[18px] hind-siliguri-light">{name}</h2>
          <h4 className="flex  opacity-65 text-[14px] mt-[-1px] ">{meaning}</h4>
        </div>
      </div>
      <div className="right-part mr-2 flex flex-col items-end">
        <h3 className="text-[22px]">{arabic}</h3>
        <Link
          className="absolute top-0 left-0 right-0 bottom-0 z-10"
          href={`/${lang}/surah/${url}`}
        />
      </div>
    </SurahCardBody>
  );
}
