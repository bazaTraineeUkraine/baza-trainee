import { FC } from 'react';
import { TButtonProps } from './types';

export const PrimaryButton: FC<TButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
}) => (
  <button
    className={`active:bg-faint-on-dark inline-flex h-[5.6rem] items-center justify-center rounded-[0.4rem]
      border-2 border-neutral-800 bg-neutral-800 px-[5.6rem] text-[2.2rem] font-semibold 
      text-white transition ease-in hover:bg-white hover:text-neutral-800
      disabled:border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-500 ${className}`}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);
