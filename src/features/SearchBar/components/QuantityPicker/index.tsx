import classnames from "classnames";
import type { FC } from "react";

type QuantityPickerProps = {
  min: number;
  max: number;
  quantity: number;
  setQuantity: any;
};

export const QuantityPicker: FC<QuantityPickerProps> = ({
  min,
  max,
  quantity,
  setQuantity,
}) => {
  const increment = () => {
    if (quantity >= max) return;
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity <= min) return;
    setQuantity(quantity - 1);
  };

  const isDisabled = quantity <= min;
  const isDisabledMax = quantity >= max;

  const buttonStyle =
    "flex items-center justify-center w-8 h-8 border border-solid rounded-full border-lightseagreen";

  const minButtonStyles = classnames(buttonStyle, {
    "border-gray-200": isDisabled,
  });

  const maxButtonStyles = classnames(buttonStyle, {
    "border-gray-200": isDisabledMax,
  });

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        title="Decrement"
        aria-label="Decrement"
        className={minButtonStyles}
        onClick={decrement}
      >
        <span className="font-bold">-</span>
      </button>
      <div className="flex flex-col items-center justify-center gap-1">
        <span className="text-lg font-semibold">{quantity}</span>
      </div>
      <button
        title="Increment"
        aria-label="Increment"
        className={maxButtonStyles}
        onClick={increment}
      >
        <span className="font-bold">+</span>
      </button>
    </div>
  );
};
