import classNames from "classnames";
import Image from "next/image";

interface ICategoryProps {
  name: string;
  imageUrl: string;
  handleClick?: () => void;
  isSelected?: boolean;
}

export const CategoryCard = ({
  name,
  imageUrl,
  handleClick,
  isSelected = false,
}: ICategoryProps) => {
  const buttonStyle = classNames(
    "py-3 mt-1 border-b-2 border-solid",
    { "border-black": isSelected },
    { "border-transparent hover:border-gray-200": !isSelected }
  );

  return (
    <button aria-label={name} onClick={handleClick} className={buttonStyle}>
      <div className="flex min-w-[56px] flex-col gap-2">
        <div>
          <Image src={imageUrl} alt={name} width={24} height={24} />
        </div>
        <span className="text-xs">{name}</span>
      </div>
    </button>
  );
};
