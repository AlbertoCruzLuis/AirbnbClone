import { useRouter } from "next/router";
import type { FC, ReactNode } from "react";
import { memo, useId } from "react";

import { NavItem } from "./NavItem";

export interface INavbarProps {
  routes: Array<{
    name: string;
    url: string;
    icon?: ReactNode;
  }>;
  containerStyle?: string;
}

const NavbarComponent: FC<INavbarProps> = ({
  routes,
  containerStyle = "flex flex-wrap overflow-hidden max-h-[32px] gap-8",
  ...rest
}) => {
  const router = useRouter();
  const id = useId();

  const isActiveRoute = (route: string) => {
    return router.asPath === route;
  };

  return (
    <nav aria-label="Main" className={`${containerStyle}`}>
      {routes &&
        routes.map(({ name, url, icon }, index) => (
          <NavItem
            key={`${id}-${index}`}
            name={name}
            url={url}
            icon={icon}
            isActive={isActiveRoute(url)}
            {...rest}
          />
        ))}
    </nav>
  );
};

export const Navbar = memo(NavbarComponent);
