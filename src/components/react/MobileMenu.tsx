import { ROUTES } from "../../constants/routes";
import { useStore } from "@nanostores/react";
import { closeMenu, isMenuOpen } from "../../stores/menuStore";
import { useResize } from "./hooks/useResize";
import classNames from "classnames";
import type { AllSocialNetworksResponse } from "../../lib/requests/allSocialNetworks";

export interface MobileMenuProps {
  socialNetworks: AllSocialNetworksResponse["allSocialNetworks"]["edges"];
}

export default function MobileMenu({ socialNetworks }: MobileMenuProps) {
  const $isMenuOpen = useStore(isMenuOpen);

  useResize(() => {
    closeMenu();
  }, 250);

  const currentPath = window.location.pathname;

  if (!$isMenuOpen) return null;

  return (
    <div className="fixed flex flex-col justify-between top-0 left-0 w-screen h-screen bg-gruvbox-bg1 z-20 px-16 pt-36 pb-16 visible md:hidden">
      <nav>
        <ul className="space-y-8 text-4xl">
          {Object.values(ROUTES).map((route) => {
            const isActive =
              route.path === "/"
                ? currentPath === "/"
                : currentPath.startsWith(route.path);

            return (
              <li>
                <a
                  href={route.path}
                  aria-current={isActive ? "page" : undefined}
                  className="relative inline-block group font-medium"
                >
                  <span>{route.label}</span>
                  <span
                    className={classNames(
                      "absolute left-0 -bottom-2 h-0.5 w-full bg-gruvbox-fg2 transition-transform duration-300 origin-left",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="flex justify-end">
        <ul className="block text-4xl space-x-8">
          {socialNetworks.map((edge) => (
            <li key={edge.cursor} className="inline-block">
              <a href={edge.node.connectionUrl}>
                <i className={edge.node.fontAwesomeIcon} />
                <span className="sr-only">{edge.node.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
