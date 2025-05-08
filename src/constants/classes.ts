import { b } from "framer-motion/client";

export const SPACING = {
  PAGE: {
    PADDING: {
      X: "px-4",
      Y: "py-4",
    },
  }
};

export const COLORS = {
  PAGE: {
    bg: "bg-gruvbox-fg0 dark:bg-gruvbox-dark-fg0",
    BACKGROUND: "bg-gruvbox-bg1 dark:bg-gruvbox-dark-bg1"
  },
  HEADER: {
    BACKGROUND: "bg-gruvbox-bg0/75 dark:bg-gruvbox-dark-bg0/75"
  },
  HEADER_BUTTON: {
    bg: "bg-gruvbox-fg0 dark:bg-gruvbox-dark-fg0",
    BACKGROUND: "bg-transparent dark:bg-transparent hover:bg-gruvbox-bg0_h/75 dark:hover:bg-gruvbox-dark-bg0_h/75",
  },
  MENU: {
    BACKGROUND: "bg-gruvbox-bg0/75 dark:bg-gruvbox-dark-bg0/75"
  },
  MENU_BUTTON: {
    bg: "bg-gruvbox-fg0 dark:bg-gruvbox-dark-fg0",
    BACKGROUND: "bg-transparent dark:bg-transparent hover:bg-gruvbox-bg0_h/75 dark:hover:bg-gruvbox-dark-bg0_h/75",
  },
  OVERLAY: {
    BACKGROUND: "bg-gruvbox-dark-bg0_h/75 dark:gruvbox-dark-bg0_h/75",
  },
};

export const THEME_COLORS = {
  background: {
    bg0h: "bg-gruvbox-bg0_h dark:bg-gruvbox-dark-bg0_h",
    bg0: "bg-gruvbox-bg0 dark:bg-gruvbox-dark-bg0",
    bg1: "bg-gruvbox-bg1 dark:bg-gruvbox-dark-bg1",
    bg2: "bg-gruvbox-bg2 dark:bg-gruvbox-dark-bg2",
    bg3: "bg-gruvbox-bg3 dark:bg-gruvbox-dark-bg3",
    bg4: "bg-gruvbox-bg4 dark:bg-gruvbox-dark-bg4",
    fg0: "bg-gruvbox-fg0 dark:bg-gruvbox-dark-fg0",
    fg1: "bg-gruvbox-fg1 dark:bg-gruvbox-dark-fg1",
    fg2: "bg-gruvbox-fg2 dark:bg-gruvbox-dark-fg2",
    fg3: "bg-gruvbox-fg3 dark:bg-gruvbox-dark-fg3",
    fg4: "bg-gruvbox-fg4 dark:bg-gruvbox-dark-fg4",
    red: "bg-gruvbox-red dark:bg-gruvbox-dark-red",
    redAlt: "bg-gruvbox-red-alt dark:bg-gruvbox-dark-red-alt",
    green: "bg-gruvbox-green dark:bg-gruvbox-dark-green",
    greenAlt: "bg-gruvbox-green-alt dark:bg-gruvbox-dark-green-alt",
    yellow: "bg-gruvbox-yellow dark:bg-gruvbox-dark-yellow",
    yellowAlt: "bg-gruvbox-yellow-alt dark:bg-gruvbox-dark-yellow-alt",
    blue: "bg-gruvbox-blue dark:bg-gruvbox-dark-blue",
    blueAlt: "bg-gruvbox-blue-alt dark:bg-gruvbox-dark-blue-alt",
    purple: "bg-gruvbox-purple dark:bg-gruvbox-dark-purple",
    purpleAlt: "bg-gruvbox-purple-alt dark:bg-gruvbox-dark-purple-alt",
    aqua: "bg-gruvbox-aqua dark:bg-gruvbox-dark-aqua",
    aquaAlt: "bg-gruvbox-aqua-alt dark:bg-gruvbox-dark-aqua-alt",
    orange: "bg-gruvbox-orange dark:bg-gruvbox-dark-orange",
    orangeAlt: "bg-gruvbox-orange-alt dark:bg-gruvbox-dark-orange-alt",
    gray: "bg-gruvbox-gray dark:bg-gruvbox-dark-gray",
  },
  text: {
    bg0h: "text-gruvbox-bg0_h dark:text-gruvbox-dark-bg0_h",
    bg0: "text-gruvbox-bg0 dark:text-gruvbox-dark-bg0",
    bg1: "text-gruvbox-bg1 dark:text-gruvbox-dark-bg1",
    bg2: "text-gruvbox-bg2 dark:text-gruvbox-dark-bg2",
    bg3: "text-gruvbox-bg3 dark:text-gruvbox-dark-bg3",
    bg4: "text-gruvbox-bg4 dark:text-gruvbox-dark-bg4",
    fg0: "text-gruvbox-fg0 dark:text-gruvbox-dark-fg0",
    fg1: "text-gruvbox-fg1 dark:text-gruvbox-dark-fg1",
    fg2: "text-gruvbox-fg2 dark:text-gruvbox-dark-fg2",
    fg3: "text-gruvbox-fg3 dark:text-gruvbox-dark-fg3",
    fg4: "text-gruvbox-fg4 dark:text-gruvbox-dark-fg4",
    red: "text-gruvbox-red dark:text-gruvbox-dark-red",
    redAlt: "text-gruvbox-red-alt dark:text-gruvbox-dark-red-alt",
    green: "text-gruvbox-green dark:text-gruvbox-dark-green",
    greenAlt: "text-gruvbox-green-alt dark:text-gruvbox-dark-green-alt",
    yellow: "text-gruvbox-yellow dark:text-gruvbox-dark-yellow",
    yellowAlt: "text-gruvbox-yellow-alt dark:text-gruvbox-dark-yellow-alt",
    blue: "text-gruvbox-blue dark:text-gruvbox-dark-blue",
    blueAlt: "text-gruvbox-blue-alt dark:text-gruvbox-dark-blue-alt",
    purple: "text-gruvbox-purple dark:text-gruvbox-dark-purple",
    purpleAlt: "text-gruvbox-purple-alt dark:text-gruvbox-dark-purple-alt",
    aqua: "text-gruvbox-aqua dark:text-gruvbox-dark-aqua",
    aquaAlt: "text-gruvbox-aqua-alt dark:text-gruvbox-dark-aqua-alt",
    orange: "text-gruvbox-orange dark:text-gruvbox-dark-orange",
    orangeAlt: "text-gruvbox-orange-alt dark:text-gruvbox-dark-orange-alt",
    gray: "text-gruvbox-gray dark:text-gruvbox-dark-gray",
  },
  border: {
    bg0h: "border-gruvbox-bg0_h dark:border-gruvbox-dark-bg0_h",
    bg0: "border-gruvbox-bg0 dark:border-gruvbox-dark-bg0",
    bg1: "border-gruvbox-bg1 dark:border-gruvbox-dark-bg1",
    bg2: "border-gruvbox-bg2 dark:border-gruvbox-dark-bg2",
    bg3: "border-gruvbox-bg3 dark:border-gruvbox-dark-bg3",
    bg4: "border-gruvbox-bg4 dark:border-gruvbox-dark-bg4",
    fg0: "border-gruvbox-fg0 dark:border-gruvbox-dark-fg0",
    fg1: "border-gruvbox-fg1 dark:border-gruvbox-dark-fg1",
    fg2: "border-gruvbox-fg2 dark:border-gruvbox-dark-fg2",
    fg3: "border-gruvbox-fg3 dark:border-gruvbox-dark-fg3",
    fg4: "border-gruvbox-fg4 dark:border-gruvbox-dark-fg4",
    red: "border-gruvbox-red dark:border-gruvbox-dark-red",
    redAlt: "border-gruvbox-red-alt dark:border-gruvbox-dark-red-alt",
    green: "border-gruvbox-green dark:border-gruvbox-dark-green",
    greenAlt: "border-gruvbox-green-alt dark:border-gruvbox-dark-green-alt",
    yellow: "border-gruvbox-yellow dark:border-gruvbox-dark-yellow",
    yellowAlt: "border-gruvbox-yellow-alt dark:border-gruvbox-dark-yellow-alt",
    blue: "border-gruvbox-blue dark:border-gruvbox-dark-blue",
    blueAlt: "border-gruvbox-blue-alt dark:border-gruvbox-dark-blue-alt",
    purple: "border-gruvbox-purple dark:border-gruvbox-dark-purple",
    purpleAlt: "border-gruvbox-purple-alt dark:border-gruvbox-dark-purple-alt",
    aqua: "border-gruvbox-aqua dark:border-gruvbox-dark-aqua",
    aquaAlt: "border-gruvbox-aqua-alt dark:border-gruvbox-dark-aqua-alt",
    orange: "border-gruvbox-orange dark:border-gruvbox-dark-orange",
    orangeAlt: "border-gruvbox-orange-alt dark:border-gruvbox-dark-orange-alt",
    gray: "border-gruvbox-gray dark:border-gruvbox-dark-gray",
  }

};
