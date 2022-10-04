import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { memo } from "react";

import { SearchBarSmallSection } from "@/features/SearchBar/content/SearchBarSmallSection";

import { CustomLink } from "../../../CustomLink";
import type { INavbarProps } from "../../../Navbar";

const Navbar = dynamic<INavbarProps>(
  () => import("@/components/Navbar").then((mod) => mod.Navbar),
  { ssr: false }
);

const Logo = dynamic(
  () => import("@/components/Logo").then((mod) => mod.Logo),
  { ssr: false }
);

export const routes = [
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
  const { pathname } = useRouter();

  const isSearchPage = pathname.includes("/s/");
  return (
    <header role="banner" className="bg-white px-8 py-4">
      <div className="mx-auto flex items-center justify-between xl:container">
        <div className="flex gap-4">
          <CustomLink className="flex items-center pr-5" href="/">
            <Logo />
          </CustomLink>
          {isSearchPage && <SearchBarSmallSection />}
        </div>
        <div className="pl-5 sm:hidden md:hidden lg:hidden xs:hidden">
          <Navbar routes={routes} />
        </div>
      </div>
    </header>
  );
};

export const HeaderV1 = memo(HeaderComponent);
