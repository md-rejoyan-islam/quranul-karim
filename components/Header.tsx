"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";
import Image from "next/image";

export default function Header({ lang }: { lang: string }) {
  return (
    <nav className="  border-b dark:border-dark_border_color border-border_color   z-50 backdrop-blur-md sticky top-0">
      <div className="flex justify-between items-center  h-[50px] lg:h-[66px] m-auto  max-w-[1276px] mx-auto">
        <div className="logo-div">
          <Link href="/">
            <Image
              width={"40"}
              height={"40"}
              alt="logo_dark"
              src={"/logo_dark.png"}
              className="w-[120px] ml-[15px] hidden dark:block"
            />
            <Image
              width={"40"}
              height={"40"}
              alt="logo_light"
              src="/logo_light.png"
              className="w-[120px] ml-[15px] block dark:hidden"
            />
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <LanguageSwitch lang={lang} />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
