import { Input } from "@/components/Input";

interface IPriceRangeProps {
  averagePrice: number;
  maxPrice: number;
  minPrice: number;
  onMinPriceChange?: (price: number) => void;
  onMaxPriceChange?: (price: number) => void;
}

export const PriceRange = ({
  averagePrice,
  maxPrice,
  minPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: IPriceRangeProps) => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="text-xl font-bold">Rango de precios</h2>
      <span className="pb-8 text-gray-600">
        El precio medio por noche es de {averagePrice} €
      </span>
      <div className="flex items-center justify-center gap-2">
        <Input
          id="minPrice"
          label="Precio mínimo"
          value={minPrice}
          onChange={onMinPriceChange}
        />
        <span>-</span>
        <Input
          id="maxPrice"
          label="Precio máximo"
          value={maxPrice}
          onChange={onMaxPriceChange}
        />
      </div>
    </div>
  );
};
