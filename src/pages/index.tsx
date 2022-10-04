import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeatureFlagManagement } from "@/features/FeatureFlagManagement";
import { Footer } from "@/features/Footer";
import { Meta } from "@/layouts/Meta";

const Index = () => {
  return (
    <>
      <Meta
        title="Alojamientos vacacionales y apartamentos en Airbnb"
        description="Alojamientos vacacionales y apartamentos en Airbnb"
      />
      <Header />
      <main
        role="main"
        className="mx-auto flex min-h-screen flex-col xl:container"
      >
        <Hero />
      </main>
      <Footer />
      <FeatureFlagManagement />
    </>
  );
};

export default Index;
