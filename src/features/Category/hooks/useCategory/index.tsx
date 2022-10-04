import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { categoriesJson } from "../../constants/categories";

export interface ICategory {
  name: string;
  imageUrl: string;
}

export const useCategory = () => {
  const router = useRouter();
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
    router.query.category = name;

    router.push(router);
  };

  const getSelectedCategory = () => {
    const categorySelected = router.query.category as string;
    return categorySelected;
  };

  const selectedCategory = useMemo(() => getSelectedCategory(), [router]);

  return {
    categories,
    isCategoryLoading,
    changeCategory,
    selectedCategory,
    router,
  };
};
