import type { FC } from "react";

import { ApartamentCard } from "@/features/Apartament/components/ApartamentCard";
import type { IApartament } from "@/features/Apartament/hooks/useApartament";
import { useApartament } from "@/features/Apartament/hooks/useApartament";
import type { Filters } from "@/utils/filters";

type IApartamentListSectionProps = {
  filters?: Filters;
};

export const ApartamentListSection: FC<IApartamentListSectionProps> = ({
  filters,
}) => {
  const { apartaments } = useApartament(filters);
  return (
    <div className="grid grid-cols-auto-fit gap-8 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:p-0 xl:pt-8 xs:grid-cols-1 ">
      {apartaments?.map((apartament: IApartament) => (
        <ApartamentCard
          key={apartament.id}
          imageUrl={apartament.imageUrl}
          price={apartament.price}
          country={apartament.country}
          province={apartament.province}
          rating={apartament.rating}
        />
      ))}
    </div>
  );
};
