'use client';

import * as React from 'react';
import { Button as HeadlessButton } from '@headlessui/react'
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: 'primary' | 'success' | 'error' | 'warning';
  size?: 'medium' | 'large';
}

export const Button = ({
  label,
  onClick,
  color = 'primary',
  size = "medium"
}: ButtonProps) => {

  const colors = {
    primary: 'bg-indigo-500',
    success: 'bg-success-500',
    error: 'bg-error-500',
    warning: 'bg-warning-500',
  }

  const sizes = {
    medium: 'h-8 md:h-10',
    large: 'h-12 md:h-12 md:min-h-12',
  }

  return (
    <HeadlessButton
      className={twMerge(colors[color], sizes[size], "cursor-pointer inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white")} onClick={onClick}>
      {label}
    </HeadlessButton>
  );
}