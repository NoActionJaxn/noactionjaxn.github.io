import { useStore } from "@nanostores/react";
import { theme } from "../../stores/theme";
import classNames from "classnames";

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
          'relative cursor-pointer overflow-hidden top-0 bottom-0 w-16 h-10 flex items-center rounded-lg p-1 inset-shadow-sm transition-colors duration-300',
          isDarkMode ? "bg-gruvbox-blue-alt dark:bg-gruvbox-dark-blue-alt text-gruvbox-blue dark:text-gruvbox-dark-blue" : "bg-gruvbox-orange-alt dark:bg-gruvbox-dark-orange-alt"
        )}
    >
      <i className={
        classNames(
          "fa-solid fa-moon absolute text-lg transition-normal duration-300 text-white/35",
          {
            "left-1/4": isDarkMode,
            "-left-10": !isDarkMode,
          }
        )}></i>
      <i className={
        classNames(
          "fa-solid fa-sun absolute text-xl transition-normal duration-300 text-white/45",
          {
            "right-1/5": !isDarkMode,
            "-right-10": isDarkMode,
          }
        )}></i>
      <span className="sr-only">{isDarkMode ? 'Enable light mode' : 'Enable dark mode'}</span>
      <span
        className={
          classNames(
            'bg-white/70 h-8 w-4 rounded transform shadow-sm transition-transform duration-300',
            isDarkMode ? "translate-x-10" : ""
          )}
      />
    </button>
  );
}

export default ThemeToggle;