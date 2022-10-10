import { defaultCheckedState } from "../constants";

export const initialCheckedState = (accommodationType: string[]) => {
  const checkedState = { ...defaultCheckedState };

  if (!Array.isArray(accommodationType)) return checkedState;

  accommodationType.forEach((type) => {
    checkedState[type] = true;
  });

  return checkedState;
};
