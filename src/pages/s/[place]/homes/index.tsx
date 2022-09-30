import { useRouter } from "next/router";

import { ApartamentListSection } from "@/features/Apartament/content/ApartamentListSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const Index = () => {
  const { query } = useRouter();

  const filters = {
    country: query.place as string,
  };

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
