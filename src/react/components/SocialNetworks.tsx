import { label } from "framer-motion/client";
import type { SocialNetworkEdge } from "../../types/socialNetworks";
import { COLORS } from "../../constants/classes";
import classNames from "classnames";

export interface SocialNetworksProps {
  socialNetworks: SocialNetworkEdge[];
}

function SocialNetworks({ socialNetworks }: SocialNetworksProps) {
  return (
    <ul className="space-x-0.5">
      {socialNetworks.map(({ node }) => (
        <li key={node.id} className="inline-block">
          <a href={node.connectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={node.label}
            className={classNames(
              "relative size-10 flex items-center justify-center cursor-pointer rounded-lg",
              COLORS.HEADER_BUTTON.TEXT,
              COLORS.HEADER_BUTTON.BACKGROUND,
            )}>
            <i className={`fa ${node.fontAwesomeIcon} text-sm`}></i>
            <span className="sr-only">{node.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialNetworks;
