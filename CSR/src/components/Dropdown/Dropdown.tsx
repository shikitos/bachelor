import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  trigger: string;
  items: ReactNode[];
};

export const Dropdown = ({ trigger, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleClickOutside = (event: Event): void => {
    if (!dropdownRef.current) return;
    if (dropdownRef.current.contains(event.target as HTMLElement)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mouseover', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={handleToggle} className="dropdown-trigger">
        {trigger}
      </button>
      {!isOpen && (
        <ul className={styles['dropdown-menu']}>
          {items.map((item, index) => (
            <li key={index} className={styles['dropdown-menu__item']}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
