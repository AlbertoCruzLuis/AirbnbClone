import { Select } from "@/components/Select";

export const CurrencySwitcher = () => {
  return <Select options={["USD", "EUR", "GBP"]} defaultValue="EUR" />;
};
