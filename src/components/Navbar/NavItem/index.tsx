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
  activeStyle = "border-b-2",
  disableStyle = "",
}) => {
  const divStyle = isActive
    ? `${activeStyle} border-solid border-white`
    : `${disableStyle}`;
  const linkStyle = isActive ? "text-white" : "text-gray-400";

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
