import { FeatureRender } from "../FeatureFlag/components/FeatureRender";
import { CategorySection } from "./content/CategorySection";

const categoryVersions = {
  CATEGORY: <CategorySection />,
};

export const Category = () => {
  return <FeatureRender versions={categoryVersions} />;
};
