"use client";

import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher(props: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col gap-2 ">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "h-8 w-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {isSelected ? <FaMoon /> : <FaSun />}
        </div>
      </Component>
    </div>
  );
}
