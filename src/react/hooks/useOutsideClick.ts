import { useEffect } from "react";

function useOutsideClick<T extends HTMLElement | null>(
  ref?: React.RefObject<T>,
  onOutsideClick?: () => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref?.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick?.();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onOutsideClick]);
}

export default useOutsideClick;
