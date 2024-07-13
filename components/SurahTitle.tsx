export default function SurahTitle({
  name,
  meaning,
  number,
  verses,
  revelation,
}: {
  name: string;
  meaning: string;
  number: number;
  verses: number;
  revelation: string;
}) {
  return (
    <div className="middle flex flex-col justify-end items-center relative">
      <div className=" flex justify-center gap-1 items-center">
        <h2>{name}</h2>
        <span className="mt-[3px]  text-[10px]">( {meaning} )</span>
      </div>
      <div className=" text-[13px] flex flex-row justify-center  items-baseline ">
        <span className="mr-[2px] "></span>
        <li className="mr-[6px] text-[12px] flex">{number}</li>
        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]"></span>
        <li className="mr-[2px] text-[12px] flex">{verses}</li>

        <span className="mr-[2px] ml-[2px] mt-[3px]">•</span>
        <span className="mr-[2px] ml-[6px]"></span>
        <span className="mr-[2px]">{revelation}</span>
      </div>
    </div>
  );
}
