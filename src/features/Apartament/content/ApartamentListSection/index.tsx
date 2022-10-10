import type { FC } from "react";

import { ApartamentCard } from "@/features/Apartament/components/ApartamentCard";
import { ApartamentCardSkeleton } from "@/features/Apartament/components/ApartamentCard/Skeleton";
import type { IApartament } from "@/features/Apartament/hooks/useApartament";
import { useApartament } from "@/features/Apartament/hooks/useApartament";

import type { ApartamentFilters } from "../../utils/filters";

type IApartamentListSectionProps = {
  filters?: ApartamentFilters;
};

export const ApartamentListSection: FC<IApartamentListSectionProps> = ({
  filters,
}) => {
  const { apartaments, isApartamentLoading } = useApartament(filters);

  const gridStyle =
    "grid gap-8 p-8 grid-cols-auto-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:p-0 xl:py-8 xs:grid-cols-1 ";

  if (isApartamentLoading) {
    return (
      <div className={gridStyle}>
        {new Array(10).fill(0).map((_, index) => (
          <ApartamentCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <section className={gridStyle}>
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
    </section>
  );
};
