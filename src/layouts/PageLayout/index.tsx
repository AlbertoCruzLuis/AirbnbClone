import type { ReactNode } from "react";

type IPageLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const PageLayout = (props: IPageLayoutProps) => (
  <div>
    {props.meta}
    {props.children}
  </div>
);
