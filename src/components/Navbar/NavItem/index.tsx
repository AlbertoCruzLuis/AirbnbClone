import classnames from "classnames";
import type { FC, ReactNode } from "react";
import { memo } from "react";

import { CustomLink } from "@/components/CustomLink";

type NavItemProps = {
  name: string;
  url: string;
  icon?: ReactNode;
  isActive: boolean;
  activeStyle?: string;
  disableStyle?: string;
};

export const NavItemComponent: FC<NavItemProps> = ({
  name,
  url,
  icon,
  isActive,
  activeStyle = "border-black",
  disableStyle = "border-transparent",
}) => {
  const divStyle = classnames("border-b-2 border-solid hover:border-gray-400", {
    [activeStyle]: isActive,
    [disableStyle]: !isActive,
  });

  const linkStyle = classnames({
    "font-semibold text-black": isActive,
    "text-black": !isActive,
  });

  return (
    <div className={divStyle}>
      <CustomLink href={url} className={linkStyle}>
        <div className="flex items-center gap-2">
          {icon && icon}
          <span>{name}</span>
        </div>
      </CustomLink>
    </div>
  );
};

export const NavItem = memo(NavItemComponent);
