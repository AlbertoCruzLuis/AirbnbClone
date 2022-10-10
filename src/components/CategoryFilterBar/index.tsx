import { FeatureRender } from "@/features/FeatureFlag/components/FeatureRender";

import { CategoryFilterBarSection } from "./content/CategoryFilterBarSection";

const categoryFilterBarVersions = {
  CATEGORY_FILTER_BAR: <CategoryFilterBarSection />,
};

export const CategoryFilterBar = () => {
  return <FeatureRender versions={categoryFilterBarVersions} />;
};
