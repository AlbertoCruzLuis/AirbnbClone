import { useContext } from "react";

import { FlagContext } from "../../contexts/FlagContext";

interface IuseFlagProps {
  name: string;
}

export const useFlag = ({ name }: IuseFlagProps) => {
  const { flags, setFlags } = useContext(FlagContext);

  const isEnabled = flags[name]?.isEnabled;
  const updateFlag = (enabled: boolean) => {
    setFlags({
      ...flags,
      [name]: {
        isEnabled: enabled,
      },
    });
  };

  const activate = () => updateFlag(true);
  const deactivate = () => updateFlag(false);

  return {
    isEnabled,
    activate,
    deactivate,
    updateFlag,
  };
};
