import { useQueryParams } from "@/hooks/useQueryParams";

export interface Filters {
  minPrice?: number;
  maxPrice?: number;
  accommodationType?: string[];
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  rating?: number;
}

export const useFilteringParams = () => {
  const { query, setQuery, removeQueries } = useQueryParams();

  const getFiltersFromQuery = (): Filters => {
    const filters: Filters = {};

    if (query.bathrooms) filters.bathrooms = Number(query.bathrooms);
    if (query.bedrooms) filters.bedrooms = Number(query.bedrooms);
    if (query.beds) filters.beds = Number(query.beds);
    if (query.rating) filters.rating = Number(query.rating);
    if (query.minPrice) filters.minPrice = Number(query.minPrice);
    if (query.maxPrice) filters.maxPrice = Number(query.maxPrice);
    if (query.accommodationType) {
      if (Array.isArray(query.accommodationType)) {
        filters.accommodationType = query.accommodationType as string[];
      } else {
        filters.accommodationType = [query.accommodationType as string];
      }
    }

    return filters;
  };

  const clearFilters = (options = { isRefresh: true }) => {
    const keys = [
      "minPrice",
      "maxPrice",
      "accommodationType",
      "bathrooms",
      "bedrooms",
      "beds",
    ];
    removeQueries(keys, { isRefresh: options.isRefresh });
  };

  const setFilters = (filters: Filters) => {
    const draftFilters: Record<string, string | string[]> = {};

    if (filters.bathrooms) draftFilters.bathrooms = String(filters.bathrooms);
    if (filters.bedrooms) draftFilters.bedrooms = String(filters.bedrooms);
    if (filters.beds) draftFilters.beds = String(filters.beds);
    if (filters.rating) draftFilters.rating = String(filters.rating);
    if (filters.minPrice) draftFilters.minPrice = String(filters.minPrice);
    if (filters.maxPrice) draftFilters.maxPrice = String(filters.maxPrice);
    if (filters.accommodationType) {
      draftFilters.accommodationType = filters.accommodationType;
    }

    clearFilters({ isRefresh: false });

    setQuery({ ...query, ...draftFilters });
  };

  return {
    filters: getFiltersFromQuery(),
    setFilters,
    clearFilters,
  };
};
