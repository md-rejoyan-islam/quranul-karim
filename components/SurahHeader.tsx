"use client";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlArrowLeft } from "react-icons/sl";
import ModalSetting from "./ModalSetting";
import { useRouter } from "next/navigation";
import { SurahHeaderProps } from "@/lib/definitions";

export default function SurahHeader({
  name,
  meaning,
  number,
  verses,
  revelation,
  dictionary,
}: SurahHeaderProps) {
  let [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const close = () => {
    router.back();
  };

  return (
    <>
      <nav className=" border-border_color dark:border-dark_border_color sticky top-0 w-full top- z-50 border-b backdrop-blur-md ">
        <div className=" flex justify-between items-center  h-[50px] lg:h-[66px] max-w-[1276px] mx-auto">
          <span
            onClick={close}
            className="toggle-view-mode p-3 m-2 hover:bg-slate-500/10 rounded-full cursor-pointer"
          >
            <SlArrowLeft size={12} className="active:scale-95" />
          </span>
          <div className="middle flex flex-col justify-end items-center relative">
            <div className=" flex justify-center gap-1 items-center">
              <h2>{name}</h2>
              <span className="mt-[3px]  text-[10px]">( {meaning} )</span>
            </div>
            <div className=" text-[13px] flex flex-row justify-center  items-baseline ">
              <ul className="flex items-center">
                <li className="flex">
                  <span className="mr-[2px]  ">{dictionary?.surah}</span>
                  <span className="font-bold px-[2px]">&#58;</span>
                  <span className="mr-[6px] text-[12px] flex">{number}</span>
                </li>
                <li>
                  <span className="mr-[2px] ml-[2px] mt-[3px] text-xl">•</span>
                </li>
                <li className="flex">
                  <span className="mr-[2px] ml-[6px]">{dictionary?.ayat}</span>
                  <span className="font-bold px-[2px]">&#58;</span>
                  <span className="mr-[2px] text-[12px] flex">{verses}</span>
                </li>
                <li>
                  <span className="mr-[2px] ml-[2px] mt-[3px] text-xl">•</span>
                </li>
                <li className="flex">
                  <span className="mr-[2px] ml-[6px]">
                    {dictionary?.revelation}
                  </span>
                  <span className="font-bold px-[2px]">&#58;</span>
                  <span className="mr-[2px]">{revelation}</span>
                </li>
              </ul>
            </div>
          </div>

          <span
            onClick={() => setIsOpen(!isOpen)}
            className="toggle-view-mode flex gap-3 p-3 m-2 active:bg-slate-500/10 rounded-full cursor-pointer"
          >
            <GiSettingsKnobs />
          </span>
        </div>
      </nav>
      {/* modal setting  */}
      <ModalSetting isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
