import { useState } from "react";

import { useModes } from "@/features/FeatureFlag/hooks/useModes";

import { DropdownMode } from "../DropdownMode";

export const AvailableModes = () => {
  const { availableModes } = useModes();
  const [dropdownOpen, setDropdownOpen] = useState("");
  return (
    <div className="flex flex-col gap-2">
      <h2>Available Modes</h2>
      <ul className="flex gap-2 xs:flex-col">
        {availableModes.map((mode) => (
          <DropdownMode
            key={mode}
            modeName={mode}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        ))}
      </ul>
    </div>
  );
};
