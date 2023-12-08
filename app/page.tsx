import personal from "@/public/personal.png";
import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center dark:bg-black dark:text-white sm:flex-row">
      <div>
        <h1 className="text-2xl font-semibold dark:text-white">Hey </h1>
      </div>
      <div className="-mb-20 mt-6 dark:text-white md:hidden">
        <FaArrowDown />
      </div>
      <div className="-mr-20 hidden pl-8 dark:text-white sm:block">
        <FaArrowRight />
      </div>
      <div>
        <Image
          alt="home"
          src={personal}
          className="scale-50 transform rounded-full transition hover:-translate-y-1 hover:scale-75 motion-reduce:transition-none motion-reduce:hover:transform-none"
        />
      </div>
    </div>
  );
}
