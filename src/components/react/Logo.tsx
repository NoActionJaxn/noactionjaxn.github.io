import { ROUTES } from "../../constants/routes";
import classNames from "classnames";

export interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className="w-min h-min">
      <a href={ROUTES.index.path} className={classNames("block no-underline uppercase font-oswald", className)}>
        JAXN.HRMT
      </a>
    </div>
  );
}
