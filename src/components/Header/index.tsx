import dynamic from "next/dynamic";
import { memo } from "react";

import { CustomLink } from "../CustomLink";
import type { INavbarProps } from "../Navbar";

const Navbar = dynamic<INavbarProps>(
  () => import("@/components/Navbar").then((mod) => mod.Navbar),
  { ssr: false }
);

const Logo = dynamic(
  () => import("@/components/Logo").then((mod) => mod.Logo),
  { ssr: false }
);

const routes = [
  {
    name: "Conviertete en anfitrion",
    url: "/host/",
  },
  {
    name: "Ayuda",
    url: "/help/",
  },
  {
    name: "Registrate",
    url: "/signup/",
  },
  {
    name: "Inicia sesion",
    url: "/login/",
  },
];

const HeaderComponent = () => {
  return (
    <header className="px-8 py-4">
      <div className="mx-auto flex items-center justify-between xl:container">
        <CustomLink className="pr-5" href="/">
          <Logo />
        </CustomLink>
        <div className="pl-5 xs:hidden">
          <Navbar routes={routes} />
        </div>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
