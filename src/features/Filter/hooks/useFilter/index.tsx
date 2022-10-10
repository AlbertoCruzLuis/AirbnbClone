import _ from "lodash";
import { useState } from "react";

import { useApartament } from "@/features/Apartament/hooks/useApartament";
import { useApartamentFilter } from "@/features/Apartament/hooks/useApartamentFilter";

import { defaultFilters } from "../../constants";
import type { Filters } from "../useFilteringParams";
import { useFilteringParams } from "../useFilteringParams";

interface IuseFilterProps {
  onClose: () => void;
}

export const useFilter = ({ onClose }: IuseFilterProps) => {
  const { filters, setFilters, clearFilters } = useFilteringParams();
  const initialFilters = _.isEmpty(filters) ? defaultFilters : filters;
  const [draftFilters, setDraftFilters] = useState(initialFilters);

  const { filters: generalFilters } = useApartamentFilter();
  const { apartaments } = useApartament(generalFilters);

  const applyFilters = (newFilters: Filters) => {
    if (_.isEqual(filters, newFilters) || _.isEqual(defaultFilters, newFilters))
      return;

    setFilters(newFilters);
    onClose();
  };

  const addFilter = (filter: keyof Filters, value: Filters[keyof Filters]) => {
    const newFilters = { ...draftFilters, [filter]: value };

    setDraftFilters(newFilters);
  };

  const clearFiltersHandle = () => {
    if (_.isEmpty(filters)) return;

    clearFilters();
    onClose();
  };

  const getAveragePrice = () => {
    const prices = apartaments?.map((apartament) => apartament.price);

    if (_.isEmpty(prices)) return 0;

    return Math.round(_.mean(prices));
  };

  return {
    draftFilters,
    addFilter,
    applyFilters,
    clearFiltersHandle,
    averagePrice: getAveragePrice(),
  };
};
