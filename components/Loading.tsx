"use client";
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen w-full grid place-content-center ">
      <RotatingLines />
    </div>
  );
}
