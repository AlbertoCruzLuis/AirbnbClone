import { ApartamentListSection } from "@/features/Apartament/content/ApartamentListSection";
import { useApartamentFilter } from "@/features/Apartament/hooks/useApartamentFilter";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const Index = () => {
  const { filters } = useApartamentFilter();

  return (
    <PageLayout
      meta={
        <Meta
          title="Alojamientos vacacionales y apartamentos en Airbnb"
          description="Alojamientos vacacionales y apartamentos en Airbnb"
        />
      }
    >
      <ApartamentListSection filters={filters} />
    </PageLayout>
  );
};

export default Index;
