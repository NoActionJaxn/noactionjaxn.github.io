import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { isMenuOpen } from "../../stores/menuStore";
import type { Route } from "../../types/route";
import type { AllSocialNetworksResponse } from "../../types/requests";

export interface MenuProps {
  currentPath?: string;
  routes?: Route[];
  socials?: AllSocialNetworksResponse["allSocialNetworks"]["edges"];
}

export default function Menu({ currentPath, routes = [], socials = [] }: MenuProps) {
  const $isOpen = useStore(isMenuOpen);

  return (
    <motion.div
      className={classNames("overflow-hidden bg-gruvbox-bg0 border-gruvbox-bg2", $isOpen ? "border-b" : "border-b-0")}
      initial={false}
      animate={{ height: $isOpen ? "24rem" : "0rem" }} // h-96 = 24rem
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: $isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="grid grid-cols-12 gap-8 py-8 px-16 w-full h-full"
      >
        <div className="h-full col-span-6">
          1
        </div>
        <nav className="h-full col-span-4 space-y-4">
          <h3 className="text-xl select-none">Menu</h3>
          <ul className="space-y-2">
            {routes.map((route) => (
              <li key={route.path}>
                <a
                  href={route.path}
                  title={route.label}
                  className="group relative inline-block uppercase text-2xl no-underline text-gruvbox-fg3 hover:text-gruvbox-fg0"
                >
                  {route.label}
                  <span
                    className={classNames(
                      "absolute left-0 -bottom-1 h-0.5 bg-gruvbox-fg3 group-hover:bg-gruvbox-fg0 transition-all duration-300",
                      route.path === currentPath ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="flex flex-col items-end justify-between col-span-2 pr-2.5">
          <h3 className="text-xl rotate-90 -mr-5.5 mt-5 select-none">Find Me</h3>
          <ul className="text-xl space-y-2">
            {socials.map(({ node }) => (
              <li key={node.id}>
                <a href={node.connectionUrl} rel="noopener noreferrer"
                  target="_blank" title={node.label} className="no-underline text-gruvbox-fg3 hover:text-gruvbox-fg0 m-0">
                  <i className={node.fontAwesomeIcon}></i>
                  <span className="sr-only">{node.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.div >
  );
}
