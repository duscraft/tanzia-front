import { Field, Input } from '@headlessui/react'
import clsx from "clsx";

interface InputTextProps {
  label: string;
  name?: string;
}

const InputText = ({
  name
}: InputTextProps) => {
  return (
    <div className="w-full">
      <Field className="h-12 relative">
        <Input
          name={name}
          className={clsx(
            'cursor-pointer h-full border border-indigo-500 mt-3 block w-full rounded-lg  px-3 py-1.5 text-sm/6 text-indigo-600',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-indigo-600 bg-white',
            'transition-colors hover:border-indigo-400'
          )}
        />
      </Field>
    </div>
  )
}

export { InputText }