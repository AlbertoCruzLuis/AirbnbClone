export const FeatureFlagConfig = {
  features: {
    FOOTER_V1: { isEnabled: false },
    FOOTER_V2: { isEnabled: true },
    HEADER_V1: { isEnabled: false },
    HEADER_V2: { isEnabled: true },
    CATEGORY: { isEnabled: true },
  },
  modes: {
    VERSION1: ["FOOTER_V1", "HEADER_V1"],
    VERSION2: ["FOOTER_V2", "HEADER_V2", "CATEGORY"],
  },
};
