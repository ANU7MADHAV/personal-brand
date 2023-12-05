import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { label: "Home", value: "/" },
    { label: "Explore", value: "/explore" },
    { label: "Find me", value: "/" },
  ];
  return (
    <div className="dark:bg-black dark:text-white">
      <nav className="flex justify-between px-8 py-3">
        <ul className="flex gap-5">
          {links.map((link) => (
            <>
              <li key={link.value}>
                <Link href={link.value}>{link.label}</Link>
              </li>
            </>
          ))}
        </ul>
        <ThemeSwitcher />
      </nav>
    </div>
  );
};

export default Navbar;
