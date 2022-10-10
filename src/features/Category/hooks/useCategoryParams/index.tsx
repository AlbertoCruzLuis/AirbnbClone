import { useQueryParams } from "@/hooks/useQueryParams";

interface CategoryParams {
  category?: string;
}

export const useCategoryParams = () => {
  const { query, setQuery, removeQueries } = useQueryParams();

  const getFiltersByCategoryFromQuery = (): CategoryParams => {
    const categoryFilters: CategoryParams = {};

    if (query.category) categoryFilters.category = query.category as string;

    return categoryFilters;
  };

  const clearFilters = (options = { isRefresh: true }) => {
    removeQueries(["category"], { isRefresh: options.isRefresh });
  };

  const setFilters = (filters: CategoryParams) => {
    const draftFilters: Record<string, string | string[]> = {};

    if (filters.category) draftFilters.category = filters.category;

    clearFilters({ isRefresh: false });

    setQuery({ ...query, ...draftFilters });
  };

  return {
    filters: getFiltersByCategoryFromQuery(),
    setFilters,
    clearFilters,
  };
};
