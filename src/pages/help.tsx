import { ComingSoonSection } from "@/content/ComingSoonSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const Help = () => {
  return (
    <PageLayout meta={<Meta title="Help" description="Help" />}>
      <ComingSoonSection />
    </PageLayout>
  );
};

export default Help;
