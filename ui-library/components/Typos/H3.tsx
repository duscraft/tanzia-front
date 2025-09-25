import { PropsWithChildren } from "react";

const H3 = ({
  children
}: PropsWithChildren) => {
  return (
    <h3 className="text-3xl font-semibold text-indigo-500">{children}</h3>
  )
}

export { H3 };