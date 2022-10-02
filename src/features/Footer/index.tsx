import { FeatureRender } from "../FeatureFlag/components/FeatureRender";
import { FooterSection } from "./content/FooterSection";
import { FooterV2 } from "./content/FooterV2";

const footerVersions = {
  FOOTER_V1: <FooterSection />,
  FOOTER_V2: <FooterV2 />,
};

export const Footer = () => {
  return <FeatureRender versions={footerVersions} />;
};
