interface IPaginationButtonProps {
  children: string;
  floatRight?: boolean;
  onClick: () => void;
}

export const PaginationButton: React.FC<IPaginationButtonProps> = ({
  children,
  floatRight = false,
  onClick,
}) => {
  return (
    <button onClick={onClick} style={{ float: floatRight ? "right" : "left" }}>
      {children}
    </button>
  );
};
