import { BsTwitter } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { ImInstagram } from "react-icons/im";

import { CustomLink } from "@/components/CustomLink";
import { RoutesList } from "@/features/Footer/components/RoutesList";
import { routes } from "@/features/Footer/constants/routes";

import { CurrencySwitcher } from "../../components/CurrencySwitcher";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

export const FooterSection = () => {
  return (
    <footer
      role="contentinfo"
      className="border-t border-solid border-gray-300 "
    >
      <div className="mx-auto flex flex-col gap-8 px-6 py-12 xl:container">
        <div className="grid grid-cols-4 gap-32 md:gap-16 xs:grid-cols-1">
          <div className="flex flex-col gap-4">
            <LanguageSwitcher />
            <CurrencySwitcher />
          </div>
          <RoutesList title="Airbnb" routes={routes.airbnb} />
          <RoutesList title="Descubre Airbnb" routes={routes.discover} />
          <RoutesList title="Hospedar" routes={routes.host} />
        </div>
        <hr className="border-gray-300" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Airbnb, Inc.</span>
          </div>
          <div className="flex items-center gap-2">
            {routes.bottom.map((route) => (
              <CustomLink key={route.name} href={route.url}>
                <span className="text-sm text-gray-500 hover:underline">
                  {route.name}
                </span>
              </CustomLink>
            ))}
            <div className="flex gap-2">
              <CustomLink href="https://www.facebook.com/airbnb">
                <CgFacebook className="text-gray-500" />
              </CustomLink>
              <CustomLink href="https://twitter.com/airbnb">
                <BsTwitter className="text-gray-500" />
              </CustomLink>
              <CustomLink href="https://www.instagram.com/airbnb">
                <ImInstagram className="text-gray-500" />
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
