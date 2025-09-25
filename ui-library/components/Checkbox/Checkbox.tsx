'use client';

import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import { CheckIcon } from "@/ui-library/icons/CheckIcon";
import { Paragraph } from "@/ui-library/Typos/Paragraph";

interface CheckboxProps {
  label?: string;
}

const Checkbox = ({
  label = ''
}: CheckboxProps) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <HeadlessCheckbox
        checked={true}
        onChange={() => {}}
        className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-indigo-500 ring-inset focus:not-data-focus:outline-none data-checked:bg-white data-focus:outline data-focus:outline-offset-2 data-focus:outline-white"
      >
        <CheckIcon />
      </HeadlessCheckbox>
      <Paragraph>{label}</Paragraph>
    </div>
  )
}

export { Checkbox };