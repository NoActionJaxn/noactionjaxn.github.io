import classNames from "classnames";
import { useStore } from "@nanostores/react";
import { theme } from "../../stores/themeStore";

export interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const $theme = useStore(theme);

  const toggle = () => {
    theme.set($theme === "dark" ? "light" : "dark");
  };

  return (
    <aside className={"absolute right-0 mt-16 bg-gruvbox-bg0_h p-2 rounded-l-full"}>
      <button
        type="button"
        onClick={toggle}
        className={classNames("size-10 rounded-full cursor-pointer border border-gruvbox-bg2 hover:bg-gruvbox-bg2", className)}
      >
        {$theme === "dark" ? (<i className="fa-solid fa-sun"></i>) : (<i className="fa-solid fa-moon"></i>)}
      </button>
    </aside>
  );
}