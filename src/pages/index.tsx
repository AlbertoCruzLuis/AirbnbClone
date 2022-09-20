import { Meta } from '@/layouts/Meta';
import { PageLayout } from '@/layouts/PageLayout';

const Index = () => {
  return (
    <PageLayout meta={<Meta title="Index" description="Index page" />}>
      <h1>Index Page</h1>
    </PageLayout>
  );
};

export default Index;
