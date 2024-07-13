"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SurahCardProps } from "@/lib/definitions";

export default function SurahCard({
  number,
  name,
  meaning,
  arabic,
  url,
  lang,
}: SurahCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative bg-bg_surah_card border-border_color  border dark:border-none dark:bg-dark_bg_surah_card dark:hover:bg-[#2b303a93] flex justify-between items-center p-3 mx-2 mt-2 h-[80px] rounded-md cursor-pointer hover:shadow-[0_0px_40px_0px_rgba(1,0,0,0.2)] dark:text-[#bcccdf] ease-out duration-300 active:scale-95"
    >
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
    </motion.div>
  );
}
