import { createContext } from "react";

import type { FeatureName } from "../../providers/FlagProvider";

interface IContextValue {
  flags: { [key: FeatureName]: { isEnabled: boolean } };
  setFlags: (flags: { [key: FeatureName]: { isEnabled: boolean } }) => void;
  modes: { [key: string]: FeatureName[] };
  setModes: (modes: { [key: string]: FeatureName[] }) => void;
  isInteractiveMode: boolean;
  setInteractiveMode: (isInteractiveMode: boolean) => void;
}

export const FlagContext = createContext<IContextValue>({
  flags: {},
  setFlags: () => {},
  modes: {},
  setModes: () => {},
  isInteractiveMode: false,
  setInteractiveMode: () => {},
});
