interface IButtonProps {
  className?: string;
  name: string;
  handleClick?: () => void;
}

export const Button = ({ className, name, handleClick }: IButtonProps) => {
  return (
    <button className={className} onClick={handleClick}>
      <span>{name}</span>
    </button>
  );
};
