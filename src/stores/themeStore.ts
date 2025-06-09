import { atom } from "nanostores";

// Initialize with the current theme from localStorage or system preference
const initialTheme = (() => {
  if (typeof window === "undefined") return "light"; // For server-side rendering
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
})();

export const theme = atom<"light" | "dark">(initialTheme);

// Subscribe to theme changes to update the DOM and localStorage
if (typeof window !== "undefined") {
  theme.subscribe((value) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", value);
    localStorage.setItem("theme", value);
  });
}
