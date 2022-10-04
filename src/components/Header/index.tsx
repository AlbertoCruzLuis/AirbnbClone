import { FeatureRender } from "@/features/FeatureFlag/components/FeatureRender";

import { HeaderV1 } from "./content/HeaderV1";
import { HeaderV2 } from "./content/HeaderV2";

const headerVersions = {
  HEADER_V1: <HeaderV1 />,
  HEADER_V2: <HeaderV2 />,
};

export const Header = () => {
  return <FeatureRender versions={headerVersions} />;
};
