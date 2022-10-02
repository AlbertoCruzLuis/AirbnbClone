import { useFlags } from "@/features/FeatureFlag/hooks/useFlags";
import { useModes } from "@/features/FeatureFlag/hooks/useModes";

import { FeatureList } from "../FeatureList";

interface IDropdownModeProps {
  modeName: string;
  dropdownOpen: string;
  setDropdownOpen: (modeName: string) => void;
}

export const DropdownMode = ({
  modeName,
  dropdownOpen,
  setDropdownOpen,
}: IDropdownModeProps) => {
  const { activateMode, featuresOfMode } = useModes();
  const { getStateOfFlag, updateFlag } = useFlags();

  return (
    <li key={modeName} className="flex flex-col gap-2">
      <button
        className="w-full rounded-md border border-solid p-2"
        onClick={() => {
          setDropdownOpen(modeName);
          activateMode(modeName);
        }}
      >
        {modeName}
      </button>
      {dropdownOpen === modeName && (
        <FeatureList
          features={featuresOfMode(modeName)}
          handleFeatureChange={updateFlag}
          getStateOfFlag={getStateOfFlag}
        />
      )}
    </li>
  );
};
