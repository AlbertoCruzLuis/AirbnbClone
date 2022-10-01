import Image from "next/image";

import { CustomLink } from "@/components/CustomLink";

import { Rating } from "./Rating";

interface IApartamentCardProps {
  imageUrl: string;
  price: number;
  country: string;
  province: string;
  rating: number;
  url?: string;
}

export const ApartamentCard = ({
  imageUrl,
  price,
  country,
  province,
  rating,
  url = "/",
}: IApartamentCardProps) => {
  return (
    <CustomLink className="flex flex-col gap-2" href={url}>
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
          <Rating rating={rating} />
        </div>
        <div className="flex gap-1">
          <span className="font-bold">$ {price}</span>
          <span>night</span>
        </div>
      </div>
    </CustomLink>
  );
};
