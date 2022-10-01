import "react-loading-skeleton/dist/skeleton.css";

import Skeleton from "react-loading-skeleton";

export const ApartamentCardSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-52" />
      <div>
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  );
};
