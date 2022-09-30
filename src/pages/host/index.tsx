import { ComingSoonSection } from "@/content/ComingSoonSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const Host = () => {
  return (
    <PageLayout
      meta={
        <Meta
          title="Aloja huespedes en Airbnb"
          description="Aloja huespedes en Airbnb"
        />
      }
    >
      <ComingSoonSection />
    </PageLayout>
  );
};

export default Host;
