import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import MovingBorder from "./MovingBorder";
import { useTheme } from "next-themes";

export default function ModalSetting({ isOpen, setIsOpen }) {
  const { setTheme, theme } = useTheme();

  const themeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  function close() {
    setIsOpen(false);
  }

  const [isDark, setIsDark] = useState(theme === "dark" ? true : false);
  const [showArabic, setShowArabic] = useState(true);
  const [showTranslate, setShowTranslate] = useState(true);
  const [isSmallletter, setIsSmallletter] = useState(false);
  const [isSmallArabic, setIsSmallArabic] = useState(false);

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-[100] focus:outline-none "
        onClose={close}
      >
        <DialogBackdrop className="fixed inset-0 backdrop-blur-sm bg-blue-500/40 dark:bg-blue-500/30 -z-10" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/60 dark:bg-white/10 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <div className=" flex flex-col justify-between items-center  w-full  card__bg rounded-md  option__border ">
                <div className="settings__title__bar flex justify-between items-center w-full mb-5">
                  <span></span>
                  <h1 className="text-[25px] pl-5">Settings</h1>
                  <span
                    onClick={() => setIsOpen(false)}
                    className=" hover:scale-95 cursor-pointer bg-slate-900/10 p-1 mr-1 rounded-full"
                  >
                    <IoClose />
                  </span>
                </div>
                <div className="settings__theme flex justify-between w-full items-center option__border rounded-full">
                  <h2 className="pl-4 text-[14px]">স্ক্রিন কেমন হবে?</h2>

                  <div
                    onClick={() => {
                      setIsDark(!isDark);
                      themeChange();
                    }}
                    className="flex justify-center items-center rounded-full p-2 w-[195px]  relative cursor-pointer dark:bg-[#1e212b] tab__bg transision__1s"
                  >
                    <h2 className="z-20 pr-[12px] text-[14px]  flex gap-1 justify-center items-center">
                      <Image
                        className="h-[25px]"
                        width={"40"}
                        height={"40"}
                        alt="light_mode_icon"
                        src={"/day.png"}
                      />
                      সেপিয়া
                    </h2>
                    <h2 className="z-20 pl-[15px] text-[14px]  flex gap-1 justify-center items-center">
                      <Image
                        className="h-[25px]"
                        width={"40"}
                        height={"40"}
                        src={"/night.png"}
                        alt="dark_mode_icon"
                      />
                      অন্ধকার
                    </h2>
                    <MovingBorder isActive={isDark} />
                  </div>
                </div>
                <div className="settings__theme  flex justify-between w-full items-center mt-3  option__border rounded-full">
                  <h2 className="pl-4 text-[14px]">আরবি আয়াত থাকবে?</h2>

                  <div
                    onClick={() => {
                      setShowArabic(!showArabic);
                      const arabicParas =
                        document.querySelectorAll(".arabic_text");
                      arabicParas.forEach((para) => {
                        para.classList.toggle("hidden");
                      });
                    }}
                    className="dark:bg-[#1e212b] flex justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer  tab__bg"
                  >
                    <h2 className="z-20 pr-[32px] text-[14px]">না</h2>
                    <h2 className="z-20 pr-[5px] text-[14px]">হ্যা</h2>
                    <MovingBorder isActive={showArabic} />
                  </div>
                </div>

                <div className="w-full">
                  <div className="w-full">
                    <div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
                      <h2 className="pl-4 text-[14px]">অক্ষর সাইজ কেমন হবে?</h2>

                      <div
                        onClick={() => {
                          setIsSmallArabic(!isSmallArabic);
                          const arabicParas =
                            document?.querySelectorAll(".arabic_text");
                          arabicParas?.forEach((para) => {
                            para.classList.toggle("text-[30px]");
                          });
                        }}
                        className="flex dark:bg-[#1e212b] justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
                      >
                        <h2 className="z-20 pr-[25px] text-[14px]">ছোট</h2>
                        <h2 className="z-20 pr-[5px] text-[14px]">বড়</h2>
                        <MovingBorder isActive={isSmallArabic} />
                      </div>
                    </div>
                    <div className="h-14 flex justify-center items-center">
                      <h3
                        className={`flex gap-1 text-[22px] ${
                          isSmallArabic ? "text-[30px]" : "text-[22px]"
                        }`}
                      >
                        <span>〝</span> ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
                        <span>〝</span>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
                  <h2 className="pl-4 text-[14px]">বাংলা অর্থ থাকবে?</h2>

                  <div
                    onClick={() => {
                      setShowTranslate(!showTranslate);
                      const transitionParas =
                        document?.querySelectorAll(".translation_text");
                      transitionParas?.forEach((para) => {
                        para.classList.toggle("hidden");
                      });
                    }}
                    className="flex dark:bg-[#1e212b] justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg"
                  >
                    <h2 className="z-20 pr-[32px] text-[14px]">না</h2>
                    <h2 className="z-20 pr-[5px] text-[14px]">হ্যা</h2>
                    <MovingBorder isActive={showTranslate} />
                  </div>
                </div>
                <div
                  onClick={() => {
                    setIsSmallletter(!isSmallletter);
                    const transitionParas =
                      document?.querySelectorAll(".translation_text");
                    transitionParas?.forEach((para) => {
                      para.classList.toggle("text-[28px]");
                    });
                  }}
                  className="w-full"
                >
                  <div className="w-full">
                    <div className="settings__theme flex justify-between w-full items-center mt-3  option__border rounded-full">
                      <h2 className="pl-4 text-[14px]">অক্ষর সাইজ কেমন হবে?</h2>

                      <div className="flex dark:bg-[#1e212b] justify-center items-center rounded-full p-2 w-[100px] relative cursor-pointer tab__bg">
                        <h2 className="z-20 pr-[25px] text-[14px]">ছোট</h2>
                        <h2 className="z-20 pr-[5px] text-[14px]">বড়</h2>
                        <MovingBorder isActive={isSmallletter} />
                      </div>
                    </div>
                    <div className="h-14 flex justify-center items-center">
                      <h2
                        className={`flex gap-1 ${
                          isSmallletter ? "text-[28px]" : "text-[22px]"
                        } `}
                      >
                        &quot; দয়াময়, পরম দয়ালু &quot;
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
