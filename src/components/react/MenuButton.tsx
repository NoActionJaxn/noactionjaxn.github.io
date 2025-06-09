import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useStore } from "@nanostores/react";
import { isMenuOpen, toggleMenu } from "../../stores/menuStore";

export interface MenuButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {}

const MenuButton = forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, ...rest }, ref) => {
    const barStyles = "block w-full h-0.5 bg-gruvbox-fg2 origin-center";
    const centerBarStyles = "block w-full h-0.5 bg-gruvbox-fg2";

    const $isMenuOpen = useStore(isMenuOpen);

    return (
      <div className="relative w-min h-min">
        <button
          ref={ref}
          className={classNames(
            "relative w-10 h-10 flex items-center justify-center cursor-pointer p-1",
            className
          )}
          onClick={toggleMenu}
          {...rest}
        >
          <motion.div
            initial={false}
            animate={$isMenuOpen ? "open" : "closed"}
            className="relative w-6 h-4 flex flex-col justify-between"
          >
            {/* Top bar */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 7},
              }}
              className={barStyles}
            />
            {/* Middle bar */}
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className={centerBarStyles}
            />
            {/* Bottom bar */}
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -7 },
              }}
              className={barStyles}
            />
          </motion.div>
        </button>
      </div>
    );
  }
);

export default MenuButton;
