import classNames from "classnames";
import { ROUTES } from "../../constants/routes";
import { COLORS } from "../../constants/classes";
import useMenu from "../hooks/useMenu";
import useKeyPress from "../hooks/useKeyPress";
import useOutsideClick from "../hooks/useOutsideClick";
import { useRef } from "react";

function Menu() {
  const { isOpen, setIsOpen, toggle } = useMenu();
  const menuRef = useRef<HTMLDivElement>(null);

  useKeyPress("Escape", () => {
    if (isOpen) {
      toggle();
    }
  });

  useOutsideClick(menuRef, () => {
    if (isOpen) {
      setIsOpen(false)
    };
  });

  return (
    <div
      className={classNames(
        "items-center justify-center fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-xs",
        isOpen ? "flex" : "hidden",
        COLORS.OVERLAY.BACKGROUND,
      )}>
      <div ref={menuRef} className={classNames("flex flex-col w-1/2 p-2 gap-3 rounded-lg shadow-lg", COLORS.MENU.BACKGROUND)}>
        <div className="bg-gruvbox-bg0 dark:bg-gruvbox-dark-bg1 px-2 py-1 rounded-lg">
          <h6 className="text-xs select-none">&#8942;&#8942; Menu</h6>
        </div>
        <div>
          <ul className="space-y-1">
            {Object.entries(ROUTES).map(([key, { path, label }]) => (
              <li key={key} className="block w-full">
                <a href={path} className={classNames("flex items-center w-full h-12 px-4 rounded-lg", COLORS.MENU_BUTTON.TEXT, COLORS.MENU_BUTTON.BACKGROUND)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Menu;
