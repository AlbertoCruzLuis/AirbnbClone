import type { ReactNode } from "react";
import { useState } from "react";

import { FlagContext } from "@/features/FeatureFlag/contexts/FlagContext";

const defaultConfig: IConfiguration = {
  features: {},
  modes: {},
};

interface IFlagProviderProps {
  config: IConfiguration;
  children?: ReactNode;
}

export type FeatureName = string;

interface IConfiguration {
  features: { [key: FeatureName]: { isEnabled: boolean } };
  modes: { [key: string]: FeatureName[] };
}

export const FlagProvider = ({
  config = defaultConfig,
  children,
}: IFlagProviderProps) => {
  const [flags, setFlags] = useState(config.features);
  const [modes, setModes] = useState(config.modes);
  const [isInteractiveMode, setInteractiveMode] = useState(false);

  const contextValue = {
    flags,
    setFlags,
    modes,
    setModes,
    isInteractiveMode,
    setInteractiveMode,
  };

  return (
    <FlagContext.Provider value={contextValue}>{children}</FlagContext.Provider>
  );
};
