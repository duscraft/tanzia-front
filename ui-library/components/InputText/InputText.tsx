'use client';

import { Field, Input, Label } from '@headlessui/react'
import clsx from "clsx";
import { HTMLInputTypeAttribute, JSX } from "react";

interface InputTextProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  icon?: JSX.Element;
  iconAction?: () => void;
}

const InputText = ({
  label,
  name,
  placeholder = 'toto',
  type = 'text',
  icon,
  iconAction
}: InputTextProps) => {
  return (
    <div className="w-full">
      <Field className="h-12 relative">
        <Input
          name={name}
          className={clsx(
            'peer h-full border border-indigo-500 mt-3 block w-full rounded-lg  px-3 py-1.5 text-sm/6 text-indigo-600',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-indigo-600 bg-white',
            'transition-colors hover:border-indigo-400 placeholder-transparent'
          )}
          placeholder={placeholder}
          type={type}
        />
        <Label className={clsx('transition-all duration-250 peer-focus:text-xxs peer-focus:top-1',
          'peer-placeholder-shown:top-3 peer-placeholder-shown:text-base',
          'text-xxs top-1 absolute left-3',
          'data-focus:top-0 text-gray-600/50')}
        >
          {label}
        </Label>
        <div onClick={iconAction} className="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      </Field>
    </div>
  )
}

export { InputText }