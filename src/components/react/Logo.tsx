import { ROUTES } from "../../constants/routes";
import classNames from "classnames";

export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className="w-min h-min">
      <a href={ROUTES.index.path} className={classNames("block px-2 py-1 text-gruvbox-fg2 no-underline uppercase font-oswald text-xl", className)}>
        noactionjaxn
      </a>
    </div>
  );
}
