export default function MovingBorder({ isActive }) {
  return (
    <div className="absolute top-0 z-10 h-[100%] flex  items-center   w-[98%]">
      <span
        className={`border-2 borde-red-300 rounded-full h-[90%]  opacity-80 absolute transition-all duration-500 w-[50%]  left-0 ${
          isActive ? "left-[50%]" : "translate-x-0"
        }`}
      ></span>
    </div>
  );
}