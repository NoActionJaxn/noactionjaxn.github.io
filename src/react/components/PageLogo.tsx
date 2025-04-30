import classNames from "classnames";
import { ROUTES } from "../../constants/routes";

export interface PageLogoProps {
  className?: string;
}

function PageLogo({ className }: PageLogoProps) {
  return (
    <a href={ROUTES.index.path} className={classNames("flex gap-0.5 no-underline select-none cursor-pointer font-bold", className)}>
      <span>JAXN.DEV</span>
      <span>&#9608;</span>
    </a>
  );
};

export default PageLogo;
