import * as React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'
import {twMerge} from "tailwind-merge";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'success' | 'error' | 'warning';
}

export const Button = ({
  label,
  onClick,
  color = 'primary',
}: ButtonProps) => {

  console.log(color);

  const colors = {
    primary: 'bg-primary-500',
    success: 'bg-success-500',
    error: 'bg-error-500',
    warning: 'bg-warning-500',
  }

  return (
    <HeadlessButton
      className={twMerge(colors[color], "cursor-pointer inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white")} onClick={onClick}>
      {label}
    </HeadlessButton>
  );
}