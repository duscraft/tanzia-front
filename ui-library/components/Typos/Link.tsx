import { PropsWithChildren } from "react";

interface LinkProps extends PropsWithChildren {
  href: string;
}

const Link = ({
  children,
  href
}: LinkProps) => {
  return (
    <a className="text-indigo-400 cursor-pointer hover:underline transition-all" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export { Link };