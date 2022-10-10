import { MdClose } from "react-icons/md";

interface IFilterHeaderProps {
  onClose: () => void;
}

export const FilterHeader = ({ onClose }: IFilterHeaderProps) => {
  return (
    <header className="relative flex items-center justify-center border-b border-solid p-3">
      <button className="absolute left-4" onClick={onClose}>
        <MdClose />
      </button>
      <span className="font-semibold">Filtros</span>
    </header>
  );
};
