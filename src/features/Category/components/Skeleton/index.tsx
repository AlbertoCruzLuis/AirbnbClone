import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

export const CategoryCardSkeleton = () => {
  return (
    <div className="flex w-14 flex-col gap-2">
      <div className="flex justify-center">
        <Skeleton circle width={24} height={24} />
      </div>
      <Skeleton />
    </div>
  );
};
