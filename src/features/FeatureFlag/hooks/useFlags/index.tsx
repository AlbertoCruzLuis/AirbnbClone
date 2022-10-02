import { useContext } from "react";

import { FlagContext } from "../../contexts/FlagContext";

export const useFlags = () => {
  const { flags, setFlags } = useContext(FlagContext);

  const updateFlag = (name: string, enabled: boolean) => {
    setFlags({
      ...flags,
      [name]: {
        isEnabled: enabled,
      },
    });
  };

  // FIX: Object is possibly 'undefined'
  const getStateOfFlag = (name: string) => {
    return flags[name]?.isEnabled || false;
  };

  return {
    getStateOfFlag,
    updateFlag,
  };
};
