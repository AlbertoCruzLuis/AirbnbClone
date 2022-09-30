import { ApartamentListSection } from "@/features/Apartament/content/ApartamentListSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const Index = () => {
  return (
    <PageLayout
      meta={
        <Meta
          title="Alojamientos vacacionales y apartamentos en Airbnb"
          description="Alojamientos vacacionales y apartamentos en Airbnb"
        />
      }
    >
      <ApartamentListSection />
    </PageLayout>
  );
};

export default Index;
