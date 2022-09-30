import Image from "next/image";
import { HiStar } from "react-icons/hi";

import { CustomLink } from "@/components/CustomLink";

interface IApartamentCardProps {
  imageUrl: string;
  price: number;
  country: string;
  province: string;
  rating: number;
}

export const ApartamentCard = ({
  imageUrl,
  price,
  country,
  province,
  rating,
}: IApartamentCardProps) => {
  return (
    <CustomLink className="flex flex-col gap-2" href="/">
      <Image
        className="rounded-xl"
        src={imageUrl}
        alt="apartament"
        width={263}
        height={276}
        objectFit="cover"
      />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-2">
          <span className="font-bold">{`${province}, ${country}`}</span>
          <div className="flex items-center gap-1">
            <HiStar />
            {rating && <span>{rating}</span>}
            {!rating && <span>New</span>}
          </div>
        </div>
        <div className="flex gap-1">
          <span className="font-bold">$ {price}</span>
          <span>night</span>
        </div>
      </div>
    </CustomLink>
  );
};
