import React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import classNames from 'classnames';
import { isMenuOpen, toggleMenu } from '../../stores/menuStore';

export interface MenuButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'children'> {
}

const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ className, ...rest }, ref) => {
    const classes = "block w-full h-0.5 bg-gruvbox-fg2"
    const $isOpen = useStore(isMenuOpen);

    return (
      <button
        ref={ref}
        onClick={toggleMenu}
        className={
          classNames(
            "relative size-10 flex items-center justify-center cursor-pointer rounded-full border border-gruvbox-bg2 bg-gruvbox-bg1 hover:bg-gruvbox-bg2",
            className
          )}
        {...rest}
      >
        <motion.div
          initial={false}
          animate={$isOpen ? "open" : "closed"}
          className="relative w-4 h-3 flex flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5 },
            }}
            className={classNames(classes, "origin-center")}
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className={classes}
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -5 },
            }}
            className={classNames(classes, "origin-center")}
          />
        </motion.div>
      </button>
    );
  }
);

MenuButton.displayName = 'MenuButton';

export default MenuButton;
