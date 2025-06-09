import { useStore } from "@nanostores/react";
import { theme } from "../../stores/themeStore";
import classNames from "classnames";

export interface ThemeToggleProps {
  className?: string;
}

/**
 * A button component that toggles the application's theme between 'light' and 'dark'
 * modes when clicked. The button displays a sun icon for the 'dark' mode and a moon
 * icon for the 'light' mode.
 *
 * @param {ThemeToggleProps} props - The properties for the ThemeToggle component.
 * @param {string} [props.className] - Optional additional class names for the button.
 */
export default function ThemeToggle({ className }: ThemeToggleProps) {
  const $theme = useStore(theme);

  const toggle = () => {
    theme.set($theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={classNames("size-8 rounded-full cursor-pointer hover:bg-gruvbox-bg0_h", className)}
    >
      {$theme === "dark" ? (<i className="fa-solid fa-sun"></i>) : (<i className="fa-solid fa-moon"></i>)}
    </button>
  );
}
