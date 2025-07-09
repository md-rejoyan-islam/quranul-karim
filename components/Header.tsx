import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Header({ lang }: { lang: string }) {
  return (
    <nav className="  border-b dark:border-dark_border_color border-border_color   z-50 backdrop-blur-md sticky top-0">
      <div className="flex justify-between items-center  h-[60px] lg:h-[66px] m-auto  max-w-[1276px] mx-auto">
        <div className="logo-div">
          <Link href="/">
            <Image
              width={"200"}
              height={"120"}
              alt="logo_dark"
              src={"/logo_dark.webp"}
              className="w-[120px] ml-[15px] hidden dark:block"
            />
            <Image
              width={"200"}
              height={"120"}
              alt="logo_light"
              src="/logo_light.webp"
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
