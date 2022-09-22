import type { ReactNode } from "react";

import { Header } from "@/components/Header";
import { FooterSection } from "@/features/Footer/content/FooterSection";

type IPageLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const PageLayout = (props: IPageLayoutProps) => (
  <div>
    {props.meta}
    <Header />
    <main className="flex min-h-screen flex-col">{props.children}</main>
    <FooterSection />
  </div>
);
