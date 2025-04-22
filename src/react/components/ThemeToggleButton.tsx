import { useStore } from "@nanostores/react";
import { AnimatePresence, motion } from "framer-motion";
import { theme } from "../../stores/theme";
import classNames from "classnames";
import { COLORS } from "../../constants/classes";

function ThemeToggleButton() {
  const $theme = useStore(theme);

  const handleClick = () => {
    theme.set($theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(
        "relative size-10 flex items-center justify-center cursor-pointer rounded-lg",
        COLORS.HEADER_BUTTON.TEXT,
        COLORS.HEADER_BUTTON.BACKGROUND,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {$theme === 'dark' ? (
          <motion.div
            key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-solid fa-moon text-sm"></i>
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fa-solid fa-sun text-sm"></i>
          </motion.div>
        )}
      </AnimatePresence>
      <span className="sr-only">Change Theme</span>
    </button>
  );
}

export default ThemeToggleButton;