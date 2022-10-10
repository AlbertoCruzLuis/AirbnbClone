import { SearchBar } from "@/features/SearchBar";

import { CustomLink } from "../CustomLink";

export const Hero = () => {
  return (
    <div className="mt-10 flex flex-col gap-12 p-8 xl:p-0">
      <h1 className="leading-10">
        <span className="text-5xl font-bold text-red-1000">Airbnb</span>
        <div>
          <span className="text-5xl font-light">Reserva</span>
          <CustomLink className="text-5xl font-light" href="/">
            {" alojamientos únicos"}
          </CustomLink>
          <span className="text-5xl font-light">
            {" y descubre cada destino como un habitante más."}
          </span>
        </div>
      </h1>
      <SearchBar />
    </div>
  );
};
