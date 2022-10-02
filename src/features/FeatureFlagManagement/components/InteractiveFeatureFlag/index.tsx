import Switch from "react-switch";

import { useInteractiveMode } from "@/features/FeatureFlag/hooks/useInteractiveMode";

export const InteractiveFeatureFlag = () => {
  const { isInteractiveMode, setInteractiveMode } = useInteractiveMode();
  return (
    <div className="flex gap-4">
      <span>Interactive Feature Flag</span>
      <Switch
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setInteractiveMode(!isInteractiveMode)}
        checked={isInteractiveMode}
      />
    </div>
  );
};
