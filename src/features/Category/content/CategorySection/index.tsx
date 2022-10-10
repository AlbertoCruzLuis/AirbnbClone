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
    <div className="flex gap-8 overflow-hidden">
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
  );
};

export const CategorySection = memo(CategorySectionComponent);
