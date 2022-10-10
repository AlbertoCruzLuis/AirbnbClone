import type { FC } from "react";
import { useState } from "react";

import { AccommodationOption } from "./components/Checkbox/AccommodationOption";
import { initialCheckedState } from "./utils";

interface IAccommodationTypeProps {
  accommodationType: string[];
  onAccommodationTypeChange: (accommodationType: string[]) => void;
}

export const AccommodationType: FC<IAccommodationTypeProps> = ({
  accommodationType,
  onAccommodationTypeChange,
}) => {
  const [checked, setChecked] = useState(
    initialCheckedState(accommodationType)
  );

  const handleChange = (accommodationOption: string) => {
    const newChecked = {
      ...checked,
      [accommodationOption]: !checked[accommodationOption],
    };
    setChecked(newChecked);
    onAccommodationTypeChange(
      Object.keys(newChecked).filter((key) => newChecked[key])
    );
  };
  return (
    <section className="flex flex-col gap-2 p-4">
      <h2 className="pb-2 text-xl font-bold">Tipo de alojamiento</h2>
      <div className="grid grid-cols-2">
        <AccommodationOption
          accomodationTitle="Alojamiento entero"
          accomodationDescription="Un alojamiento solo para ti"
          checked={checked.full}
          handleChange={() => handleChange("full")}
        />
        <AccommodationOption
          accomodationTitle="Habitación privada"
          accomodationDescription="Una habitación privada en un alojamiento u hotel, además de zonas comunes compartidas"
          checked={checked.private}
          handleChange={() => handleChange("private")}
        />
        <AccommodationOption
          accomodationTitle="Habitación compartida"
          accomodationDescription="Un espacio para dormir y zonas comunes a las que pueden tener acceso otras personas"
          checked={checked.shared}
          handleChange={() => handleChange("shared")}
        />
      </div>
    </section>
  );
};
