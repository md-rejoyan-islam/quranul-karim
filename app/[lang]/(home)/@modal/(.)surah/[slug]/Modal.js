"use client";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  function close() {
    router.back();
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-10 focus:outline-none "
      onClose={close}

      // __demoMode
    >
      <DialogBackdrop className="fixed inset-0 bg-sky-400/20 " />
      <div className="fixed inset-0 z-10 max-w-[1276px] min-h-screen overflow-y-scroll    mx-auto ">
        <div className="flex  p-2 sm:p-4  items-center justify-center">
          <DialogPanel
            transition
            className=" w-full    rounded-xl bg-bg_secondary dark:bg-dark_bg_primary p-6 sm:p-2 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
