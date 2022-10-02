import { useContext } from "react";

import { FlagContext } from "../../contexts/FlagContext";

export const useModes = () => {
  const { modes, setFlags } = useContext(FlagContext);

  const availableModes = Object.keys(modes);

  const activateMode = (modeName: string) => {
    const featuresToActivate = modes[modeName];

    if (!featuresToActivate) return;

    const newFlags = featuresToActivate.reduce((acc, featureName) => {
      return {
        ...acc,
        [featureName]: {
          isEnabled: true,
        },
      };
    }, {});
    setFlags(newFlags);
  };

  const featuresOfMode = (modeName: string) => {
    return modes[modeName];
  };

  return {
    activateMode,
    availableModes,
    featuresOfMode,
  };
};
