import { PropsWithChildren } from "react";

const AuthLayout = ({
  children
}: PropsWithChildren) => {
  return (
    <div className="h-full grid md:grid-flow-col md:grid-rows-1 md:grid-cols-3">
      <div className="h-full md:col-span-2">
        {children}
      </div>
      <div className="order-first md:order-last transition-all duration-500 bg-linear-to-br from-indigo-600 via-purple-500  to-light-purple-400 col-span-1"></div>
    </div>
  )
}

export default AuthLayout;