import { Checkbox } from "..";

interface IAccommodationOptionProps {
  accomodationTitle: string;
  accomodationDescription: string;
  checked?: boolean;
  handleChange?: () => void;
}

export const AccommodationOption = ({
  accomodationTitle,
  accomodationDescription,
  checked,
  handleChange,
}: IAccommodationOptionProps) => {
  return (
    <label className="cursor-pointer" htmlFor={accomodationTitle}>
      <div className="flex gap-4">
        <Checkbox
          id={accomodationTitle}
          checked={checked}
          handleChange={handleChange}
        />
        <div className="flex flex-col gap-1">
          <span>{accomodationTitle}</span>
          <span className="text-sm text-gray-600">
            {accomodationDescription}
          </span>
        </div>
      </div>
    </label>
  );
};
