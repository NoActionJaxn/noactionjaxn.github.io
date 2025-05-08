import classNames from "classnames";
import { useStore } from "@nanostores/react";
import { theme } from "../../stores/theme";
import { THEME_COLORS } from "../../constants/classes";

function ThemeToggle() {
  const $theme = useStore(theme);

  const isDarkMode = $theme === 'dark';

  const handleClick = () => {
    theme.set(isDarkMode ? 'light' : 'dark');
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        classNames(
          'group relative flex items-center cursor-pointer overflow-hidden rounded-lg top-0 bottom-0 w-12 h-6 p-1 inset-shadow-sm transition-colors duration-300',
          isDarkMode ? THEME_COLORS.background.blueAlt : THEME_COLORS.background.orangeAlt,
          isDarkMode ? THEME_COLORS.text.blue : THEME_COLORS.background.orangeAlt,
        )}
    >
      <i className={
        classNames(
          "fa-solid fa-moon absolute text-xs transition-normal duration-300 text-white/35 group-hover:text-white/60",
          {
            "left-2.5 opacity-100": isDarkMode,
            "-left-6 opacity-0": !isDarkMode,
          }
        )}></i>
      <i className={
        classNames(
          "fa-solid fa-sun absolute text-xs transition-normal duration-300 text-white/35 group-hover:text-white/60",
          {
            "right-2 opacity-100": !isDarkMode,
            "-right-6 opacity-0": isDarkMode,
          }
        )}></i>
      <span className="sr-only">{isDarkMode ? 'Enable light mode' : 'Enable dark mode'}</span>
      <span
        className={
          classNames(
            'group-hover:bg-white/95 bg-white/70 size-4 rounded transform shadow-sm transition-normal duration-300',
            isDarkMode ? "translate-x-6" : ""
          )}
      />
    </button>
  );
}

export default ThemeToggle;