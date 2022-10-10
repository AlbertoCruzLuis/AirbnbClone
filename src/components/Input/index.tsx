interface IInputProps {
  label: string;
  id?: string;
  currency?: string;
  value: number;
  onChange?: (value: number) => void;
}

export const Input = ({
  label,
  id,
  currency = "€",
  value,
  onChange = () => {},
}: IInputProps) => {
  return (
    <div className="rounded-md border border-solid border-gray-400 p-2">
      <label className="" htmlFor={id}>
        <div className="">
          <div className="text-xs">{label}</div>
        </div>
        <div dir="ltr">
          <div className="flex gap-2">
            <div className="">
              <span>{currency}</span>
            </div>
            <input
              aria-label={label}
              id={id}
              className="outline-none"
              autoComplete="off"
              type="number"
              value={value}
              onChange={(e) => {
                const newValue = parseInt(e.target.value, 10);
                if (newValue) {
                  onChange(newValue);
                }
              }}
            />
          </div>
        </div>
      </label>
    </div>
  );
};
