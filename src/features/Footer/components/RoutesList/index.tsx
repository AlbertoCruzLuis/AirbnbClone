import type { FC } from "react";

import { CustomLink } from "@/components/CustomLink";

type IRoutesList = {
  title: string;
  routes: Array<{
    name: string;
    url: string;
  }>;
};

export const RoutesList: FC<IRoutesList> = ({ title, routes }) => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-1">
        {routes.map((route) => (
          <li key={route.name}>
            <CustomLink href={route.url}>
              <span className="text-sm text-gray-500 hover:underline">
                {route.name}
              </span>
            </CustomLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
