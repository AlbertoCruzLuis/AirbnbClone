import { useState } from "react";
import Popup from "reactjs-popup";

import { FilterButton } from "../../components/FilterButton";
import { FilterModal } from "../../components/FilterModal";

export const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center sm:hidden xs:hidden">
      <FilterButton handleClick={() => setIsOpen(true)} />
      <Popup
        className="appearance-none pt-4"
        contentStyle={{
          display: "contents",
        }}
        overlayStyle={{
          background: "rgba(0, 0, 0, 0.5)",
          padding: "24px",
          justifyContent: "center",
        }}
        lockScroll
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <FilterModal
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </Popup>
    </div>
  );
};
