export default function initTheme() {
  try {
    const saved = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = saved || system;
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
}
