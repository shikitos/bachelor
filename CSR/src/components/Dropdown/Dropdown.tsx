import { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  trigger: string;
  items: ReactNode[];
};

export const Dropdown = ({ trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: Event): void => {
    if (!dropdownRef.current) return;
    if (dropdownRef.current.contains(event.target as HTMLElement)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button onClick={handleToggle} className="dropdown-trigger">
        {trigger}
      </button>
      {isOpen && (
        <div className={styles["dropdown-menu"]}>
          <ul>
            {items.map((item, index) => (
              <li key={index} className="dropdown-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
