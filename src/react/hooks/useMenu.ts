import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../../stores/menu";

function useMenu() {
  const $isMenuOpen = useStore(isMenuOpen);

  const handleToggle = () => {
    isMenuOpen.set(!$isMenuOpen);
  }

  const handleClick = (isOpen: boolean) => {
    isMenuOpen.set(isOpen);
  }

  return {
    isOpen: $isMenuOpen,
    setIsOpen: handleClick,
    toggle: handleToggle,
  }
}

export default useMenu;
