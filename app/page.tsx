import personal from "@/public/personal.png";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-screen h-screen dark:bg-black dark:text-white flex flex-col justify-center items-center sm:flex-row">
      <div>
        <h1 className="text-2xl dark:text-white font-semibold">Hey I&apos;m</h1>
      </div>
      <div className="md:hidden dark:text-white mt-6 -mb-20">
        <FaArrowDown />
      </div>
      <div className="hidden dark:text-white pl-8 -mr-20 sm:block">
        <FaArrowRight />
      </div>
      <div>
        <Image
          alt="home"
          src={personal}
          className="rounded-full scale-50 hover:scale-75 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        />
      </div>
    </div>
  );
}
