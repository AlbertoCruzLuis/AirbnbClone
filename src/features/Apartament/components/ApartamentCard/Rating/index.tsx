import { HiStar } from "react-icons/hi";

interface IRatingProps {
  rating: number;
}

export const Rating = ({ rating }: IRatingProps) => {
  return (
    <div className="flex items-center gap-1">
      <HiStar />
      {rating && <span>{rating}</span>}
      {!rating && <span>New</span>}
    </div>
  );
};
