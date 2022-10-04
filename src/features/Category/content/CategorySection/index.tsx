import { memo } from "react";

import { CategoryCard } from "../../components/CategoryCard";
import { CategoryCardSkeleton } from "../../components/Skeleton";
import { useCategory } from "../../hooks/useCategory";

const CategorySectionComponent = () => {
  const { categories, isCategoryLoading, changeCategory, selectedCategory } =
    useCategory();

  if (isCategoryLoading) {
    return (
      <div className="flex max-h-[76px] flex-wrap gap-8 overflow-hidden px-8 pt-4 xl:px-0">
        {new Array(12).fill(0).map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="sticky top-[calc(75px-16px)] z-10 pt-4 shadow-md ">
      <div className="mx-auto flex gap-8 overflow-hidden bg-white px-8 pt-4 xl:container xl:px-0">
        {categories?.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            imageUrl={category.imageUrl}
            isSelected={selectedCategory === category.name}
            handleClick={() => changeCategory(category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export const CategorySection = memo(CategorySectionComponent);
