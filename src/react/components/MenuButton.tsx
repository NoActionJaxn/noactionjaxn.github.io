import classNames from "classnames";
import { motion } from "framer-motion";
import useMenu from "../hooks/useMenu";

const barStyles = "block w-full rounded-full h-0.5 bg-gruvbox-fg0 dark:bg-gruvbox-dark-fg0";

function HamburgerMenu() {
  const { isOpen, toggle } = useMenu();

  return (
    <button
      type="button"
      onClick={toggle}
      className="relative size-10 flex items-center justify-center cursor-pointer rounded-lg bg-transparent dark:bg-transparent hover:bg-gruvbox-bg0_h/75 dark:hover:bg-gruvbox-dark-bg0_h/75"
    >
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative w-4 h-2 flex flex-col justify-between"
      >
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 3 },
          }}
          className={classNames(barStyles, "origin-center")}
        />
        <motion.span
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          className={barStyles}
        />
        <motion.span
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -3 },
          }}
          className={classNames(barStyles, "origin-center")}
        />
      </motion.div>
      <span className="sr-only">Menu</span>
    </button>
  );
}

export default HamburgerMenu;