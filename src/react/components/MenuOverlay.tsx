import classNames from "classnames";
import useMenu from "../hooks/useMenu";
import useKeyPress from "../hooks/useKeyPress";
import { useRef } from "react";

export interface MenuOverlayProps {
  children: React.ReactNode;
}

function MenuOverlay({ children }: MenuOverlayProps) {
  const { isOpen, toggle } = useMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useKeyPress("Escape", () => {
    if (isOpen) {
      toggle();
    }
  });

  return (
    <div
      className={classNames(
        "pt-24 px-4 pb-4 md:items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-xs bg-gruvbox-dark-bg0_h/75 dark:gruvbox-dark-bg0_h/75",
        isOpen ? "block" : "hidden",
      )}
    >
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default MenuOverlay;
