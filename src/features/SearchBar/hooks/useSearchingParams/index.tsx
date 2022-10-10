import { useQueryParams } from "@/hooks/useQueryParams";

interface SearchParams {
  place?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  infants?: number;
}

export const useSearchingParams = () => {
  const { query, setQuery, removeQueries, router } = useQueryParams();

  const getFiltersBySearchFromQuery = (): SearchParams => {
    const searchFilters: SearchParams = {};

    if (query.place) searchFilters.place = query.place as string;
    if (query.checkIn) searchFilters.checkIn = query.checkIn as string;
    if (query.checkOut) searchFilters.checkOut = query.checkOut as string;
    if (query.adults) searchFilters.adults = Number(query.adults);
    if (query.children) searchFilters.children = Number(query.children);
    if (query.infants) searchFilters.infants = Number(query.infants);

    return searchFilters;
  };

  const clearFilters = (options = { isRefresh: true }) => {
    const keys = [
      "place",
      "checkIn",
      "checkOut",
      "adults",
      "children",
      "infants",
    ];
    removeQueries(keys, { isRefresh: options.isRefresh });
  };

  const setFilters = (filters: SearchParams, pathname = router.pathname) => {
    const draftFilters: Record<string, string | string[]> = {};

    if (filters.place) draftFilters.place = filters.place;
    if (filters.checkIn) draftFilters.checkIn = filters.checkIn;
    if (filters.checkOut) draftFilters.checkOut = filters.checkOut;
    if (filters.adults) draftFilters.adults = String(filters.adults);
    if (filters.children) draftFilters.children = String(filters.children);
    if (filters.infants) draftFilters.infants = String(filters.infants);

    clearFilters({ isRefresh: false });

    setQuery({ ...query, ...draftFilters }, pathname);
  };

  return {
    filters: getFiltersBySearchFromQuery(),
    setFilters,
    clearFilters,
    router,
  };
};
