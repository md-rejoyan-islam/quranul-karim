"use client";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitch from "@/components/LanguageSwitch";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="  border-b dark:border-[#46546852] border-[#b8cef352] border-color dark:bg-[#0f172a23] border-color  sticky top-[-1px] z-50 backdrop-blur-md">
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
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
