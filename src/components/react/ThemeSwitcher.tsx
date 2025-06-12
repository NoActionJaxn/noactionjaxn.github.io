import { useStore } from "@nanostores/react";
import { theme } from "../../stores/themeStore";
import classNames from "classnames";

export interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const $theme = useStore(theme);

  const toggle = () => {
    theme.set($theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={classNames("size-8 rounded cursor-pointer hover:bg-gruvbox-bg0", className)}
    >
      {$theme === "dark" ? (<i className="fa-solid fa-sun"></i>) : (<i className="fa-solid fa-moon"></i>)}
    </button>
  );
}