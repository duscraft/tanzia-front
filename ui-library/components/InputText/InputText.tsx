import { Field, Input, Label } from '@headlessui/react'
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface InputTextProps {
  label: string;
  name?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputText = ({
  label,
  name,
  placeholder = 'toto',
  type = 'text',
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
          'data-focus:top-0 text-indigo-400/75')}
        >
          {label}
        </Label>
      </Field>
    </div>
  )
}

export { InputText }