import styles from "./index.module.css";

interface IPaginationButtonProps {
  children: string;
  onClick: () => void;
}

export const PaginationButton: React.FC<IPaginationButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};
