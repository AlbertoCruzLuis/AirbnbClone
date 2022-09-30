import { ComingSoonSection } from "@/content/ComingSoonSection";
import { Meta } from "@/layouts/Meta";
import { PageLayout } from "@/layouts/PageLayout";

const SignUp = () => {
  return (
    <PageLayout meta={<Meta title="Sign up" description="Sign up" />}>
      <ComingSoonSection />
    </PageLayout>
  );
};

export default SignUp;
