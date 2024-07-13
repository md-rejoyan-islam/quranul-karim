"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      }}
      className="h-9 w-9 mr-4 p-[3px]"
    >
      {theme === "light" ? (
        <Image
          width={"40"}
          height={"40"}
          alt="light_mode_icon"
          src={"/day.png"}
          className="w-full h-full "
        />
      ) : (
        <Image
          width={"40"}
          height={"40"}
          src={"/night.png"}
          alt="dark_mode_icon"
          className="w-full h-full "
        />
      )}
    </button>
  );
}

export default ThemeToggle;
