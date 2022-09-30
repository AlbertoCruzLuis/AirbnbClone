import { ComingSoonSection } from "@/content/ComingSoonSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const LogIn = () => {
  return (
    <PageLayout meta={<Meta title="Log In" description="Log In" />}>
      <ComingSoonSection />
    </PageLayout>
  );
};

export default LogIn;
