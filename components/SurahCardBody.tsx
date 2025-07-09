"use client";
import { motion } from "framer-motion";

const SurahCardBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative bg-bg_surah_card border-border_color  border dark:border-none dark:bg-dark_bg_surah_card dark:hover:bg-[#2b303a93] flex justify-between items-center p-3 mx-2 mt-2 h-[80px] rounded-md cursor-pointer hover:shadow-[0_0px_40px_0px_rgba(1,0,0,0.2)] dark:text-[#bcccdf] ease-out duration-300 active:scale-95"
    >
      {children}
    </motion.div>
  );
};

export default SurahCardBody;
