import type { ReactNode } from "react";

import { CategoryFilterBar } from "@/components/CategoryFilterBar";
import { Header } from "@/components/Header";
import { FeatureFlagManagement } from "@/features/FeatureFlagManagement";
import { Footer } from "@/features/Footer";

type IPageLayoutProps = {
  meta?: ReactNode;
  children?: ReactNode;
};

export const PageLayout = (props: IPageLayoutProps) => {
  return (
    <div>
      {props.meta}
      <Header />
      <CategoryFilterBar />
      <main
        role="main"
        className="mx-auto flex min-h-screen flex-col xl:container"
      >
        {props.children}
      </main>
      <Footer />
      <FeatureFlagManagement />
    </div>
  );
};
