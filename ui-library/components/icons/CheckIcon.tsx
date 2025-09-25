import { IconProps } from "@/ui-library/icons/types";

const CheckIcon = ({
  color = 'currentColor',
  className,
  size = 16
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      className={className}
      width={size}
      height={size}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"/>
    </svg>
  )
}


export { CheckIcon };