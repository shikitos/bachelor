import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.scss';
import { concatClassNames } from '../../utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={concatClassNames(styles.button, className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);
