import type { Filters } from "@/features/Filter/hooks/useFilteringParams";

interface IFilterFooterProps {
  draftFilters: Filters;
  applyFilters: (newFilters: Filters) => void;
  clearFilters: () => void;
}

export const FilterFooter = ({
  draftFilters,
  applyFilters,
  clearFilters,
}: IFilterFooterProps) => {
  return (
    <footer className="flex justify-between p-4">
      <button className="px-4 py-3 hover:bg-gray-50" onClick={clearFilters}>
        <span className="font-semibold underline">Quitar Filtros</span>
      </button>
      <button
        aria-label="Aplicar filtros"
        className="rounded-md bg-neutral-800 px-4 py-3 hover:bg-black"
        onClick={() => applyFilters(draftFilters)}
      >
        <span className="font-semibold text-white">Mostrar X alojamientos</span>
      </button>
    </footer>
  );
};
