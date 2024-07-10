"use client";

import Link from "next/link";
import { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlArrowLeft } from "react-icons/sl";
import ModalSetting from "./ModalSetting";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function SurahHeader({
  name,
  meaning,
  lang,
  number,
  verses,
  revelation,
  showCross = false,
}) {
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
              <span className="mr-[2px] ">
                {/* {await revelationLang("surah", lang)}&#2435; */}
              </span>
              <li className="mr-[6px] text-[12px] flex">{number}</li>
              <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
              <span className="mr-[2px] ml-[6px]">
                {/* {await revelationLang("surah", lang)}&#2435; */}
              </span>
              <li className="mr-[2px] text-[12px] flex">{verses}</li>
              {/* <span className="mr-[6px]">{await revelationLang("t", lang)}</span> */}
              <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
              <span className="mr-[2px] ml-[6px]">
                {/* {await revelationLang("Revelation", lang)}&#2435; */}
              </span>
              <span className="mr-[2px]">{revelation}</span>
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
