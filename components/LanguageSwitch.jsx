import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { HiChevronDown } from "react-icons/hi";
import { HiCheck } from "react-icons/hi";

import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LanguageSwitch() {
  const router = useRouter();

  const languages = [
    { id: 1, name: "English", code: "en" },
    { id: 2, name: "Bengali", code: "bn" },
    { id: 3, name: "Chinese", code: "zh" },
    { id: 4, name: "Urdu", code: "ur" },
    { id: 5, name: "Russian", code: "ru" },
  ];

  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(languages[1]);

  const filteredLanguage =
    query === ""
      ? languages
      : languages.filter((language) => {
          return language.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto  w-32">
      <Combobox
        value={selected}
        onChange={(value) => {
          setSelected(value);
          router.push(`/${value.code}`);
        }}
        onClose={() => setQuery("")}
        // __demoMode
      >
        <div className="relative">
          <ComboboxInput
            className={clsx(
              "w-full rounded-lg bg-bg_primary border border-border_color dark:border-dark_border_color dark:bg-dark_bg_primary py-1 pr-8 pl-3 text-sm/6 dark:text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 dark:data-[focus]:outline-white/25"
            )}
            displayValue={(language) => language?.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <HiChevronDown className="size-4 dark:fill-white/60 dark:group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--input-width)] rounded-md border dark:border-dark_border_color bg-bg_primary border-border_color bg-black/10 text-black dark:text-white dark:bg-dark_bg_primary p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0  absolute mt-1  z-[100] "
          )}
          style={{
            top: "80px",
          }}
        >
          {filteredLanguage.map((language) => (
            <ComboboxOption
              key={language.id}
              value={language}
              className="group flex  items-center gap-2  cursor-pointer py-1  px-3 select-none data-[focus]:bg-white/10"
            >
              <HiCheck className="invisible size-4 dark:fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 dark:text-white">{language.name}</div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
