import SurahText from "./SurahText";
import SurahTranslation from "./SurahTranslation";

const SurahBody = ({
  verses,
}: {
  verses: Array<{
    id: string;
    text: string;
    translation: string;
  }>;
}) => {
  return (
    <section className="px-4 bg-transparent max-w-[1276px] mx-auto dark:text-[#beccdf]">
      <div className="py-10 ">
        {verses?.map((verse) => (
          <div
            key={verse.id}
            className="py-8 border-b border-border_color dark:border-dark_border_color"
          >
            <SurahText text={verse.text} />
            <SurahTranslation translation={verse.translation} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SurahBody;
