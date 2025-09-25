import { PropsWithChildren } from "react";
import clsx from "clsx";

interface ParagraphProps extends PropsWithChildren {
  color?: string;
}

const Paragraph = ({
  children,
  color
}: ParagraphProps) => {
  return (
    <p className={clsx("text-base text-indigo-500", color)}>
      {children}
    </p>
  )
}

export { Paragraph };