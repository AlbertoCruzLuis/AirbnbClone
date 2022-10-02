import { useContext } from "react";

import { FlagContext } from "../../contexts/FlagContext";

export const useInteractiveMode = () => {
  const { isInteractiveMode, setInteractiveMode } = useContext(FlagContext);

  return {
    isInteractiveMode,
    setInteractiveMode,
  };
};
