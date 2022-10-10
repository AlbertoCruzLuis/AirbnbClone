import { useQuery } from "@tanstack/react-query";

import { useQueryParams } from "@/hooks/useQueryParams";

import { categoriesJson } from "../../constants/categories";

export interface ICategory {
  name: string;
  imageUrl: string;
}

export const useCategory = () => {
  const { query, setQuery, router } = useQueryParams();
  const { data: categories, isLoading: isCategoryLoading } = useQuery(
    ["categories"],
    async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });

      return categoriesJson;
    }
  );

  const changeCategory = (name: string) => {
    setQuery({ ...query, category: name });
  };

  const getSelectedCategory = () => {
    return query.category;
  };

  return {
    categories,
    isCategoryLoading,
    changeCategory,
    selectedCategory: getSelectedCategory(),
    router,
  };
};
